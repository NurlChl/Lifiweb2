import mongoose, { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin'], default: 'admin' },
}, { timestamps: true })

export const User = models.User || model('User', UserSchema)
