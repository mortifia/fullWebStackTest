import Fastify from 'fastify'
import mercurius from 'mercurius'

import { schema } from './makeSchema'

const app = Fastify()

app.register(mercurius, {
  schema: schema,
  graphiql: true,
})

app
  .listen(3000)
  .then(() => console.log(`🚀 Server ready at http://localhost:3000/graphiql`))
