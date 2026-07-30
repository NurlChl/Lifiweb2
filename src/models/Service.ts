import { Schema, model, models } from 'mongoose'

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  icon: String,
  features: [String],
  order: { type: Number, default: 0 },
  published: { type: Boolean, default: false },
}, { timestamps: true })

export const Service = models.Service || model('Service', ServiceSchema)
