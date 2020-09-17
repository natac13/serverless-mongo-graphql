import UserModel, { IUserInput } from '../models/user'
import { Resolvers } from '../types/resolver-types'

const resolvers: Resolvers = {
  Query: {
    getUser: async (_, args) => {
      const User = await UserModel.findById(args._id, {}, { lean: true })
      return User
    },
    allUsers: async (_, args) => {
      const users = await UserModel.find(args, {}, { lean: true })
      return users
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      const newUser = await UserModel.create<IUserInput>(args.User)
      return newUser
    },
    updateUser: async (_, args) => {
      const updatedUser = await UserModel.findByIdAndUpdate(
        args._id,
        args.Updates,
        { lean: true, projection: {} }
      )
      return updatedUser
    },
    deleteUser: async (_, args) => {
      await UserModel.findByIdAndDelete(args._id)
      return true
    }
  }
}

export default resolvers
