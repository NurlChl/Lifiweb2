import mongoose, { type Document, type Model } from 'mongoose'

export interface ISubscriber extends Document {
  email: string
  name?: string
  source: string
  status: 'active' | 'unsubscribed' | 'bounced'
  createdAt: Date
  updatedAt: Date
}

const subscriberSchema = new mongoose.Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      default: 'website',
    },
    status: {
      type: String,
      enum: ['active', 'unsubscribed', 'bounced'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
)

subscriberSchema.index({ email: 1 }, { unique: true })

export const Subscriber: Model<ISubscriber> =
  mongoose.models.Subscriber || mongoose.model<ISubscriber>('Subscriber', subscriberSchema)