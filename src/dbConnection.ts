import { connect, set } from 'mongoose'

import { IS_PROD, IS_DEV } from './constants'

const options = {
  useNewUrlParser: true,
  useFindAndModify: false, // use findAndUpdate instead of modify
  useCreateIndex: true, // uses createIndex over ensureIndex
  autoIndex: !IS_PROD, // to create the indexes layed out in model files on start up
  poolSize: 10, // Maintain up to 10 socket connections
  connectTimeoutMS: 5000, // Give up initial connection after 5 seconds
  socketTimeoutMS: 33000, // Close sockets after 33 seconds of inactivity
  useUnifiedTopology: true,
  // Buffering means mongoose will queue up operations if it gets
  // disconnected from MongoDB and send them when it reconnects.
  // With serverless, better to fail fast if not connected.
  bufferCommands: false, // Disable mongoose buffering
  bufferMaxEntries: 0 // and MongoDB driver buffering
}

interface ConnectToDB {
  (): Promise<typeof import('mongoose')>
}

const connectToDB: ConnectToDB = async () => {
  try {
    const connection = await connect(process.env.MONGO_URI, options)

    if (IS_DEV) {
      set('debug', true)
      console.log(`⌨️  Dev Server Connected to Dev Database 🏬`)
    } else if (IS_PROD) {
      console.log(`💻 Production Server Connected to Prod Database 🏬`)
    }
    return connection
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

export default connectToDB
