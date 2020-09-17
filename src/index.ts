import { ApolloServer } from 'apollo-server-lambda'
import dbConnection from './dbConnection'
import { IS_DEV } from './constants'
import resolvers from './resolvers'
import typeDefs from './schema'
import { APIGatewayProxyHandler } from 'aws-lambda'

if (IS_DEV) {
  require('dotenv').config()
}

let cachedDb = null

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
      'schema.polling.enable': false
    }
  }
})

export const handler: APIGatewayProxyHandler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    if (!cachedDb) {
      /* Connect to Database */
      dbConnection().then((db) => {
        cachedDb = db
      })
    }

    const handlerFunction = server.createHandler({
      cors: {
        origin: '*'
      }
    })

    return handlerFunction(event, context, callback)
  } catch (err) {
    console.log(err)
  }
}
