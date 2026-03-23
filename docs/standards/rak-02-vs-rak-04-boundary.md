# Kontrak Batas: RAK-02 vs RAK-04

Dokumen ini menetapkan batas kerja yang tegas antara **RAK-02: JavaScript Foundation** dan **RAK-04: Core Specification** agar topik yang sama tidak lagi terasa seperti ditulis dua kali tanpa nilai tambah yang jelas.

## 1. Prinsip Utama

- **RAK-02 menjawab "cara memakai fitur dengan benar"**.
- **RAK-04 menjawab "mengapa fitur berperilaku seperti itu di level spesifikasi"**.
- Kedua rak boleh membahas topik yang sama, tetapi **sudut bahas, kedalaman, dan tujuan baca harus berbeda secara eksplisit**.

## 2. Mandat Tiap Rak

### RAK-02: Foundation Layer

RAK-02 adalah jalur belajar praktis berbasis **MDN-oriented usage**.

Fokus utamanya:
- Sintaks dan bentuk dasar fitur.
- Mental model yang mudah dipakai saat menulis kode.
- Kapan fitur dipakai dan kapan dihindari.
- Pitfall umum dalam praktik harian.
- Lab dan contoh penggunaan nyata.

RAK-02 **boleh** menyentuh detail teknis jika membantu pemahaman, tetapi tidak boleh berubah menjadi bedah clause atau algoritma spec.

### RAK-04: Specification Layer

RAK-04 adalah jalur bedah internal berbasis **ECMA-262-oriented mechanics**.

Fokus utamanya:
- Clause dan struktur grammar spesifikasi.
- Internal slots, internal methods, abstract operations.
- Environment Records, execution mechanics, instantiation rules.
- Mengapa perilaku bahasa muncul seperti yang terlihat di permukaan.
- Konsekuensi semantic yang penting bagi arsitek senior.

RAK-04 **boleh** memakai analogi dan contoh, tetapi analogi itu hanya jembatan menuju mekanisme spec, bukan tujuan utama materi.

## 3. Aturan Pembeda Konten

Jika sebuah topik muncul di kedua rak, gunakan aturan berikut:

### Di RAK-02

Tanyakan:
- Apa bentuk sintaksnya?
- Apa kegunaan paling umum?
- Apa jebakan penggunaan sehari-hari?
- Bagaimana contoh praktiknya?

Jangan dominan membahas:
- Nama algoritma internal.
- Langkah instantiation/evaluation yang terlalu spec-heavy.
- Slot internal kecuali disebut singkat sebagai konteks.

### Di RAK-04

Tanyakan:
- Clause mana yang mengatur fitur ini?
- Algoritma apa yang dijalankan?
- Record, slot, atau method internal apa yang terlibat?
- Mengapa ada perilaku edge case tertentu?

Jangan dominan membahas:
- Tutorial dasar penggunaan.
- Motivasi pemula yang sudah cukup dijelaskan di RAK-02.
- Contoh yang hanya mengulang pemakaian umum tanpa membuka mekanisme.

## 4. Pola Penulisan Saat Topik Bertumpang Tindih

Gunakan pembagian peran berikut:

- **Functions**
  - `RAK-02`: cara deklarasi, parameter, closure, recursion, arrow function dalam praktik.
  - `RAK-04`: function creation, lexical binding semantics, `this`, `HomeObject`, instantiation, async/generator machinery.

- **Classes**
  - `RAK-02`: class sebagai alat desain modern, `extends`, `super`, static, private fields dalam penggunaan nyata.
  - `RAK-04`: class definition semantics, strictness, prototype linkage, heritage evaluation, constructor mechanics.

- **Statements / Declarations**
  - `RAK-02`: kapan memakai `const`, `let`, destructuring, `try...catch`, control flow secara aman.
  - `RAK-04`: binding instantiation, completion records, lexical environments, destructuring assignment semantics.

- **Expressions / Operators**
  - `RAK-02`: operator untuk coding harian, readability, guard patterns, nullish vs logical use.
  - `RAK-04`: evaluation order, `GetValue` / `PutValue`, short-circuit semantics, assignment algorithms.

- **Built-ins**
  - `RAK-02`: API permukaan dan pola pemakaian objek bawaan.
  - `RAK-04`: object model, internal behavior, exotic vs ordinary behavior, intrinsic relationships.

- **Modules / Async / Iteration**
  - `RAK-02`: bagaimana memakai `import`, `export`, `await`, iterables, generators dalam aplikasi.
  - `RAK-04`: module loading/evaluation, promise jobs, iterator protocols, async iterator semantics.

## 5. Red Flags Duplikasi Tidak Sehat

Suatu materi perlu ditinjau ulang jika:

- Penjelasan di dua rak bisa saling ditukar tanpa kehilangan makna.
- RAK-02 mulai terasa seperti terjemahan ringan dari ECMA-262.
- RAK-04 terasa seperti tutorial penggunaan biasa.
- Dua unit memakai analogi, contoh, dan tujuan pembelajaran yang hampir sama.
- Tidak ada kalimat pembeda yang menjelaskan peran rak tersebut.

## 6. Aturan Audit Praktis

Saat mengaudit unit di `RAK-02` atau `RAK-04`, gunakan cek cepat ini:

1. Apakah pembaca tahu rak ini menjawab pertanyaan jenis apa?
2. Apakah isi unit ini masih setia pada mandat raknya?
3. Jika topik yang sama ada di rak lain, apakah nilai tambah unit ini jelas?
4. Apakah contoh dan narasi di sini membuka layer yang berbeda, bukan mengulang layer yang sama?

Jika jawaban untuk poin 3 atau 4 adalah "tidak", maka unit tersebut harus disesuaikan sebelum dinyatakan final.

## 7. Keputusan Operasional Ke Depan

- Audit `RAK-02` harus selalu memeriksa apakah materi terlalu masuk ke wilayah spec.
- Audit `RAK-04` harus selalu memeriksa apakah materi terlalu jatuh ke mode tutorial dasar.
- `RAK-03` diperlakukan sebagai jembatan evolusi:
  - menjelaskan **kapan** dan **mengapa historis** fitur modern muncul,
  - bukan menggantikan peran fondasi `RAK-02`,
  - dan bukan menggantikan bedah mekanis `RAK-04`.

---
*Status: Active Standard for cross-rack audits*
