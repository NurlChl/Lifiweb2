import { Schema, model, models } from 'mongoose'

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
}, { timestamps: true })

export const Contact = models.Contact || model('Contact', ContactSchema)
