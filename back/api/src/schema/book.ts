import { Prisma, PrismaClient } from '@prisma/client'
import { extendType, inputObjectType, list, nonNull, objectType } from 'nexus'
import { Book } from 'nexus-prisma/dist-cjs/runtime/index'
import { ArgsRecord } from 'nexus/dist/core'
import { context } from '../index'

const _book = objectType({
  name: Book.$name,
  description: Book.$description,
  definition(t) {
    t.field(Book.id)
    t.field(Book.title)
    t.field(Book.body)
    t.field(Book.published)
  },
})

const _bookInput = inputObjectType({
  name: Book.$name + 'Input',
  description: Book.$description,
  definition(t) {
    //t.field(Book.id)
    t.field(Book.title)
    t.field(Book.body)
    t.field(Book.published)
  },
})

const _bookAddInput = {
  books: nonNull(list(nonNull(_bookInput))),
}

export const books = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('books', {
      type: _book,
      async resolve(_, __, ctx: context) {
        return await ctx.prisma.book.findMany()
      },
    })
  },
})

export const bookAdd = extendType({
  type: 'Mutation',
  definition(t) {
    t.list.field('booksAdd', {
      type: _book,
      args: _bookAddInput,
      async resolve(_, __: { books: [Prisma.BookCreateInput] }, ctx: context) {
        console.log(__)
        const tmp = await ctx.prisma.book.create({
          //@ts-ignore
          data: {
            title: 'coucou',
            body: 'nooooooooo',
            published: true,
          },
        })
        console.log(tmp)
      },
    })
  },
})

export const bookRemove = extendType({
  type: 'Mutation',
  definition(t) {
    t.boolean('booksDelete', {
      async resolve(_, __, ctx: context) {},
    })
  },
})
