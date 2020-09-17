import mongoose, { Document, Schema, Model } from 'mongoose'

interface IUser extends Document {
  _id: string
  name: string
  email: string
  position?: string
  employeeId?: number
}

export interface IUserInput {
  name: IUser['name']
  email: IUser['email']
  position?: IUser['position']
  employeeId?: IUser['employeeId']
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: true
  },
  position: {
    type: String
  },
  employeeId: {
    type: Number
  }
})

let UserModel: Model<IUser, {}>

try {
  UserModel = mongoose.connection.model<IUser>('User')
} catch (err) {
  UserModel = mongoose.model<IUser>('User', UserSchema)
}

export default UserModel
