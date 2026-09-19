import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

const briefings = [
  {
    title: 'Tech & AI Briefing — 30 Agustus 2026',
    slug: 'tech-ai-briefing-30-agustus-2026',
    excerpt: 'Ringkasan harian teknologi & AI: Appalachian Trail pixel art, alt-right troll Milo, dan berita tech terbaru.',
    content: `<article class="prose-invert max-w-none">

<h2>Vicariously hike the Appalachian in the gorgeous A Trail Tale</h2>
<p><strong>The Verge</strong> — I used to be an avid hiker and would try to go backpacking a few times a year. I always dreamed of thru-hiking the Appalachian Trail, but life kind of got in the way. <em>A Trail Tale</em> lets you experience it through gorgeous pixel art.</p>
<p>🔗 <a href="https://www.theverge.com/entertainment/986461/hike-appalachian-trail-pixel-art-a-trail-tale" target="_blank" rel="noopener">Baca selengkapnya</a></p>

<h2>Alt-right troll Milo Yiannopoulos...</h2>
<p>...</p>

<hr />
<p><em>Ringkasan otomatis — untuk diskusi atau konsultasi lebih lanjut, hubungi Lifi Studio.</em></p>
</article>`,
    tags: ['teknologi', 'AI', 'ringkasan', 'Agustus 2026'],
    published: true,
    author: 'Nurul Cholil',
    category: 'Teknologi & AI',
    readTime: '5 min',
    createdAt: new Date('2026-08-30T07:00:00+07:00'),
    updatedAt: new Date('2026-08-30T07:00:00+07:00'),
  },
  {
    title: 'Tech & AI Briefing — 31 Agustus 2026',
    slug: 'tech-ai-briefing-31-agustus-2026',
    excerpt: 'Ringkasan harian teknologi & AI: Professor Murder dance punk, dan berita tech terbaru.',
    content: `<article class="prose-invert max-w-none">

<h2>Professor Murder Rides the Subway is a forgotten slice of dance punk perfection</h2>
<p><strong>The Verge</strong> — I recently dug out my CDs and started reripping them all. I've found a few forgotten gems in there, but few hit harder for me than the beautifully concise <em>Professor Murder Rides the Subway</em> — dance punk perfection.</p>
<p>🔗 <a href="https://www.theverge.com/entertainment/986564/professor-murder-rides-the-subway-dance-punk-perfectio" target="_blank" rel="noopener">Baca selengkapnya</a></p>

<hr />
<p><em>Ringkasan otomatis — untuk diskusi atau konsultasi lebih lanjut, hubungi Lifi Studio.</em></p>
</article>`,
    tags: ['teknologi', 'AI', 'ringkasan', 'Agustus 2026'],
    published: true,
    author: 'Nurul Cholil',
    category: 'Teknologi & AI',
    readTime: '4 min',
    createdAt: new Date('2026-08-31T07:00:00+07:00'),
    updatedAt: new Date('2026-08-31T07:00:00+07:00'),
  }
]

async function publish() {
  await mongoose.connect(MONGODB_URI)
  console.log('Connected to MongoDB')

  for (const post of briefings) {
    const existing = await mongoose.connection.db!.collection('blogposts').findOne({ slug: post.slug })
    if (existing) {
      console.log(`→ "${post.title}" already exists, skipping`)
    } else {
      await mongoose.connection.db!.collection('blogposts').insertOne(post)
      console.log(`✓ Published: "${post.title}"`)
    }
  }

  await mongoose.disconnect()
  console.log('Done')
}

publish().catch(console.error)