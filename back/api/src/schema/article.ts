import { Prisma, PrismaClient } from '@prisma/client'
import { extendType, inputObjectType, list, nonNull, objectType } from 'nexus'
import { Article } from 'nexus-prisma/dist-cjs/runtime/index'
import { ArgsRecord, asNexusMethod } from 'nexus/dist/core'
import { context } from '../index'

import { GraphQLDateTime } from 'graphql-iso-date'

export const GQLDate = asNexusMethod(GraphQLDateTime, 'DateTime')

const _article = objectType({
  name: Article.$name,
  description: Article.$description,
  definition(t) {
    t.field(Article.id)
    t.field(Article.on)
    t.field(Article.text)
  },
})

const _articleInput = inputObjectType({
  name: Article.$name + 'Input',
  description: Article.$description,
  definition(t) {
    t.nonNull.field(Article.text)
  },
})

export const article = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('articles', {
      type: _article,
      async resolve(_, __, ctx: context) {
        return await ctx.prisma.article.findMany()
      },
    })
  },
})

export const articleAdd = extendType({
  type: 'Mutation',
  definition(t) {
    t.list.field('booksAdd', {
      type: _article,
      args: { article: _articleInput },
      async resolve(
        _,
        __: { article: Prisma.ArticleCreateInput },
        ctx: context
      ) {
        ctx.prisma.article.create({ data: __.article })
      },
    })
  },
})
