import Fastify from 'fastify'
import mercurius from 'mercurius'

import { makeSchema } from 'nexus'

import { PrismaClient } from '@prisma/client'

import { schema } from './schema'

const app = Fastify()
const prisma = new PrismaClient()

app.register(mercurius, {
  schema,
  graphiql: true,
})

app.get('/', async function (req, reply) {
  const query = '{ add(x: 2, y: 2) }'
  return reply.graphql(query)
})

app
  .listen(3000)
  .then(() => console.log(`🚀 Server ready at http://localhost:3000/graphiql`))
