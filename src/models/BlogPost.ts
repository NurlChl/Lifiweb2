import mongoose, { type Document, type Model } from 'mongoose'

export interface IBlogPost extends Document {
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  category: string
  tags: string[]
  readTime: string
  published: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
}

const blogPostSchema = new mongoose.Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String },
    category: { type: String, required: true },
    tags: [{ type: String }],
    readTime: { type: String },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  {
    timestamps: true,
  }
)

blogPostSchema.index({ slug: 1 }, { unique: true })
blogPostSchema.index({ published: 1, publishedAt: -1 })

export const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', blogPostSchema)