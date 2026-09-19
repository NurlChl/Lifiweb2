import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lifiweb2'

const post = {
  title: 'Update Teknologi & AI — 19 September 2026',
  slug: 'update-teknologi-ai-19-september-2026',
  excerpt: 'Tilly Norwood malfunction, startup Vantora raih $100M, Anthropic lab biologi, halusinasi AI militer, dan Accenture evaluator — ringkasan harian untuk founder digital.',
  content: `<article class="prose-invert max-w-none">

<h2>Tilly Norwood Malfunction Saat Press Tour</h2>
<p><strong>Tilly Norwood, AI populer, mengalami gangguan saat wawancara dan tiba-tiba berbicara bahasa China</strong> (TechCrunch). Insiden ini menimbulkan pertanyaan serius tentang keandalan dan kontrol model AI yang dideploy ke publik. Para ahli menyebut ini sebagai contoh nyata risiko "alignment" yang masih belum terpecahkan.</p>

<h2>Vantora (UP.Labs) Raih $100M untuk Physical AI</h2>
<p><strong>Startup yang membangun startup lain, Vantora, mengumpulkan $100 juta</strong> (TechCrunch). Fokus mereka: physical AI — menggabungkan kecerdasan buatan dengan robotika dan manufaktur untuk korporasi industri. Model venture studio mereka membangun perusahaan dari nol untuk klien enterprise.</p>

<h2>Anthropic Operasikan Lab Biologi Sendiri</h2>
<p><strong>Anthropic menjalankan laboratorium eksperimen biologi in-house</strong> (TechCrunch). Satu sisi menjanjikan AI untuk menyembuhkan penyakit, sisi lain memperingatkan risiko eksistensial. Lab ini menandakan pergeseran AI companies dari "hanya model" ke "riset aplikatif nyata".</p>

<h2>Halusinasi AI Hampir Memicu Operasi Militer AS</h2>
<p><strong>Kejadian dekat (near-miss) akibat output AI yang salah</strong> (TechCrunch). Seorang peneliti GovAI memperingatkan: "Penting bagi personel militer memahami ketidakpastian inheren pada LLM." Ini dorongan keras untuk validasi ketat sebelum AI dipakai di sistem kritis.</p>

<h2>Accenture Jadi Evaluator Tertanam Pertama Anthropic</h2>
<p><strong>Accenture ditunjuk sebagai "embedded evaluator" pertama Anthropic</strong> (TechCrunch). Konsultan global ini akan menilai keamanan dan performa model — engagement berisiko tinggi yang memadukan audit teknis dengan konsultasi enterprise.</p>

<h2>Implikasi untuk Bisnis Digital</h2>
<ul>
<li><strong>Keandalan AI</strong> — Insiden Norwood menunjukkan testing red-team & monitoring wajib sebelum deploy ke production.</li>
<li><strong>Physical AI</strong> — Peluang besar di manufaktur, logistik, dan industri berat; siapkan tim yang paham robotika + ML.</li>
<li><strong>Governance</strong> — Evaluator eksternal (seperti Accenture) jadi standar baru; audit trail & compliance harus siap dari awal.</li>
<li><strong>Risk Mitigation</strong> — Sistem kritis (militer, kesehatan, keuangan) butuh guardrails: human-in-the-loop, confidence thresholds, fallback manual.</li>
</ul>

<hr />
<p><em>Ringkasan otomatis — untuk diskusi atau konsultasi lebih lanjut, hubungi Lifi Studio.</em></p>
</article>`,
  tags: ['teknologi', 'AI', 'ringkasan', 'September 2026'],
  category: 'Teknologi',
  readTime: '5 min',
  published: true,
  author: 'Nurul Cholil',
  publishedAt: new Date(),
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