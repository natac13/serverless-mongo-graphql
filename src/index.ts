import { ApolloServer } from 'apollo-server-lambda'
import { IS_DEV } from './constants'
import resolvers from './resolvers'
import typeDefs from './schema'
import { APIGatewayProxyHandler } from 'aws-lambda'
import connectToDB from './dbConnection'

if (IS_DEV) {
  require('dotenv').config()
}

const apolloContext = async ({ event, context }) => {
  return {
    event,
    context
  }
}

/* Apollo Graphql Setup */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: apolloContext,
  playground: {
    settings: {
      // 'request.credentials': 'include',
      'editor.fontSize': 16,
      // @ts-ignore
      'schema.polling.enable': false,
      'schema.polling.interval': 60000
    }
  }
})

export const handler: APIGatewayProxyHandler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  connectToDB().then(() => {
    server.createHandler({
      cors: {
        origin: '*'
      }
    })(event, context, callback)
  })
}
