import { GraphQLSchema } from 'graphql'
import { objectType, intArg, nonNull, makeSchema } from 'nexus'
import path from 'path'

const args = {
  x: nonNull(
    intArg({
      description: 'value of x',
    })
  ),
  y: nonNull(
    intArg({
      description: 'value of y',
    })
  ),
}
const query = objectType({
  name: 'Query',
  definition(t) {
    t.int('add', {
      resolve(_, { x, y }) {
        return x + y
      },
      args,
    })
  },
})

export const schema = makeSchema({
  types: [query],
  outputs: {
    schema: path.join(__dirname, './my-schema.graphql'),
    typegen: path.join(__dirname, './my-generated-types.d.ts'),
  },
}) as unknown as GraphQLSchema // FAUX BUG DE MES 2 !!! OUI ON PEUT NE PAS VOULOIR UN SCHEMA FULL OPTION
