# Struktur Repository

Repository ini disusun sebagai **rak buku JavaScript**.

Setiap folder utama merepresentasikan satu buku yang membahas satu domain tertentu dalam JavaScript.  
Dengan pendekatan ini, seluruh materi dapat dipelajari secara bertahap dan tetap terorganisir dengan baik.

Struktur ini juga membantu menjaga agar pembahasan setiap domain JavaScript tidak tercampur.

---

# Struktur Utama

Berikut struktur utama repository:
README.md
docs/

01-javascript-tutorial
02-javascript-runtime-first-principles
03-asynchronous-javascript-model
04-javascript-object-model
05-javascript-memory-and-references
06-javascript-runtime-exercises
07-javascript-specification-companion
08-javascript-engine-internals
09-javascript-modules-and-program-structure

---

# Penjelasan Struktur

## `README.md`

Berfungsi sebagai halaman utama repository.

Dokumen ini menjelaskan:

- tujuan repository
- konsep repository sebagai rak buku
- daftar buku yang tersedia
- gambaran umum roadmap pembelajaran JavaScript

README di root **tidak digunakan untuk menjelaskan materi JavaScript secara mendalam**.

Materi utama berada di dalam masing-masing buku.

---

## `docs/`

Folder `docs/` berisi dokumen pendukung yang mengatur repository.

Isi folder ini meliputi:

- struktur repository
- aturan penulisan materi
- aturan kontribusi dan perubahan

Folder ini **tidak digunakan untuk menyimpan materi JavaScript**.

---

## Folder Buku

Setiap folder buku membahas satu domain JavaScript secara penuh.

Setiap buku memiliki fokus yang berbeda agar pembahasan tetap jelas dan tidak tumpang tindih.

### `01-javascript-tutorial`

Membahas dasar penggunaan bahasa JavaScript.

Topik yang biasanya muncul:

- variables
- functions
- objects
- arrays
- conditionals
- loops
- modules
- error handling

Tujuan buku ini adalah memberikan fondasi penggunaan bahasa.

---

### `02-javascript-runtime-first-principles`

Membahas bagaimana JavaScript menjalankan kode.

Topik yang biasanya muncul:

- Execution Context
- Lexical Environment
- Scope
- Closures
- Hoisting
- this binding
- Call Stack

Fokus buku ini adalah memahami **execution model JavaScript**.

---

### `03-asynchronous-javascript-model`

Membahas model asynchronous JavaScript.

Topik utama:

- Event Loop
- Task Queue
- Microtask Queue
- Promises
- Async/Await
- Job Queue

Buku ini membantu memahami **urutan eksekusi asynchronous code**.

---

### `04-javascript-object-model`

Membahas bagaimana object bekerja dalam JavaScript.

Topik utama:

- objects
- property descriptors
- prototype chain
- [[Prototype]]
- constructors
- new operator
- class syntax

---

### `05-javascript-memory-and-references`

Membahas bagaimana nilai dan referensi direpresentasikan dalam runtime.

Topik utama:

- primitive values
- reference values
- referential equality
- mutation vs immutability
- object identity
- garbage collection (high level)

---

### `06-javascript-runtime-exercises`

Berisi latihan untuk memperkuat pemahaman runtime JavaScript.

Latihan biasanya berfokus pada:

- closure behavior
- this binding edge cases
- asynchronous execution order
- object mutation behavior

---

### `07-javascript-specification-companion`

Membantu memahami konsep JavaScript melalui perspektif **ECMAScript specification**.

Topik biasanya meliputi:

- Execution Context
- Environment Records
- Lexical Environment
- Abstract Operations
- Internal Slots

---

### `08-javascript-engine-internals`

Membahas bagaimana JavaScript engine mengimplementasikan bahasa JavaScript.

Topik dapat mencakup:

- parsing
- AST
- bytecode
- JIT compilation
- engine optimization

---

### `09-javascript-modules-and-program-structure`

Membahas bagaimana program JavaScript disusun pada skala yang lebih besar.

Topik dapat mencakup:

- module system
- dependency structure
- program architecture
- code organization

---

# Aturan Struktur

Untuk menjaga konsistensi repository, beberapa aturan berikut harus dipatuhi:

- setiap domain besar JavaScript ditempatkan di buku yang sesuai
- materi tidak boleh dicampur antar buku tanpa alasan yang jelas
- folder `docs/` hanya berisi aturan repository
- `README.md` root tidak berisi materi teknis yang panjang
- penjelasan konsep JavaScript harus berada di dalam buku

---

# Tujuan Struktur Ini

Struktur ini dibuat agar repository:

- mudah dinavigasi
- mudah dipelajari secara bertahap
- mudah dikembangkan dalam jangka panjang
- tetap fokus pada JavaScript sebagai bahasa dan runtime

Dengan struktur ini, repository dapat berfungsi sebagai **knowledge base JavaScript yang terorganisir dengan baik**.
