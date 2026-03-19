# CH-08: Well-Known Symbols

Di CH-07 kita belajar bahwa Symbol adalah identitas unik. Namun, spesifikasi memiliki sekumpulan Symbol khusus yang sudah "dikenal baik" oleh mesin JavaScript untuk mengatur perilaku bahasa. Inilah **Well-Known Symbols**.

## Mental Model: "Tombol Pengaturan Mesin"
Bayangkan JavaScript adalah sebuah mobil. Anda bisa menambah stiker (properti string) sesuka hati. Namun, ada beberapa tombol panel (Well-Known Symbols) yang jika Anda tekan atau ubah, akan mengubah cara mesin bekerja (misal: cara mobil mengerem atau cara lampu menyala).

---

## 1. Notasi Spesifikasi: `@@name`
Dalam spesifikasi ECMA-262, Well-Known Symbols ditandai dengan awalan kurung siku ganda dan simbol `@`, misalnya `@@iterator`. Di dalam kode JavaScript, kita mengaksesnya melalui `Symbol.iterator`.

## 2. Contoh Utama Well-Known Symbols
Spesifikasi mendefinisikan banyak Symbol di Clause 6.1.5.1. Berikut adalah yang paling krusial bagi arsitek:

- **@@iterator (`Symbol.iterator`):** Digunakan untuk membuat objek bisa di-iterasi (dengan `for...of`).
- **@@toStringTag (`Symbol.toStringTag`):** Digunakan untuk mengubah teks yang muncul saat Anda memanggil `Object.prototype.toString.call(obj)`.
- **@@hasInstance (`Symbol.hasInstance`):** Digunakan untuk mengatur bagaimana operator `instanceof` bekerja pada objek Anda.
- **@@isConcatSpreadable (`Symbol.isConcatSpreadable`):** Mengatur apakah sebuah objek harus "diratakan" saat dipanggil oleh `.concat()`.

## 3. Mengapa Menggunakan Symbol?
TC39 menggunakan Symbol untuk fitur-fitur baru ini agar tidak merusak kode lama (*Backward Compatibility*). Jika mereka menggunakan nama string (seperti `"iterator"`), kemungkinan besar akan bentrok dengan properti yang sudah dibuat oleh pengembang di seluruh dunia.

---

## Mengapa Arsitek Harus Tahu Ini?
Dengan menguasai Well-Known Symbols, Anda bisa melakukan **Meta-Programming**. Anda bisa menciptakan "Smart Objects" yang berperilaku seperti array, atau objek yang memiliki identitas kustom saat diubah menjadi string. Ini adalah tingkat tertinggi dari kustomisasi perilaku objek.

---

## Tantangan Kecil
Apa yang terjadi jika Anda mengisi properti `Symbol.iterator` dengan angka `42`?
(Jawabannya: Kode Anda akan valid secara sintaksis, namun saat Anda mencoba melakukan `for...of` pada objek tersebut, mesin akan melempar `TypeError: obj is not iterable`, karena spesifikasi mengharapkan properti tersebut berisi sebuah **Fungsi**).

---
> [!IMPORTANT]
> **Key Takeaway:** Well-Known Symbols adalah "Kabel Internal" yang menghubungkan kode Anda langsung ke logika terdalam mesin JavaScript.
