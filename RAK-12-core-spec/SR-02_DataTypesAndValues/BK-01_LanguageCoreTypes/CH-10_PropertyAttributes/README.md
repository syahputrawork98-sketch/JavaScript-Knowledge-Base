# CH-10: Property Attributes

Setiap kali Anda menulis `obj.x = 1`, Anda sebenarnya sedang menciptakan sebuah struktur data di memori yang memiliki "Gembok" dan "Alarm" rahasia. Inilah yang disebut **Property Attributes**.

## Mental Model: "Laci dengan Aturan Pakai"
Bayangkan setiap properti pada objek adalah sebuah laci.
- **Value:** Adalah isi di dalam laci.
- **Attributes:** Adalah pengaturan pada laci tersebut.
  - **Writable:** Apakah laci boleh diisi ulang?
  - **Enumerable:** Apakah laci muncul saat kita menghitung jumlah laci?
  - **Configurable:** Apakah laci boleh dibongkar atau diubah aturannya?

---

## 1. Jenis Properti di Spec
Dalam Clause 6.1.7.1, spesifikasi membagi properti menjadi dua kategori:

### A. Data Property
Memiliki nilai data konkret. Punya atribut: `[[Value]]`, `[[Writable]]`, `[[Enumerable]]`, `[[Configurable]]`.

### B. Accessor Property
Tidak punya nilai, tapi punya fungsi untuk mengelola akses. Punya atribut: `[[Get]]`, `[[Set]]`, `[[Enumerable]]`, `[[Configurable]]`.

## 2. Default Attributes
Saat Anda membuat properti secara langsung (`obj.x = 1`), spesifikasi secara default menetapkan semua atribut menjadi **true**. Namun, jika Anda menggunakan `Object.defineProperty`, default-nya adalah **false**. Inilah mengapa arsitek sering menggunakan `defineProperty` untuk membuat properti "Read-only" yang sangat aman.

## 3. Efek [[Configurable]] = false
Ini adalah atribut paling "Berbahaya". Jika Anda menetapkan `configurable: false`, maka:
- Properti tidak bisa dihapus dengan `delete`.
- Tipe properti (Data <-> Accessor) tidak bisa diubah.
- Atribut lain tidak bisa diubah (kecuali `writable` dari true ke false).

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami atribut memungkinkan Anda membangun **Immutable Context**. Anda bisa membuat objek konfigurasi yang dijamin tidak akan pernah berubah atau dirusak oleh tim lain di dalam aplikasi besar.

---

## Tantangan Kecil
Jika `writable: false` tapi `configurable: true`, apakah nilainya masih bisa diubah?
(Jawabannya: **YA, secara teknis**. Walaupun Anda tidak bisa `obj.x = 2` secara langsung, Anda bisa memanggil `Object.defineProperty` lagi untuk mengubah `writable` menjadi `true`, lalu mengubah nilainya, lalu mengembalikannya lagi. Inilah mengapa `configurable: false` adalah gembok yang sesungguhnya).

---
> [!IMPORTANT]
> **Key Takeaway:** Properti bukan sekadar nilai, tapi sekumpulan aturan yang mendefinisikan kedaulatan nilai tersebut terhadap perubahan.
