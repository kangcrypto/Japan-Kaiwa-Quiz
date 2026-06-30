# Japan Kaiwa Quiz 🗾

> Latihan percakapan bahasa Jepang interaktif berbasis **Minna no Nihongo (みんなの日本語) Bab 1–50**.

Aplikasi web ringan tanpa build step — buka `index.html` langsung jalan di browser.

🔗 **Live repo**: https://github.com/kangcrypto/Japan-Kaiwa-Quiz

---

## ✨ Fitur

- 📚 **50 bab** Minna no Nihongo (Bab 1 sampai 50)
- ❓ **234 soal** campuran (pilihan ganda, dialog A/B, fill-in-the-blank)
- 🎌 **Furigana toggle** — tampilkan/sembunyikan bacaan hiragana untuk kanji
- 📊 **Score tracking** per sesi kuis
- ⏯️ **Retry & shuffle** soal random tiap mulai
- 💾 **Progress otomatis** tersimpan di `localStorage` browser
- 📱 **Responsive** — jalan di HP, tablet, dan desktop
- 🚀 **Tanpa build step** — vanilla HTML/CSS/JS, gak perlu npm atau bundler

---

## 🚀 Cara Jalan (3 cara)

### Cara 1 — Langsung buka file

```bash
# Tinggal double-click index.html, atau
open index.html      # macOS
xdg-open index.html  # Linux
```

### Cara 2 — Local HTTP server (recommended)

```bash
# Clone repo
git clone https://github.com/kangcrypto/Japan-Kaiwa-Quiz.git
cd Japan-Kaiwa-Quiz

# Serve pake Python (no install extra kalau udah ada Python)
python3 -m http.server 8000

# Buka di browser
open http://localhost:8000
```

### Cara 3 — Deploy ke Vercel / Netlify

Drag-and-drop folder ini ke Vercel/Netlify dashboard, atau connect GitHub repo.
Gak perlu konfigurasi — pure static site.

---

## 🗂️ Struktur File

```
japan-kaiwa-quiz/
├── index.html      # HTML shell + UI states (chapter select / quiz / result)
├── style.css       # Design tokens, komponen, responsive
├── app.js          # Logic: state machine, score, furigana, localStorage
├── data.js         # 50 bab × ~5 soal = 234 soal (3 question types)
├── readings.js     # Kamus furigana per kanji
└── README.md       # File ini
```

---

## 📖 Tipe Soal

Quiz mendukung 3 tipe soal:

### 1. **Choice** (Pilihan Ganda)
```
「会社員」 artinya?
  ◯ Pelajar
  ● Karyawan        ← correct
  ◯ Guru
  ◯ Dokter
```

### 2. **Dialogue** (Percakapan A/B)
```
Balasan untuk 「すみません、それは何ですか。」
  A: すみません、それは何ですか。
  B: ???

  ● それは手帳です
  ◯ はい、そうです
  ◯ いいえ、違います
  ◯ わかりません
```

### 3. **Fill** (Isian dengan Hint)
```
「私は____です。」(Saya ____.)
Hint: Nama keluarga Jepang umum
Answer: たなか
```

---

## 🎯 Roadmap Belajar

Kuis ini mengikuti **urutan Minna no Nihongo**:

| Bab | Topik | Bahasa |
|-----|-------|--------|
| **1–4** | Perkenalan, demonstratif, tempat, waktu | みんなの日本語 入門 |
| **5–9** | Arah, aktivitas harian, alat, adjektiva, preferensi | Seri 1 Bab 5–9 |
| **10–14** | Keberadaan, kounter, bentuk lampau, adj lampau, perbandingan | Seri 1 Bab 10–14 |
| **15–19** | Keinginan, te-form, izin, urutan, pengalaman | Seri 1 Bab 15–19 |
| **20–24** | Potensial, ajakan, plain form, deskripsi, give/receive | Seri 1 Bab 20–24 |
| **25–29** | Kondisional, transportasi, batas, past potential, tujuan | Seri 2 Bab 25–29 |
| **30–34** | Transitif/intransitif, adverb, habitual past, modern exp, past pot | Seri 2 Bab 30–34 |
| **35–39** | Sebelum/sesudah, keharusan, prohibition, tara/ba/nara, posisi | Seri 2 Bab 35–39 |
| **40–44** | Makan/minum, kota, event, hormat 1, hormat 2 | Seri 2 Bab 40–44 |
| **45–50** | Rendah hati 1, rendah hati 2, polite requests, imperatif, colloquial, percakapan harian | Seri 2 Bab 45–50 |

---

## 🎨 Tech Stack

- **HTML5** — semantic markup, ARIA labels untuk accessibility
- **CSS3** — modern features (custom properties, grid, flexbox), responsive design
- **Vanilla JavaScript** — ES6+, gak ada framework dependency
- **localStorage** — progress persistence per-browser
- **Total size** — ~73 KB (gak ada third-party deps)

---

## 🛠️ Development

### Tambah soal baru

Edit `data.js`, tambahkan question object ke chapter array:

```js
{
  id: 1, name: "第1課", title: "Introductions",
  questions: [
    { type: "choice", text: "...", options: ["A", "B", "C", "D"], correct: 0 },
    { type: "dialogue", text: "...", dialogue: { A: "...", B: "" }, options: [...], correct: 1 },
    { type: "fill", text: "「____」...", answer: "...", hint: "..." },
    // ...
  ]
}
```

Skema lengkap ada di `app.js` — function `startChapter()` dan `showQuestion()`.

### Tambah kanji ke readings

Edit `readings.js`, tambahkan entry:

```js
"漢字": "かんじ",  // kanji → hiragana
```

Kalau kanji gak ada di `readings.js`, furigana button cuma ganti font saja (gak ada furigana), tapi quiz tetap jalan.

---

## 🤝 Kontribusi

Pull request welcome. Untuk perubahan besar (topik baru, redesign, dsb.), buka issue dulu biar diskusi dulu.

---

## 📝 Lisensi

MIT License. Bebas dipake untuk belajar, komersial, atau di-fork. Cukup kasih credit.

---

## 🙏 Credit

- **Minna no Nihongo (みんなの日本語)** — buku teks standard untuk pemula bahasa Jepang, oleh 3A Corporation
- Dibuat sebagai alat bantu belajar tambahan, bukan substitute untuk kelas resmi
- Sumber soal: dikompilasi manual berdasarkan progresi grammar Minna no Nihongo
