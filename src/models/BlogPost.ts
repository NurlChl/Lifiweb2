import { Schema, model, models } from 'mongoose'

const BlogPostSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  excerpt: { type: String, maxlength: 200 },
  content: { type: String, required: true },
  coverImage: String,
  tags: [String],
  published: { type: Boolean, default: false },
  author: String,
  seoTitle: String,
  seoDescription: String,
}, { timestamps: true })

export const BlogPost = models.BlogPost || model('BlogPost', BlogPostSchema)
