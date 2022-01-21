import { PrismaClient } from '@prisma/client'
import { extendType, objectType } from 'nexus'
import { Book } from 'nexus-prisma/dist-cjs/runtime/index'
import { context } from '../index'

const book = objectType({
  name: Book.$name,
  definition(t) {
    t.field(Book.id)
    t.field(Book.title)
    t.field(Book.body)
    t.field(Book.published)
  },
})

export const bookQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('books', {
      type: book,
      resolve(_, __, ctx: context) {
        return ctx.prisma.book.findMany({})
      },
    })
  },
})
