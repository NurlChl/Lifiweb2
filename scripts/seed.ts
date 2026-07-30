// Seed script: run with `npx tsx scripts/seed.ts`
import mongoose from 'mongoose'
import * as bcrypt from 'bcryptjs'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lifiweb2'

async function seed() {
  await mongoose.connect(MONGODB_URI)
  const db = mongoose.connection.db!
  console.log('Connected to MongoDB')

  // Create admin user
  const users = db.collection('users')
  const existing = await users.findOne({ email: 'admin@lifistudio.id' })
  if (!existing) {
    const password = await bcrypt.hash('admin123', 12)
    await users.insertOne({
      email: 'admin@lifistudio.id',
      name: 'Admin',
      password,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    console.log('✓ Admin user created (admin@lifistudio.id / admin123)')
  } else {
    console.log('→ Admin user already exists')
  }

  // Create sample blog post
  const posts = db.collection('blogposts')
  const sample = await posts.findOne({ slug: 'welcome-to-lifi-studio' })
  if (!sample) {
    await posts.insertOne({
      title: 'Welcome to Lifi Studio',
      slug: 'welcome-to-lifi-studio',
      excerpt: 'We are thrilled to announce the launch of our new digital agency.',
      content: '<h2>Welcome</h2><p>We are Lifi Studio, a digital agency specializing in web development, UI/UX design, and automation.</p><p>Stay tuned for insights, tutorials, and updates.</p>',
      tags: ['announcement', 'studio'],
      published: true,
      author: 'Nurul Cholil',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    console.log('✓ Sample blog post created')
  } else {
    console.log('→ Sample post already exists')
  }

  await mongoose.disconnect()
  console.log('\nDone! Run `npx tsx scripts/seed.ts` to populate the database.')
}

seed().catch(console.error)
