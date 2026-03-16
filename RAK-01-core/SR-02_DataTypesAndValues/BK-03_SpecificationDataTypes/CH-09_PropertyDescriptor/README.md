# CH-09: Property Descriptor Specification Type

Di **SR-01** kita belajar tentang atribut properti (`Writable`, `Enumerable`, dll). Dalam spesifikasi, atribut-atribut ini dibungkus menjadi satu kesatuan yang disebut **Property Descriptor** (Clause 6.2.6).

## Mental Model: "KTP untuk Properti"
Bayangkan setiap properti pada suatu objek memiliki "KTP" internal.
- Di KTP tersebut tertulis siapa dia, apakah dia boleh diubah nilainya, dan apakah dia boleh dihapus.
- Saat Anda ingin membuat atau memodifikasi properti, Anda harus menyerahkan "Draft KTP" (Property Descriptor) ini kepada mesin JavaScript.

---

## 1. Struktur Property Descriptor
Property Descriptor adalah sebuah Record yang berisi kombinasi dari field berikut:
- **[[Value]]**: Nilai datanya.
- **[[Writable]]**: Bisa diubah?
- **[[Get]] / [[Set]]**: Fungsi akses (untuk Accessor Property).
- **[[Enumerable]]**: Muncul di iterasi?
- **[[Configurable]]**: Aturannya bisa diubah/dihapus?

## 2. Fully vs Partially Populated
- **Fully Populated:** Jika semua field sudah ditentukan.
- **Partially Populated:** Jika hanya beberapa field yang diatur (misal: hanya `[[Value]]`). Sisa field-nya akan mengikuti nilai default saat properti diciptakan.

## 3. Fungsi Helper Internal
Spesifikasi memiliki algoritma seperti:
- **IsAccessorDescriptor(Desc):** Cek apakah ini descriptor untuk getter/setter.
- **IsDataDescriptor(Desc):** Cek apakah ini descriptor untuk data biasa.
- **CompletePropertyDescriptor(Desc):** Mengisi field yang kosong dengan nilai default spec.

---

## Mengapa Arsitek Harus Tahu Ini?
`Object.defineProperty()` adalah cerminan langsung dari Specification Type ini. Dengan memahami cara kerja Descriptor, Anda bisa membuat objek yang perilakunya sangat terkontrol (misal: properti yang *Hidden* tapi *Writable*). Arsitek menggunakan ini untuk melindungi integritas objek inti dalam sebuah framework.

---

## Tantangan Kecil
Dapatkah sebuah Descriptor memiliki field `[[Value]]` sekaligus `[[Get]]`?
(Jawabannya: **TIDAK**. Spesifikasi melarang pencampuran atribut Data dan Accessor dalam satu Descriptor. Jika dilakukan, mesin akan melempar `TypeError`).

---
> [!IMPORTANT]
> **Key Takeaway:** Property Descriptor adalah bahasa formal untuk mendikte bagaimana sebuah properti harus berperilaku.
