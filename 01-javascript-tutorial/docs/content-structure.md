# Content Structure
## Buku 01 — JavaScript Tutorial

Dokumen ini menjelaskan **struktur isi buku** untuk `01-javascript-tutorial`.

Tujuan dokumen ini adalah memastikan bahwa seluruh konten buku:

- konsisten
- terstruktur
- memiliki urutan pembelajaran yang logis
- tidak keluar dari ruang lingkup buku

Buku ini adalah **pengantar penggunaan bahasa JavaScript** sebelum mempelajari mekanisme runtime JavaScript pada buku berikutnya.

---

# Tujuan Buku

Buku ini bertujuan membantu pembaca:

- memahami sintaks dasar JavaScript
- menulis program JavaScript sederhana
- mengenali elemen dasar bahasa JavaScript
- memahami bagaimana berbagai bagian bahasa digunakan dalam program

Buku ini **tidak membahas mekanisme internal JavaScript engine**.

Konsep seperti:

- Execution Context
- Lexical Environment
- Scope
- Closure
- Event Loop
- Prototype Chain
- Garbage Collection

akan dibahas pada buku lain dalam repository ini.

---

# Struktur Pembelajaran

Urutan bab dalam buku ini mengikuti pendekatan:

program → syntax → composition


Artinya pembaca akan:

1. melihat bentuk program JavaScript paling sederhana
2. mempelajari elemen bahasa yang membentuk program
3. mempelajari bagaimana elemen-elemen tersebut dikombinasikan

---

# Struktur Folder Buku

Struktur direktori untuk buku ini adalah sebagai berikut:
01-javascript-tutorial

README.md

docs/
README.md
writing-rules.md
content-structure.md
topic-template.md

chapters/
01-program-pertama
02-variables
03-data-types
04-operators
05-conditionals
06-loops
07-functions
08-arrays
09-objects
10-modules
11-error-handling

examples/



---

# Daftar Bab

Buku ini terdiri dari sebelas bab utama.

## Bab 01 — Program Pertama

Tujuan bab ini adalah memperkenalkan bentuk paling sederhana dari program JavaScript.

Topik utama:

- menjalankan JavaScript
- struktur dasar program JavaScript
- penggunaan `console.log`

Contoh kode:

```javascript
console.log("Hello World")

Bab 02 — Variables

Bab ini menjelaskan bagaimana menyimpan nilai dalam program JavaScript.

Topik utama:

deklarasi variabel

var

let

const

inisialisasi variabel

perubahan nilai variabel

Contoh kode:

let age = 20
const name = "Andi"
Bab 03 — Data Types

Bab ini menjelaskan tipe data dasar dalam JavaScript.

Topik utama:

number

string

boolean

null

undefined

Contoh kode:

let score = 100
let name = "Budi"
let active = true
Bab 04 — Operators

Bab ini menjelaskan operator yang digunakan dalam JavaScript.

Topik utama:

arithmetic operators

comparison operators

logical operators

assignment operators

Contoh kode:

let result = 10 + 5
let isAdult = age >= 18
Bab 05 — Conditionals

Bab ini menjelaskan bagaimana program membuat keputusan.

Topik utama:

if

else

else if

ternary operator

Contoh kode:

if (age >= 18) {
  console.log("Adult")
}
Bab 06 — Loops

Bab ini menjelaskan bagaimana program melakukan pengulangan.

Topik utama:

for

while

break

continue

Contoh kode:

for (let i = 0; i < 5; i++) {
  console.log(i)
}
Bab 07 — Functions

Bab ini menjelaskan bagaimana mendefinisikan dan menggunakan fungsi.

Topik utama:

function declaration

parameters

return value

arrow functions

Contoh kode:

function add(a, b) {
  return a + b
}
Bab 08 — Arrays

Bab ini menjelaskan bagaimana menyimpan koleksi data.

Topik utama:

membuat array

mengakses elemen array

menambah elemen

menghapus elemen

iterasi array

Contoh kode:

const numbers = [1, 2, 3]

numbers.push(4)
Bab 09 — Objects

Bab ini menjelaskan bagaimana membuat dan menggunakan objek.

Topik utama:

object literal

properties

methods

mengakses property

Contoh kode:

const user = {
  name: "Andi",
  age: 20
}
Bab 10 — Modules

Bab ini menjelaskan bagaimana memecah program menjadi beberapa file.

Topik utama:

export

import

struktur modul

Contoh kode:

export function add(a, b) {
  return a + b
}
Bab 11 — Error Handling

Bab ini menjelaskan bagaimana menangani kesalahan dalam program.

Topik utama:

try

catch

throw

Contoh kode:

try {
  JSON.parse(data)
} catch (error) {
  console.log(error)
}
Prinsip Penting

Semua bab dalam buku ini harus mengikuti prinsip berikut.

Fokus pada penggunaan bahasa JavaScript

Hindari pembahasan mendalam tentang mekanisme runtime

Gunakan contoh kode sederhana

Setiap konsep harus dijelaskan secara bertahap

Materi harus mudah dipahami oleh pembaca yang baru mengenal JavaScript
