import mongoose, { type Document, type Model } from 'mongoose'

export interface IService extends Document {
  name: string
  slug: string
  shortDescription: string
  fullDescription: string
  icon: string
  features: string[]
  price: string
  popular: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

const ServiceSchema = new mongoose.Schema<IService>(
  {
    name: { type: String, required: true, maxlength: 100 },
    slug: { type: String, required: true, unique: true, index: true },
    shortDescription: { type: String, required: true, maxlength: 300 },
    fullDescription: { type: String, required: true },
    icon: { type: String, required: true },
    features: [{ type: String }],
    price: { type: String, required: true },
    popular: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
)

ServiceSchema.index({ order: 1 })

const Service: Model<IService> = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema)

export default Service