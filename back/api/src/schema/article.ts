import { Prisma, PrismaClient } from '@prisma/client'
import {
  extendType,
  inputObjectType,
  list,
  nonNull,
  objectType,
  intArg,
} from 'nexus'
import { Article } from 'nexus-prisma/dist-cjs/runtime/index'
import {
  ArgsRecord,
  asNexusMethod,
  booleanArg,
  NexusNullDef,
  NexusObjectTypeDef,
  scalarType,
} from 'nexus/dist/core'
import { context } from '../index'

import { GraphQLDateTime } from 'graphql-iso-date'
import GraphQLJSON from 'graphql-type-json'

export const GQLDate = asNexusMethod(GraphQLDateTime, 'DateTime')
GraphQLJSON.name = 'Json'
export const GQLJson = asNexusMethod(GraphQLJSON, 'Json')

const _article = objectType({
  name: Article.$name,
  description: Article.$description,
  definition(t) {
    t.field(Article.id)
    t.field(Article.on)
    t.field(Article.private)
    t.field(Article.title)
    t.field(Article.data)
  },
})

const _articleInput = inputObjectType({
  name: Article.$name + 'Input',
  description: Article.$description,
  definition(t) {
    t.nonNull.field(Article.title)
    t.nonNull.field(Article.data)
    t.nullable.boolean(Article.private.name)
  },
})
const _articleInputMod = inputObjectType({
  name: Article.$name + 'ModInput',
  description: Article.$description,
  definition(t) {
    t.nonNull.field(Article.id)
    t.nullable.string(Article.title.name, {
      description: Article.title.description,
    })
    t.nullable.string(Article.data.name, {
      description: Article.data.description,
    })
    t.nullable.boolean(Article.private.name, {
      description: Article.private.description,
    })
  },
})

export const article = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('articles', {
      type: _article,
      async resolve(_, __, ctx: context) {
        const tmp = await ctx.prisma.article.findMany()
        // console.log(tmp)
        return tmp
      },
    })
  },
})

export const articleAdd = extendType({
  type: 'Mutation',
  definition(t) {
    t.list.field('articlesAdd', {
      type: _article,
      args: { articles: list(_articleInput) },
      async resolve(
        _,
        __: { articles: Prisma.ArticleCreateInput[] },
        ctx: context
      ) {
        const tmp = (
          await Promise.allSettled(
            __.articles.map(article =>
              ctx.prisma.article.create({ data: article })
            )
          )
        ).map(r => (r.status === 'fulfilled' ? r.value : r.reason))
        // console.log(tmp)
        return tmp
      },
    })
  },
})

export const articleMod = extendType({
  type: 'Mutation',
  definition(t) {
    t.list.field('articlesMod', {
      type: _article,
      args: { articles: list(_articleInputMod) },
      async resolve(_, __: { articles: any[] }, ctx: context) {
        const tmp = (
          await Promise.allSettled(
            __.articles.map(article =>
              ctx.prisma.article.update({
                where: { id: article.id },
                data: article,
              })
            )
          )
        ).map(r => (r.status === 'fulfilled' ? r.value : r.reason))
        // console.log(tmp)
        return tmp
      },
    })
  },
})

export const articleDel = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('articlesDel', {
      type: 'Int',
      args: { articlesId: list(nonNull(intArg())) },
      async resolve(
        _,
        __: {
          articlesId: number[]
        },
        ctx: context
      ) {
        const tmp = await ctx.prisma.article.deleteMany({
          where: { id: { in: __.articlesId } },
        })
        return tmp.count
      },
    })
  },
})
