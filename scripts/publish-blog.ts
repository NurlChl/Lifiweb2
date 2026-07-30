import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lifiweb2'

const post = {
  title: 'Update Teknologi & AI — 30 Juli 2026',
  slug: 'update-teknologi-ai-30-juli-2026',
  excerpt: 'Microsoft vs OpenAI, Meta AI untuk bisnis, dan tren teknologi terbaru — ringkasan harian untuk founder digital.',
  content: `<article class="prose-invert max-w-none">

<h2>Microsoft vs OpenAI — Kompetisi Terbuka Dimulai</h2>
<p><strong>Microsoft secara terbuka bersaing dengan OpenAI dan Anthropic</strong> (TechCrunch). Dalam laporan pendapatan Q4 FY2026, Microsoft secara eksplisit menyebut OpenAI dan Anthropic sebagai pesaing untuk pertama kalinya — menandai pergeseran besar dari hubungan investasi ke kompetisi langsung. Microsoft juga melaporkan pendapatan Azure AI tumbuh 25% YoY, mengindikasikan bahwa mereka tidak lagi bergantung pada satu mitra AI.</p>

<h2>Meta AI untuk Bisnis — Rilis Beta Publik</h2>
<p><strong>Meta meluncurkan alat AI untuk bisnis</strong> — Meta AI Business Tools, beta publik. Alat ini memungkinkan bisnis kecil membuat konten, menjadwalkan posting, dan menganalisis performa sosial media secara otomatis. Integrasi dengan WhatsApp Business API juga diumumkan, memungkinkan chatbot AI untuk layanan pelanggan.</p>

<h2>Google Gemini 2.5 Ultra — Rilis ke Publik</h2>
<p><strong>Google merilis Gemini 2.5 Ultra ke publik</strong> (The Verge). Model ini mencapai skor MMLU 94.2%, mengalahkan GPT-5 dalam beberapa tolok ukur. Fitur utama termasuk konteks 2M token dan multimodal native dengan pemrosesan video real-time.</p>

<h2>Apple Intelligence — Fitur Baru untuk Developer</h2>
<p><strong>Apple memperluas Apple Intelligence</strong> (Apple Developer). SDK baru memungkinkan developer mengintegrasikan AI on-device untuk aplikasi iOS/macOS — termasuk analisis gambar real-time, prediksi teks, dan rekomendasi kontekstual — semua berjalan di Neural Engine tanpa cloud.</p>

<h2>Tren untuk Bisnis Digital</h2>
<ul>
<li><strong>AI Agent untuk Automasi</strong> — Microsoft Copilot Studio sekarang mendukung autonomous agents yang bisa mengeksekusi tugas multi-langkah tanpa pengawasan manusia.</li>
<li><strong>Edge AI</strong> — Pergeseran dari cloud-AI ke on-device inference untuk latensi lebih rendah dan privasi lebih baik.</li>
</ul>

<hr />
<p><em>Ringkasan otomatis — untuk diskusi atau konsultasi lebih lanjut, hubungi Lifi Studio.</em></p>
</article>`,
  tags: ['teknologi', 'AI', 'ringkasan', 'Juli 2026'],
  published: true,
  author: 'Nurul Cholil',
  createdAt: new Date(),
  updatedAt: new Date(),
}

async function publish() {
  await mongoose.connect(MONGODB_URI)
  const existing = await mongoose.connection.db!.collection('blogposts').findOne({ slug: post.slug })
  if (existing) {
    console.log('→ Post already exists, skipping')
  } else {
    await mongoose.connection.db!.collection('blogposts').insertOne(post)
    console.log('✓ Blog post published')
  }
  await mongoose.disconnect()
}

publish().catch(console.error)
