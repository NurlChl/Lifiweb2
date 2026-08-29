import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'
import { POSTS } from '@/lib/posts'

async function seed() {
  await dbConnect()
  console.log('Connected to MongoDB')

  for (const post of POSTS) {
    const existing = await BlogPost.findOne({ slug: post.slug })
    if (existing) {
      console.log(`Skipping ${post.slug} — already exists`)
      continue
    }

    await BlogPost.create({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: JSON.stringify(post.content),
      category: post.category,
      tags: post.tags,
      readTime: post.readTime,
      published: true,
      publishedAt: new Date(post.date),
    })
    console.log(`Created: ${post.title}`)
  }

  console.log('Seed complete')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})