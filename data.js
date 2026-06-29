const quizData = {
  chapters: [
    {
      id: 1, name: "第1課", title: "Introductions",
      questions: [
        { type: "choice", text: "「はじめまして」 berarti apa?", options: ["Salam kenal", "Selamat tinggal", "Terima kasih", "Permisi"], correct: 0 },
        { type: "choice", text: "「どうぞよろしく」 ungkapan apa?", options: ["Permisi masuk", "Salam perkenalan", "Selamat pagi", "Sampai jumpa"], correct: 1 },
        { type: "dialogue", text: "Balasan tepat untuk 「はじめまして、田中です。」", dialogue: { A: "はじめまして、田中です。", B: "" }, options: ["こんにちは", "はじめまして、よろしくお願いします", "さようなら", "ありがとう"], correct: 1 },
        { type: "fill", text: "「私は____です。」(Saya ____.)", answer: "たなか", hint: "Nama keluarga Jepang umum" },
        { type: "fill", text: "「私は____人です。」(Saya orang ____.)", answer: "インドネシア", hint: "Negara di Asia Tenggara" },
        { type: "choice", text: "「会社員」 artinya?", options: ["Pelajar", "Karyawan", "Guru", "Dokter"], correct: 1 },
        { type: "choice", text: "「~ですか」 artinya apa?", options: ["Ya, betul", "Tidak", "Pertanyaan yes/no", "Perintah"], correct: 2 },
        { type: "choice", text: "「学生ですか。」Kalimat ini menanyakan apa?", options: ["Apakah dia guru", "Apakah dia pelajar", "Di mana pelajar", "Nama pelajar"], correct: 1 }
      ]
    },
    {
      id: 2, name: "第2課", title: "Demonstratives",
      questions: [
        { type: "choice", text: "「これは本です。」Apa kata 「本」?", options: ["Pena", "Buku", "Tas", "Meja"], correct: 1 },
        { type: "dialogue", text: "Balasan untuk 「すみません、それは何ですか。」", dialogue: { A: "すみません、それは何ですか。", B: "" }, options: ["はい、そうです", "それは手帳です", "いいえ、違います", "わかりません"], correct: 1 },
        { type: "fill", text: "「それは____ですか。」(Apa itu?)", answer: "なに", hint: "Kata tanya untuk 'apa'" },
        { type: "choice", text: "「日本語の本」 artinya buku tentang/bahasa apa?", options: ["Bahasa Inggris", "Bahasa Jepang", "Negara Jepang", "Orang Jepang"], correct: 1 },
        { type: "choice", text: "「私の本」 artinya buku milik siapa?", options: ["Kamu", "Saya", "Dia", "Mereka"], correct: 1 },
        { type: "fill", text: "「これは____ですか。」(Ini komputer?)", answer: "パソコン", hint: "Personal computer" },
        { type: "choice", text: "「それ」 menunjuk ke benda yang...", options: ["Di dekat lawan bicara", "Di dekat pembicara", "Jauh dari keduanya", "Di atas meja"], correct: 0 }
      ]
    },
    {
      id: 3, name: "第3課", title: "Places & Objects",
      questions: [
        { type: "choice", text: "「ここ」 menunjuk ke tempat yang...", options: ["Di sini", "Di situ", "Di sana", "Jauh"], correct: 0 },
        { type: "choice", text: "「あそこ」 menunjuk ke tempat yang...", options: ["Di sini", "Di situ", "Di sana (jauh)", "Dekat"], correct: 2 },
        { type: "dialogue", text: "Balasan untuk 「日本の物はどこですか。」", dialogue: { A: "日本の物はどこですか。", B: "" }, options: ["ここです", "あそこです", "ここではありません", "わかりません"], correct: 1 },
        { type: "fill", text: "「トイレは____です。」(Toilet di mana?)", answer: "あそこ", hint: "'Di sana'" },
        { type: "choice", text: "Mata uang Jepang adalah?", options: ["Yuan", "Yen", "Won", "Ringgit"], correct: 1 },
        { type: "fill", text: "「一万円」 berapa yen?", answer: "10000", hint: "Hitung nolnya" },
        { type: "choice", text: "「留学生」 artinya?", options: ["Mahasiswa pertukaran", "Mahasiswa lokal", "Guru", "Karyawan"], correct: 0 }
      ]
    },
    {
      id: 4, name: "第4課", title: "Time",
      questions: [
        { type: "choice", text: "「いま」 artinya?", options: ["Kemarin", "Sekarang", "Besok", "Lusa"], correct: 1 },
        { type: "choice", text: "「なんじ」 cara bertanya?", options: ["Berapa harga", "Jam berapa", "Hari apa", "Kapan"], correct: 1 },
        { type: "fill", text: "「いま____じ____ふんです。」", answer: "じ", hint: "Pembacaan jam" },
        { type: "choice", text: "「月曜日」hari apa?", options: ["Selasa", "Senin", "Rabu", "Minggu"], correct: 1 },
        { type: "choice", text: "「午前」 artinya?", options: ["Pagi/AM", "Siang", "Sore", "Malam"], correct: 0 },
        { type: "dialogue", text: "Balasan untuk 「いまなんじですか。」", dialogue: { A: "いまなんじですか。", B: "" }, options: ["ごぜんくじです", "やすみです", "わかりません", "しごとです"], correct: 0 },
        { type: "choice", text: "「~時~分」 format penulisan waktu?", options: ["Jam-menit", "Menit-jam", "Hari-bulan", "Bulan-hari"], correct: 0 }
      ]
    },
    {
      id: 5, name: "第5課", title: "Going Somewhere",
      questions: [
        { type: "choice", text: "「学校へ行きます。」 「へ」 menunjukkan?", options: ["Lokasi aksi", "Arah/tujuan", "Waktu", "Cara"], correct: 1 },
        { type: "choice", text: "「バスで行きます。」 「で」 menunjukkan?", options: ["Arah", "Alat transportasi", "Waktu", "Sebab"], correct: 1 },
        { type: "dialogue", text: "Balasan untuk 「どこへ行きますか。」", dialogue: { A: "どこへ行きますか。", B: "" }, options: ["学校です", "図書館へ行きます", "一人で", "バスで"], correct: 1 },
        { type: "fill", text: "「駅____電車に乗ります。」", answer: "で", hint: "Partikel lokasi aksi" },
        { type: "choice", text: "「散歩します」 artinya?", options: ["Belanja", "Jalan-jalan", "Belajar", "Kerja"], correct: 1 },
        { type: "choice", text: "「三人で行きます」 artinya?", options: ["Ke tiga tempat", "Bertiga", "Tiga kali", "Jam tiga"], correct: 1 }
      ]
    },
    {
      id: 6, name: "第6課", title: "Daily Actions",
      questions: [
        { type: "choice", text: "「朝ごはん」 artinya?", options: ["Makan malam", "Makan siang", "Sarapan", "Camilan"], correct: 2 },
        { type: "choice", text: "「新聞を読みます」 artinya?", options: ["Menulis", "Membaca", "Menonton", "Mendengar"], correct: 1 },
        { type: "dialogue", text: "Balasan untuk 「いま何をしていますか。」", dialogue: { A: "いま何をしていますか。", B: "" }, options: ["本を読みます", "本を読んでいます", "テレビを見ます", "学校です"], correct: 1 },
        { type: "fill", text: "「日本語を____します。」", answer: "べんきょう", hint: "Belajar bahasa Jepang" },
        { type: "choice", text: "「起きます」 artinya?", options: ["Tidur", "Bangun", "Makan", "Kerja"], correct: 1 },
        { type: "choice", text: "「送ります」 artinya?", options: ["Menerima", "Mengirim", "Membaca", "Menulis"], correct: 1 }
      ]
    },
    {
      id: 7, name: "第7課", title: "Tools & Language",
      questions: [
        { type: "choice", text: "「ペンで書きます」 「で」 menunjukkan?", options: ["Tempat", "Alat", "Waktu", "Arah"], correct: 1 },
        { type: "choice", text: "「日本語で話します」 artinya?", options: ["Bicara tentang Jepang", "Bicara dalam bahasa Jepang", "Belajar Jepang", "Mengajar Jepang"], correct: 1 },
        { type: "dialogue", text: "Balasan untuk 「これ、いくらですか。」", dialogue: { A: "これ、いくらですか。", B: "" }, options: ["千円です", "どういたしまして", "おやすみなさい", "わかりません"], correct: 0 },
        { type: "fill", text: "「お母さんに花を____ます。」", answer: "あげ", hint: "Memberi ke orang lain" },
        { type: "choice", text: "「もらいます」 artinya?", options: ["Memberi", "Menerima", "Membeli", "Menjual"], correct: 1 }
      ]
    },
    {
      id: 8, name: "第8課", title: "Adjectives 1",
      questions: [
        { type: "choice", text: "「静か」 termasuk jenis adjektiva apa?", options: ["i-adjective", "na-adjective", "Kata benda", "Kata kerja"], correct: 1 },
        { type: "choice", text: "「高い」 artinya?", options: ["Tinggi/Mahal", "Murah", "Panas", "Tinggi (orang)"], correct: 0 },
        { type: "dialogue", text: "Balasan untuk 「この部屋は広いですか。」", dialogue: { A: "この部屋は広いですか。", B: "" }, options: ["はい、広いです", "いいえ、広くないです", "わかりません", "高いです"], correct: 1 },
        { type: "fill", text: "「この料理は____です。」(Enak)", answer: "おいしい", hint: "i-adjective: enak" },
        { type: "choice", text: "「便利な」jenis?", options: ["i-adjective", "na-adjective", "Kata benda", "Kata kerja"], correct: 1 }
      ]
    },
    {
      id: 9, name: "第9課", title: "Preferences & Reasons",
      questions: [
        { type: "choice", text: "「コーヒーが好きです」 artinya?", options: ["Saya benci kopi", "Saya suka kopi", "Saya minum kopi", "Saya membuat kopi"], correct: 1 },
        { type: "choice", text: "「嫌い」 artinya?", options: ["Suka", "Benci", "Minum", "Membuat"], correct: 1 },
        { type: "dialogue", text: "Balasan: 「日本語が上手ですね。」", dialogue: { A: "日本語が上手ですね。", B: "" }, options: ["いいえ、下手です", "ありがとうございます", "すみません", "さようなら"], correct: 1 },
        { type: "fill", text: "「野球が____です。」(Suka baseball)", answer: "すき", hint: "Suka" },
        { type: "choice", text: "「分かります」 artinya?", options: ["Tidak tahu", "Mengerti", "Belajar", "Lupa"], correct: 1 }
      ]
    },
    {
      id: 10, name: "第10課", title: "Existence",
      questions: [
        { type: "choice", text: "「部屋に猫がいます」 Di mana kucing?", options: ["Di meja", "Di kamar", "Di luar", "Di sekolah"], correct: 1 },
        { type: "choice", text: "「います」 untuk makhluk apa?", options: ["Benda mati", "Makhluk hidup", "Tanaman saja", "Hewan saja"], correct: 1 },
        { type: "fill", text: "「机の上に本が____ます。」", answer: "あり", hint: "Ada (benda)" },
        { type: "choice", text: "「下に何がありますか。」bertanya tentang?", options: ["Di atas", "Di bawah", "Di sebelah kanan", "Di dalam"], correct: 1 },
        { type: "dialogue", text: "Balasan untuk 「窓のそばにポスターがありますか。」", dialogue: { A: "窓のそばにポスターがありますか。", B: "" }, options: ["はい、あります", "いいえ、あります", "すみません", "いいえ、います"], correct: 0 }
      ]
    },
    {
      id: 11, name: "第11課", title: "Counters",
      questions: [
        { type: "choice", text: "「三人」 berapa orang?", options: ["2", "3", "4", "5"], correct: 1 },
        { type: "choice", text: "「二枚」 kounter untuk?", options: ["Benda pipih (kertas)", "Benda panjang", "Hewan kecil", "Uang"], correct: 0 },
        { type: "fill", text: "「猫が____匹います。」(2 kucing)", answer: "にひき", hint: "Kounter hewan kecil" },
        { type: "choice", text: "「五台」 kounter untuk?", options: ["Mesin/mobil", "Buku", "Orang", "Hewan"], correct: 0 }
      ]
    },
    {
      id: 12, name: "第12課", title: "Past Tense",
      questions: [
        { type: "choice", text: "「昨日、見ました。」 tense?", options: ["Sekarang", "Akan datang", "Lampau", "Sedang berlangsung"], correct: 2 },
        { type: "choice", text: "「行きました」 kata kerja bentuk?", options: ["Present", "Past (~ました)", "Future", "Negative"], correct: 1 },
        { type: "dialogue", text: "Balasan untuk 「昨日、何をしましたか。」", dialogue: { A: "昨日、何をしましたか。", B: "" }, options: ["京都へ行きました", "京都へ行きます", "京都です", "京都でした"], correct: 0 },
        { type: "fill", text: "「食べ____」 bentuk lampau 'makan'", answer: "ました", hint: "~ました past polite" },
        { type: "choice", text: "「先週」 artinya?", options: ["Minggu ini", "Minggu lalu", "Minggu depan", "Setiap minggu"], correct: 1 }
      ]
    },
    {
      id: 13, name: "第13課", title: "Adjectives Past",
      questions: [
        { type: "choice", text: "「暑かったです。」 kemarin...", options: ["Dingin", "Panas", "Hujan", "Berangin"], correct: 1 },
        { type: "choice", text: "「寒かったです。」 kemarin...", options: ["Panas", "Dingin", "Sejuk", "Hangat"], correct: 1 },
        { type: "dialogue", text: "Balasan untuk 「パーティーはどうでしたか。」", dialogue: { A: "パーティーはどうでしたか。", B: "" }, options: ["楽しいです", "とても楽しかったです", "たのしくないです", "おいしいです"], correct: 1 },
        { type: "fill", text: "「おもしろ____です。」(Menarik lampau)", answer: "かった", hint: "i-adj lampau: ~かった" },
        { type: "choice", text: "「便利でした」 「でした」 bentuk?", options: ["Present polite", "Past polite", "Future", "Negative"], correct: 1 }
      ]
    },
    {
      id: 14, name: "第14課", title: "Comparisons",
      questions: [
        { type: "choice", text: "「AはBより高いです」 siapa yang lebih tinggi?", options: ["B", "A", "Sama", "Tidak jelas"], correct: 1 },
        { type: "choice", text: "「~より」 artinya?", options: ["Lebih dari", "Sama dengan", "Kurang dari", "Bukan"], correct: 0 },
        { type: "dialogue", text: "「コーヒーと紅茶とどちらが好きですか。」", dialogue: { A: "コーヒーと紅茶とどちらが好きですか。", B: "" }, options: ["コーヒーのほうが好きです", "紅茶", "どちらでも", "好きです"], correct: 0 },
        { type: "fill", text: "「日本はインドネシア____小さいです。」", answer: "より", hint: "Partikel perbandingan" },
        { type: "choice", text: "「~のほうが」 digunakan untuk?", options: ["Membandingkan dua hal", "Menyatakan setara", "Hanya satu hal", "Memilih"], correct: 0 }
      ]
    },
    {
      id: 15, name: "第15課", title: "Wants",
      questions: [
        { type: "choice", text: "「欲しいです」 menunjukkan?", options: ["Benci", "Ingin", "Suka", "Punya"], correct: 1 },
        { type: "choice", text: "「~たいです」 artinya?", options: ["Benci", "Suka", "Ingin melakukan", "Sudah melakukan"], correct: 2 },
        { type: "dialogue", text: "「何を食べたいですか。」", dialogue: { A: "何を食べたいですか。", B: "" }, options: ["寿司を食べたいです", "寿司を食べます", "寿司です", "寿司でした"], correct: 0 },
        { type: "fill", text: "「東京へ____きたいです。」", answer: "いき", hint: "Ingin pergi" },
        { type: "choice", text: "「会いたいです」 artinya?", options: ["Ingin bertemu", "Sudah bertemu", "Sedang bertemu", "Akan bertemu"], correct: 0 }
      ]
    },
    {
      id: 16, name: "第16課", title: "Requests",
      questions: [
        { type: "choice", text: "「待ってください。」 artinya?", options: ["Tunggu sebentar", "Datang sini", "Duduk", "Jalan"], correct: 0 },
        { type: "choice", text: "「教えてください。」 artinya?", options: ["Lupa", "Ajari saya", "Beri", "Ambil"], correct: 1 },
        { type: "dialogue", text: "「見せてください。」", dialogue: { A: "見せてください。", B: "" }, options: ["どうぞ", "わかりません", "すみません", "いいえ"], correct: 0 },
        { type: "fill", text: "「名前を____ください。」", answer: "かいて", hint: "Tulis nama" },
        { type: "choice", text: "「使ってください。」 artinya?", options: ["Buang", "Pakai", "Cuci", "Bersihkan"], correct: 1 }
      ]
    },
    {
      id: 17, name: "第17課", title: "Permission",
      questions: [
        { type: "choice", text: "「~てもいいですか。」 menanyakan?", options: ["Lokasi", "Izin", "Makanan", "Waktu"], correct: 1 },
        { type: "choice", text: "「~てはいけません」 artinya?", options: ["Boleh", "Harus", "Dilarang", "Bisa"], correct: 2 },
        { type: "dialogue", text: "「ここで食べてもいいですか。」", dialogue: { A: "ここで食べてもいいですか。", B: "" }, options: ["はい、いいです", "はい、違います", "だめです", "すみません"], correct: 0 },
        { type: "fill", text: "「ここでタバコを____はいけません。」", answer: "すって", hint: "Dilarang te-form" },
        { type: "choice", text: "「入ってはいけません」 artinya?", options: ["Silakan masuk", "Jangan masuk", "Sedang masuk", "Akan masuk"], correct: 1 }
      ]
    },
    {
      id: 18, name: "第18課", title: "Sequence",
      questions: [
        { type: "choice", text: "「~て、~ます。」 menunjukkan?", options: ["Lalu/kemudian", "Sebelum", "Sekarang", "Bersamaan"], correct: 0 },
        { type: "choice", text: "「起きて、顔を洗います。」 siapa duluan?", options: ["Cuci muka", "Bangun", "Makan", "Tidur"], correct: 1 },
        { type: "fill", text: "「晩ごはんを食べて、____ます。」", answer: "ね", hint: "Setelah makan = tidur" },
        { type: "choice", text: "「銀行でお金を下ろします。」apa dulu?", options: ["Tarik uang", "Pergi ke bank", "Setor uang", "Hitung uang"], correct: 1 }
      ]
    },
    {
      id: 19, name: "第19課", title: "Experiences",
      questions: [
        { type: "choice", text: "「富士山に登ったことがあります。」 artinya?", options: ["Tidak pernah", "Pernah", "Akan", "Sedang"], correct: 1 },
        { type: "choice", text: "「~たことがあります。」 pola?", options: ["Future", "Pengalaman", "Sekarang", "Hipotesis"], correct: 1 },
        { type: "dialogue", text: "「すしを食べたことがありますか。」", dialogue: { A: "すしを食べたことがありますか。", B: "" }, options: ["はい、あります", "いいえ、食べたことがありません", "たべます", "すきです"], correct: 1 },
        { type: "fill", text: "「ケーキを____ことがあります。」", answer: "たべた", hint: "Pernah makan" },
        { type: "choice", text: "「一度」 artinya?", options: ["Selalu", "Satu kali", "Tidak pernah", "Dua kali"], correct: 1 }
      ]
    },
    {
      id: 20, name: "第20課", title: "Potential Form",
      questions: [
        { type: "choice", text: "「日本語ができます。」 artinya?", options: ["Suka Jepang", "Bisa Jepang", "Studi Jepang", "Ajar Jepang"], correct: 1 },
        { type: "choice", text: "「泳げます。」 artinya?", options: ["Berenang", "Bisa berenang", "Akan berenang", "Suka"], correct: 1 },
        { type: "dialogue", text: "「車を運転できますか。」", dialogue: { A: "車を運転できますか。", B: "" }, options: ["はい、運転できます", "いいえ、できます", "わかりません", "運転します"], correct: 0 },
        { type: "fill", text: "「一人で映画を____られます。」", answer: "み", hint: "Bisa melihat" },
        { type: "choice", text: "「箸が使えます。」 artinya?", options: ["Beli sumpit", "Bisa pakai sumpit", "Pakailah", "Sumpit berguna"], correct: 1 }
      ]
    },
    {
      id: 21, name: "第21課", title: "Invitations",
      questions: [
        { type: "choice", text: "「一緒に行きませんか。」 artinya?", options: ["Ayo pergi bareng", "Maukah pergi bareng saya", "Sudah pergi", "Saya pergi"], correct: 1 },
        { type: "choice", text: "「~ましょう。」 artinya?", options: ["Tidak boleh", "Ayo...", "Tidak mau", "Sudah"], correct: 1 },
        { type: "dialogue", text: "「昼ごはんを食べませんか。」", dialogue: { A: "昼ごはんを食べませんか。", B: "" }, options: ["食べます", "食べません", "食べましょう", "食べたいです"], correct: 2 },
        { type: "fill", text: "「映画を____ましょう。」", answer: "み", hint: "Ayo menonton" },
        { type: "choice", text: "「帰りませんか。」 artinya?", options: ["Tinggal", "Ayo pulang", "Makan", "Kerja"], correct: 1 }
      ]
    },
    {
      id: 22, name: "第22課", title: "Plain Form",
      questions: [
        { type: "choice", text: "「です」→「だ」 adalah bentuk?", options: ["Sopan", "Biasa/kasual", "Lampau", "Negatif"], correct: 1 },
        { type: "choice", text: "「~んだ」 menunjukkan?", options: ["Pertanyaan", "Penjelasan/ penekanan", "Lampau", "Akan datang"], correct: 1 },
        { type: "dialogue", text: "Balasan: 「彼女は医者です。」", dialogue: { A: "彼女は医者です。", B: "" }, options: ["医者だ", "医者なんだ", "医者です", "医者でした"], correct: 1 },
        { type: "fill", text: "「彼は先生____。」(Bukan guru)", answer: "じゃない", hint: "Negatif kasual" }
      ]
    },
    {
      id: 23, name: "第23課", title: "Describing People",
      questions: [
        { type: "choice", text: "「背が高い」 artinya?", options: ["Tinggi", "Cantik", "Pintar", "Baik"], correct: 0 },
        { type: "choice", text: "「目が大きい」 artinya?", options: ["Mata kecil", "Mata besar", "Mata sipit", "Mata lemah"], correct: 1 },
        { type: "fill", text: "「髪が____」 (rambut keriting)", answer: "くるくる", hint: "Curly" },
        { type: "choice", text: "「医者」 pekerjaan?", options: ["Pemadam", "Polisi", "Dokter", "Koki"], correct: 2 }
      ]
    },
    {
      id: 24, name: "第24課", title: "Give & Receive",
      questions: [
        { type: "choice", text: "「~は~に~をあげます」 siapa memberi?", options: ["Subjek (topik)", "Objek", "Tujuan", "Penerima"], correct: 0 },
        { type: "choice", text: "「~をくれます」 artinya?", options: ["Saya memberi", "Dia memberi ke saya", "Mereka memberi", "Saling memberi"], correct: 1 },
        { type: "dialogue", text: "「だれがこれをくれましたか。」", dialogue: { A: "だれがこれをくれましたか。", B: "" }, options: ["先輩がくれました", "私", "あげました", "もらいません"], correct: 0 },
        { type: "fill", text: "「友だちにプレゼントを____ました。」", answer: "もら", hint: "Menerima" }
      ]
    },
    {
      id: 25, name: "第25課", title: "Conditional",
      questions: [
        { type: "choice", text: "「~たら」 artinya?", options: ["Jika/pasca", "Perintah", "Lampau saja", "Keinginan"], correct: 0 },
        { type: "choice", text: "「安かったら、買います。」 artinya?", options: ["Saya sudah beli", "Kalau murah, akan beli", "Mahal", "Beli sekarang"], correct: 1 },
        { type: "dialogue", text: "「明日、暇でしたら、一緒に映画を見ませんか。」", dialogue: { A: "明日、暇でしたら、一緒に映画を見ませんか。", B: "" }, options: ["はい、ぜひ", "いいえ、見ません", "映画", "すみません"], correct: 0 },
        { type: "fill", text: "「お金が____ら、旅行に行きます。」", answer: "あった", hint: "Kalau ada" },
        { type: "choice", text: "「もし~たら」 artinya?", options: ["Pasti", "Mungkin/jika", "Perintah", "Penjelasan"], correct: 1 }
      ]
    },
    {
      id: 26, name: "第26課", title: "Transportation",
      questions: [
        { type: "choice", text: "「~で行きます」 apa artinya?", options: ["Pergi ke", "Pergi dengan/supaya", "Arah", "Waktu"], correct: 1 },
        { type: "choice", text: "「新幹線」 adalah?", options: ["Bus", "Subway", "Kereta peluru", "Feri"], correct: 2 },
        { type: "dialogue", text: "「どうやって行きますか。」", dialogue: { A: "どうやって行きますか。", B: "" }, options: ["バスで行きます", "行きます", "一人で", "どこ"], correct: 0 },
        { type: "fill", text: "「____で行きます。」(Pesawat)", answer: "ひこうき", hint: "Airplane" },
        { type: "choice", text: "「歩いて」 artinya?", options: ["Dengan taksi", "Dengan mobil", "Dengan jalan kaki", "Dengan kereta"], correct: 2 }
      ]
    },
    {
      id: 27, name: "第27課", title: "Limits",
      questions: [
        { type: "choice", text: "「一人でできます。」 artinya?", options: ["Dengan teman", "Bisa sendiri", "Bersama", "Tidak bisa"], correct: 1 },
        { type: "choice", text: "「自分で作ります。」 artinya?", options: ["Buat untuk orang", "Buat sendiri", "Buat bersama", "Tidak buat"], correct: 1 },
        { type: "fill", text: "「日本語が____せます。」", answer: "はな", hint: "Bisa berbicara" },
        { type: "choice", text: "「着物を着ます」 artinya?", options: ["Kimono", "Kemeja", "Celana", "Mantel"], correct: 0 }
      ]
    },
    {
      id: 28, name: "第28課", title: "Past Potential",
      questions: [
        { type: "choice", text: "「泳げませんでした」 artinya?", options: ["Bisa", "Tidak bisa", "Akan", "Sudah"], correct: 1 },
        { type: "choice", text: "「一人で登れました」 artinya?", options: ["Bisa", "Tidak bisa", "Akan", "Sekarang"], correct: 0 },
        { type: "dialogue", text: "「昨日、日本語が話せましたか。」", dialogue: { A: "昨日、日本語が話せましたか。", B: "" }, options: ["はい、話せました", "話せません", "話します", "話しません"], correct: 0 },
        { type: "fill", text: "「去年、漢字が____ました。」", answer: "よめ", hint: "Bisa baca kanji" }
      ]
    },
    {
      id: 29, name: "第29課", title: "Purpose",
      questions: [
        { type: "choice", text: "「~に行く」 artinya?", options: ["Pergi untuk...", "Pergi dari...", "Datang ke...", "Lewat"], correct: 0 },
        { type: "choice", text: "「食事に行きます」 artinya?", options: ["Pergi belanja", "Pergi kerja", "Pergi makan", "Pergi tidur"], correct: 2 },
        { type: "fill", text: "「映画を____に行きます。」", answer: "み", hint: "Pergi melihat" },
        { type: "choice", text: "「散歩に行きます」 artinya?", options: ["Kerja", "Jalan-jalan", "Studi", "Makan"], correct: 1 }
      ]
    },
    {
      id: 30, name: "第30課", title: "Transitive Verbs",
      questions: [
        { type: "choice", text: "「ドアが開きます」 kata kerja?", options: ["Transitif", "Intransitif", "Kausatif", "Pasif"], correct: 1 },
        { type: "choice", text: "「ドアを開けます」 kata kerja?", options: ["Intransitif", "Transitif", "Pasif", "Potensial"], correct: 1 },
        { type: "dialogue", text: "「窓が開いていますね。」", dialogue: { A: "窓が開いていますね。", B: "" }, options: ["閉めてください", "開けました", "開けてあります", "大丈夫です"], correct: 0 },
        { type: "fill", text: "「電気を____ます。」(Nyalakan)", answer: "つけ", hint: "Turn on" }
      ]
    },
    {
      id: 31, name: "第31課", title: "Adverbs",
      questions: [
        { type: "choice", text: "「ゆっくり」 artinya?", options: ["Cepat", "Pelan", "Keras", "Senyap"], correct: 1 },
        { type: "choice", text: "「もっと」 artinya?", options: ["Sedikit", "Lebih", "Terlalu", "Sangat"], correct: 1 },
        { type: "dialogue", text: "「もっとゆっくり話してください。」", dialogue: { A: "もっとゆっくり話してください。", B: "" }, options: ["わかりました", "すみません", "ありがとう", "いいえ"], correct: 0 },
        { type: "fill", text: "「____勉強します。」", answer: "ゆっくり", hint: "Pelan-pelan" },
        { type: "choice", text: "「~てから」 artinya?", options: ["Sebelum", "Sesudah", "Sekarang", "Bersamaan"], correct: 1 }
      ]
    },
    {
      id: 32, name: "第32課", title: "Habitual Past",
      questions: [
        { type: "choice", text: "「子供の時」 artinya?", options: ["Sekarang", "Waktu kecil", "Tua", "Muda"], correct: 1 },
        { type: "choice", text: "「~ました」 untuk?", options: ["Sekarang", "Masa lalu", "Akan datang", "Perintah"], correct: 1 },
        { type: "dialogue", text: "「小さい時、何をしていましたか。」", dialogue: { A: "小さい時、何をしていましたか。", B: "" }, options: ["よく遊びました", "遊びます", "遊びたいです", "遊ぶ"], correct: 0 },
        { type: "fill", text: "「3____前」 (3 tahun lalu)", answer: "ねん", hint: "Tahun" }
      ]
    },
    {
      id: 33, name: "第33課", title: "Modern Experience",
      questions: [
        { type: "choice", text: "「~てから」 artinya?", options: ["Sebelum", "Sesudah", "Sekarang", "Bersamaan"], correct: 1 },
        { type: "choice", text: "「もう三年になります」 berapa lama?", options: ["1 tahun", "3 tahun", "5 tahun", "10 tahun"], correct: 1 },
        { type: "dialogue", text: "「刺身を食べたことがありますか。」", dialogue: { A: "刺身を食べたことがありますか。", B: "" }, options: ["はい、あります", "ありません", "好きです", "食べません"], correct: 1 },
        { type: "fill", text: "「もう一度」 artinya?", answer: "もう一度", hint: "Sekali lagi" }
      ]
    },
    {
      id: 34, name: "第34課", title: "Past Potential 2",
      questions: [
        { type: "choice", text: "「~ことができました」 artinya?", options: ["Tidak bisa", "Bisa (lalu)", "Akan", "Sekarang"], correct: 1 },
        { type: "choice", text: "「合格できました」 artinya?", options: ["Gagal", "Lulus", "Ujian", "Akan ujian"], correct: 1 },
        { type: "dialogue", text: "「子供の時、ピアノが弾けましたか。」", dialogue: { A: "子供の時、ピアノが弾けましたか。", B: "" }, options: ["はい、弾けました", "弾けません", "弾く", "弾きました"], correct: 0 },
        { type: "fill", text: "「泳____ました。」", answer: "げ", hint: "Bisa berenang lalu" }
      ]
    },
    {
      id: 35, name: "第35課", title: "Before/After",
      questions: [
        { type: "choice", text: "「ご飯を食べてから行きます」 urutan?", options: ["Pergi dulu", "Makan dulu, lalu pergi", "Bersamaan", "Tidak jelas"], correct: 1 },
        { type: "choice", text: "「まだ~ていません」 artinya?", options: ["Sudah", "Belum", "Sekarang", "Akan"], correct: 1 },
        { type: "dialogue", text: "「朝ご飯を食べましたか。」", dialogue: { A: "朝ご飯を食べましたか。", B: "" }, options: ["はい、食べました", "いいえ、まだ食べていません", "食べます", "食べたくない"], correct: 1 },
        { type: "fill", text: "「お風呂に____ます。」(Mandi)", answer: "はい", hint: "Masuk-mandi" }
      ]
    },
    {
      id: 36, name: "第36課", title: "Necessity",
      questions: [
        { type: "choice", text: "「~なければなりません」 artinya?", options: ["Boleh", "Harus", "Dilarang", "Bisa"], correct: 1 },
        { type: "choice", text: "「早く着かなければなりません」 artinya?", options: ["Telat", "Harus cepat", "Tidak datang", "Lambat"], correct: 1 },
        { type: "dialogue", text: "「明日、9時までに来てください。」", dialogue: { A: "明日、9時までに来てください。", B: "" }, options: ["9時までに行きます", "9時に行きます", "9時からです", "来ません"], correct: 0 },
        { type: "fill", text: "「たくさん____なければなりません。」", answer: "べんきょう", hint: "Harus belajar" }
      ]
    },
    {
      id: 37, name: "第37課", title: "Prohibition",
      questions: [
        { type: "choice", text: "「~なくてもいいです」 artinya?", options: ["Harus", "Tidak harus", "Dilarang", "Bisa"], correct: 1 },
        { type: "choice", text: "「~てはいけません」 artinya?", options: ["Boleh", "Harus", "Dilarang", "Tidak harus"], correct: 2 },
        { type: "dialogue", text: "「薬を飲まなければなりませんか。」", dialogue: { A: "薬を飲まなければなりませんか。", B: "" }, options: ["はい、飲まなければなりません", "飲まなくてもいいです", "飲みたくない", "飲みません"], correct: 1 },
        { type: "fill", text: "「ここで写真を____はいけません。」", answer: "とって", hint: "Dilarang" }
      ]
    },
    {
      id: 38, name: "第38課", title: "If Conditionals",
      questions: [
        { type: "choice", text: "「天気がよければ、散歩に行きます。」 artinya?", options: ["Tidak jalan", "Kalau bagus, jalan", "Studi", "Di rumah"], correct: 1 },
        { type: "choice", text: "「~ば」 ekspresi?", options: ["Jika", "Perintah", "Lampau", "Ajakan"], correct: 0 },
        { type: "dialogue", text: "「暇なら、遊びに来てください。」", dialogue: { A: "暇なら、遊びに来てください。", B: "" }, options: ["行きます", "行きません", "暇", "すみません"], correct: 0 },
        { type: "fill", text: "「雨____、行きません。」", answer: "なら", hint: "Kalau hujan" }
      ]
    },
    {
      id: 39, name: "第39課", title: "Positions",
      questions: [
        { type: "choice", text: "「机の上」 buku di mana?", options: ["Di bawah", "Di atas", "Di dalam", "Di sebelah"], correct: 1 },
        { type: "choice", text: "「箱の中」 artinya?", options: ["Luar", "Dalam", "Atas", "Samping"], correct: 1 },
        { type: "dialogue", text: "「銀行はどこですか。」", dialogue: { A: "銀行はどこですか。", B: "" }, options: ["駅の前です", "右です", "左です", "後ろです"], correct: 0 },
        { type: "fill", text: "「鞄は机の____。」(Di sebelah)", answer: "となり", hint: "Sebelah" }
      ]
    },
    {
      id: 40, name: "第40課", title: "Eat & Drink",
      questions: [
        { type: "choice", text: "「ラーメンを食べます」 artinya?", options: ["Minum ramen", "Makan ramen", "Membuat", "Masak"], correct: 1 },
        { type: "choice", text: "「水を飲みます」 artinya?", options: ["Makan air", "Minum air", "Cuci", "Buang"], correct: 1 },
        { type: "dialogue", text: "「何を食べますか。」", dialogue: { A: "何を食べますか。", B: "" }, options: ["寿司を食べます", "飲みます", "行きます", "見ます"], correct: 0 },
        { type: "fill", text: "「晩ご飯に____を飲みます。」", answer: "みず", hint: "Air" }
      ]
    },
    {
      id: 41, name: "第41課", title: "City Life",
      questions: [
        { type: "choice", text: "「都会」 artinya?", options: ["Desa", "Kota besar", "Desa kecil", "Kampung"], correct: 1 },
        { type: "choice", text: "「田舎」 artinya?", options: ["Kota", "Desa", "Pantai", "Gunung"], correct: 1 },
        { type: "dialogue", text: "「東京と京都、どちらが好きですか。」", dialogue: { A: "東京と京都、どちらが好きですか。", B: "" }, options: ["東京のほうが好きです", "好きです", "どちらでも", "京都"], correct: 0 },
        { type: "fill", text: "「都会の生活は____です。」(Nyaman)", answer: "べんり", hint: "Convenient" },
        { type: "choice", text: "「住む」 artinya?", options: ["Mati", "Tinggal", "Kerja", "Tidur"], correct: 1 }
      ]
    },
    {
      id: 42, name: "第42課", title: "Events",
      questions: [
        { type: "choice", text: "「出席します」 artinya?", options: ["Tidak hadir", "Hadir", "Membatalkan", "Mencari"], correct: 1 },
        { type: "choice", text: "「招待します」 artinya?", options: ["Keluarkan", "Undang", "Terima kasih", "Selamat"], correct: 1 },
        { type: "dialogue", text: "「来週、会議がありますか。」", dialogue: { A: "来週、会議がありますか。", B: "" }, options: ["はい、出ます", "いいえ", "わかりません", "来ません"], correct: 0 },
        { type: "fill", text: "「パーティーに____します。」", answer: "さんか", hint: "Berpartisipasi" }
      ]
    },
    {
      id: 43, name: "第43課", title: "Honorifics 1",
      questions: [
        { type: "choice", text: "「いらっしゃる」 bahasa hormat untuk?", options: ["Makan/minum", "Datang/pergi", "Lihat", "Kerja"], correct: 1 },
        { type: "choice", text: "「召し上がる」 hormat untuk?", options: ["Datang", "Makan/minum", "Lihat", "Tulis"], correct: 1 },
        { type: "dialogue", text: "「先生はもういらっしゃいましたか。」", dialogue: { A: "先生はもういらっしゃいましたか。", B: "" }, options: ["はい、いらっしゃいました", "はい、来ました", "わかりません", "いいえ"], correct: 0 },
        { type: "fill", text: "「お上がり____」(Silakan masuk)", answer: "ください", hint: "Permintaan hormat" }
      ]
    },
    {
      id: 44, name: "第44課", title: "Honorifics 2",
      questions: [
        { type: "choice", text: "「くださる」 hormat untuk?", options: ["Memberi (saya)", "Menerima", "Membeli", "Menjual"], correct: 0 },
        { type: "choice", text: "「ご両親」 artinya?", options: ["Teman", "Orang tua (orang lain)", "Anak", "Saudara"], correct: 1 },
        { type: "dialogue", text: "「先生の本をくださいました。」", dialogue: { A: "先生の本をくださいました。", B: "" }, options: ["ありがとうございます", "すみません", "わかりません", "いいえ"], correct: 0 },
        { type: "fill", text: "「先生、その本を____くださいました。」", answer: "くた", hint: "Hormat memberi" }
      ]
    },
    {
      id: 45, name: "第45課", title: "Humility 1",
      questions: [
        { type: "choice", text: "「いただく」 artinya?", options: ["Memberi", "Menerima (rendah hati)", "Mencuri", "Membeli"], correct: 1 },
        { type: "choice", text: "「お先に失礼します」 artinya?", options: ["Maaf duluan", "Selamat tinggal", "Terima kasih", "Halo"], correct: 0 },
        { type: "dialogue", text: "「先生、お先に失礼します。」", dialogue: { A: "先生、お先に失礼します。", B: "" }, options: ["お疲れ様", "さようなら", "こんにちは", "すみません"], correct: 0 },
        { type: "fill", text: "「先生の本を____ました。」(Menerima)", answer: "いただき", hint: "Humility" }
      ]
    },
    {
      id: 46, name: "第46課", title: "Humility 2",
      questions: [
        { type: "choice", text: "「お目にかかる」 artinya?", options: ["Bertemu (rendah hati)", "Melihat", "Berkata", "Berbicara"], correct: 0 },
        { type: "choice", text: "「申し上げる」 rendah hati untuk?", options: ["Memberi", "Berkata/mengatakan", "Menerima", "Makan"], correct: 1 },
        { type: "dialogue", text: "「この書類を社長にお見せしましたか。」", dialogue: { A: "この書類を社長にお見せしましたか。", B: "" }, options: ["はい、お見せしました", "いいえ", "わかりません", "すみません"], correct: 0 },
        { type: "fill", text: "「先生が____を申し上げました。」", answer: "お礼", hint: "Terima kasih (humility)" }
      ]
    },
    {
      id: 47, name: "第47課", title: "Polite Requests",
      questions: [
        { type: "choice", text: "「~いただけますか」 artinya?", options: ["Bisa (permintaan)", "Dilarang", "Harus", "Selesai"], correct: 0 },
        { type: "choice", text: "「お待ちいただけますか。」", options: ["Bisa menunggu", "Tidak bisa", "Harus", "Boleh"], correct: 0 },
        { type: "dialogue", text: "「これを読んでいただけますか。」", dialogue: { A: "これを読んでいただけますか。", B: "" }, options: ["はい、いいですよ", "いいえ", "すみません", "読めません"], correct: 0 },
        { type: "fill", text: "「ちょっと____いただけますか。」", answer: "まって", hint: "Tunggu sebentar" }
      ]
    },
    {
      id: 48, name: "第48課", title: "Imperatives",
      questions: [
        { type: "choice", text: "「~しろ！」 artinya?", options: ["Tolong", "Lakukan! (kasar)", "Berhenti", "Lambat"], correct: 1 },
        { type: "choice", text: "「うるさい！」 artinya?", options: ["Bagus", "Diam!", "Setuju", "Bagus sekali"], correct: 1 },
        { type: "dialogue", text: "「早く準備しろ！」", dialogue: { A: "早く準備しろ！", B: "" }, options: ["はい、すぐに", "いいえ", "なぜ", "すみません"], correct: 0 },
        { type: "fill", text: "「早くし____！」(Lakukan!)", answer: "ろ", hint: "Imperatif kasar" }
      ]
    },
    {
      id: 49, name: "第49課", title: "Colloquial",
      questions: [
        { type: "choice", text: "「~じゃない」 kasar artinya?", options: ["Bukan", "Iya", "Mungkin", "Tentu"], correct: 0 },
        { type: "choice", text: "「~じゃん」 artinya?", options: ["Pertanyaan", "Bukankah?", "Perintah", "Lampau"], correct: 1 },
        { type: "dialogue", text: "「あいつ、また遅刻じゃん。」", dialogue: { A: "あいつ、また遅刻じゃん。", B: "" }, options: ["ほんとね、困る", "ありがとう", "さようなら", "こんにちは"], correct: 0 },
        { type: "fill", text: "「____かな」 entahlah", answer: "なに", hint: "Apa ya" }
      ]
    },
    {
      id: 50, name: "第50課", title: "Daily Conversation",
      questions: [
        { type: "choice", text: "「お疲れ様」 artinya?", options: ["Kamu capek", "Kerja bagus", "Saya capek", "Halo"], correct: 1 },
        { type: "choice", text: "「よろしくお願いします」 artinya?", options: ["Salam kenal", "Mohon kerjasamanya", "Selamat tinggal", "Selamat pagi"], correct: 1 },
        { type: "dialogue", text: "「それでは、今日はこのへんで失礼します。」", dialogue: { A: "今日はこのへんで失礼します。", B: "" }, options: ["お疲れ様でした", "こんにちは", "いただきます", "すみません"], correct: 0 },
        { type: "fill", text: "「お世話に____ります。」(Terima kasih atas bantuan)", answer: "なって", hint: "お世話になっております" }
      ]
    }
  ]
};
