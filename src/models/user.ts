import { Document, Schema, model, connection, Model } from 'mongoose'

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
  UserModel = connection.model<IUser>('User')
} catch (err) {
  UserModel = model<IUser>('User', UserSchema)
}

export default UserModel
