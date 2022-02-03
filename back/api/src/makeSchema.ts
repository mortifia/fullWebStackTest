import { GraphQLSchema } from 'graphql'
import { makeSchema } from 'nexus'

import * as allTypes from './schema'

export const schema = makeSchema({
  types: allTypes,
})

//console.dir(schema, { depth: null })
