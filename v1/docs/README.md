# Dokumentasi Pendukung Repository

Folder `docs/` berisi dokumen pendukung yang mengatur **struktur, aturan penulisan, dan aturan pengembangan** repository ini.

Repository ini dirancang sebagai **rak buku JavaScript**.

Artinya:

- `README.md` di root menjelaskan gambaran besar repository.
- Setiap folder buku menjelaskan materi JavaScript secara penuh.
- Folder `docs/` hanya berisi aturan pendukung agar seluruh repository tetap rapi, konsisten, dan mudah dikembangkan.

Folder `docs/` **bukan tempat membahas materi JavaScript secara langsung**.

Penjelasan konsep seperti:

- Execution Context
- Lexical Environment
- Closure
- Event Loop
- Prototype Chain
- Garbage Collection

harus berada di buku yang sesuai, bukan di folder ini.

---

# Fungsi Folder `docs/`

Folder ini digunakan untuk menjaga agar seluruh repository:

- memiliki struktur yang konsisten
- menggunakan gaya penulisan yang seragam
- tetap fokus pada JavaScript sebagai bahasa dan runtime
- tidak melebar menjadi kumpulan tutorial yang tidak terarah

---

# Isi Folder `docs/`

## `repository-structure.md`

Menjelaskan struktur repository dan fungsi setiap bagian utama dalam monorepo ini.

---

## `writing-rules.md`

Menjelaskan aturan penulisan materi agar seluruh buku memiliki gaya penjelasan yang konsisten, teknis, dan jelas.

---

## `contribution-rules.md`

Menjelaskan aturan saat menambah, mengubah, memindahkan, atau merapikan isi repository.

---

# Prinsip Umum

Dokumen di folder ini hanya berfungsi sebagai **pendukung repository**, bukan sebagai isi utama pembelajaran.

Materi inti JavaScript tetap berada di folder buku, yaitu:

- `01-javascript-tutorial`
- `02-javascript-runtime-first-principles`
- `03-asynchronous-javascript-model`
- `04-javascript-object-model`
- `05-javascript-memory-and-references`
- `06-javascript-runtime-exercises`
- `07-javascript-specification-companion`
- `08-javascript-engine-internals`
- `09-javascript-modules-and-program-structure`

Dengan pemisahan seperti ini, repository dapat tetap terjaga sebagai **knowledge base JavaScript jangka panjang** yang rapi, fokus, dan mudah dibaca ulang.
