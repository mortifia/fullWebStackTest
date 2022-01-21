import { objectType } from 'nexus'

export * from './book.js'

//export * from './post'

//export * from './comment'

export const query = objectType({
  name: 'Query',
  definition(t) {
    t.boolean('_')
  },
})

export const mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.boolean('_')
  },
})

export const subcription = objectType({
  name: 'Subcription',
  definition(t) {
    t.boolean('_')
  },
})
