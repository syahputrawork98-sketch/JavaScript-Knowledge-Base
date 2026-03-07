# Documentation Governance

Folder `docs/` berisi kumpulan dokumen yang mengatur **arsitektur, filosofi konten, dan aturan operasional** dari repository ini.

Jika folder root repository dapat dianalogikan sebagai **rak buku**, maka setiap folder seperti `01-javascript-tutorial`, `02-javascript-runtime-first-principles`, dan seterusnya adalah **buku-buku yang berada di dalam rak tersebut**.

Folder `docs/` berfungsi sebagai **lapisan governance** yang memastikan seluruh buku dalam repository ini memiliki:

* struktur yang konsisten
* istilah teknis yang akurat
* batasan topik yang jelas
* kualitas penjelasan yang terjaga

Dokumen dalam folder ini tidak berisi materi pembelajaran JavaScript secara langsung.
Sebaliknya, dokumen-dokumen ini mengatur **bagaimana materi tersebut ditulis, disusun, dan dikembangkan**.

---

# Struktur Dokumentasi

Dokumen dalam folder ini dibagi menjadi tiga lapisan utama:

## Strategic Layer

Lapisan ini menjelaskan **arsitektur pengetahuan repository secara keseluruhan**.

Dokumen dalam lapisan ini menjawab pertanyaan seperti:

* bagaimana repository ini dibagi menjadi beberapa buku
* bagaimana urutan domain JavaScript dipelajari
* bagaimana batas topik antar buku ditentukan

Dokumen:

```
01-repository-roadmap.md
02-content-philosophy.md
03-track-boundaries.md
```

---

## Editorial Layer

Lapisan ini mengatur **bagaimana materi teknis ditulis**.

Fokus utama dari lapisan ini adalah menjaga:

* konsistensi struktur penjelasan
* penggunaan istilah resmi JavaScript
* akurasi mental model yang dibangun

Dokumen:

```
10-topic-writing-standard.md
11-terminology-policy.md
```

---

## Operational Layer

Lapisan ini mengatur **proses pengembangan repository**.

Dokumen dalam lapisan ini digunakan untuk memastikan bahwa perubahan pada repository tetap mengikuti standar yang telah ditentukan.

Dokumen:

```
20-operating-rules.md
21-quality-gate.md
22-repository-status.md
```

---

# Prinsip Umum Repository

Repository ini dibangun dengan beberapa prinsip dasar:

**1. Fokus pada JavaScript sebagai bahasa**

Repository ini berfokus pada:

* JavaScript language semantics
* runtime behavior
* execution model

Framework seperti React atau Next.js tidak menjadi fokus utama.

---

**2. Membangun mental model yang benar**

Tujuan utama dari repository ini adalah membantu memahami:

* bagaimana JavaScript dijalankan oleh engine
* bagaimana kode dievaluasi
* bagaimana asynchronous execution bekerja

Materi tidak hanya menjelaskan **cara menggunakan JavaScript**, tetapi juga **mengapa JavaScript berperilaku seperti itu**.

---

**3. Menggunakan terminologi resmi**

Penjelasan dalam repository ini menggunakan istilah teknis yang sesuai dengan konsep JavaScript seperti:

* Execution Context
* Lexical Environment
* Closure
* Prototype Chain
* Event Loop
* Referential Equality
* Garbage Collection

Istilah populer yang berpotensi menyesatkan akan dihindari atau diluruskan.

---

**4. Menghindari miskonsepsi umum**

Banyak miskonsepsi JavaScript muncul karena:

* belajar langsung dari framework
* menggunakan analogi yang terlalu disederhanakan
* memahami perilaku bahasa hanya dari contoh praktis

Repository ini berusaha menjelaskan konsep JavaScript dengan **mental model yang lebih akurat**.

---

# Cara Menggunakan Dokumen Ini

Dokumen dalam folder `docs/` terutama digunakan ketika:

* menambahkan topik baru
* memperbaiki struktur materi
* meninjau kualitas penjelasan
* menjaga konsistensi terminologi

Setiap perubahan besar pada repository sebaiknya merujuk pada dokumen dalam folder ini terlebih dahulu.

Dengan cara ini, repository dapat berkembang secara konsisten sebagai **knowledge base JavaScript jangka panjang**.
