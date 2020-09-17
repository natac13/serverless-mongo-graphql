import mongoose, { Model } from 'mongoose'
import {
  prop as Prop,
  modelOptions,
  getModelForClass,
  DocumentType
} from '@typegoose/typegoose'

@modelOptions({ options: { customName: 'User' } })
export class UserSchema {
  @Prop({ required: true })
  public name!: string

  @Prop({ required: true, index: true })
  public email!: string

  @Prop()
  public position?: string

  @Prop()
  public employeeId?: number
}

let UserModel: Model<DocumentType<UserSchema>, {}>

try {
  UserModel = mongoose.connection.model('User')
} catch (err) {
  UserModel = getModelForClass(UserSchema)
}

export default UserModel
