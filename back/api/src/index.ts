import { PrismaClient } from '@prisma/client'
import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import mercurius from 'mercurius'

import { schema } from './makeSchema'

export interface context {
  request: FastifyRequest
  reply: FastifyReply
  prisma: PrismaClient
}

const app = Fastify()
const prisma = new PrismaClient()

app.register(mercurius, {
  schema: schema,
  context: (request, reply): context => {
    return {
      request,
      reply,
      prisma,
    }
  },
  graphiql: true,
})

app
  .listen(3000)
  .then(() => console.log(`🚀 Server ready at http://localhost:3000/graphiql`))
