import { ApolloServer } from 'apollo-server-lambda'
import { IS_DEV } from './constants'
import { APIGatewayProxyHandler } from 'aws-lambda'
import connectToDB from './dbConnection'
import graphqlSchema from './resolvers'

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
  schema: graphqlSchema,
  context: apolloContext,
  introspection: true,
  playground: IS_DEV
    ? {
        settings: {
          // 'request.credentials': 'include',
          'editor.fontSize': 16,
          // @ts-ignore
          'schema.polling.enable': false,
          'schema.polling.interval': 60000
        }
      }
    : false
})

export const handler: APIGatewayProxyHandler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  console.log(event, context)
  connectToDB().then(() => {
    server.createHandler({
      cors: {
        origin: '*'
      }
    })(event, context, callback)
  })
}
