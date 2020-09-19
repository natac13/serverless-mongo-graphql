import mongoose from 'mongoose'
import {
  prop as Prop,
  modelOptions,
  getModelForClass
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

const UserModel = getModelForClass(UserSchema, { existingMongoose: mongoose })

export default UserModel
