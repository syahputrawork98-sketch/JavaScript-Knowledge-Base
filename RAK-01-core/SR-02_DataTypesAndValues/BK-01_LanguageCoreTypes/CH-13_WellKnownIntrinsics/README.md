# CH-13: Well-Known Intrinsics

Kita sampai pada bab terakhir dari **Buku 01**. Setelah memahami tipe data dan aturan objek, pertanyaannya adalah: "Dari mana objek-objek awal (seperti `Array.prototype` atau `Object.prototype`) berasal?" Jawabannya: **Well-Known Intrinsics** (Clause 6.1.7.4).

## Mental Model: "Partikel Tuhan"
Bayangkan dunia JavaScript baru saja diciptakan (Environment Inisialisasi). Sebelum satu baris kode Anda pun berjalan, mesin sudah menciptakan "Partikel-partikel Dasar" yang melayang di ruang hampa udara. Partikel-partikel inilah yang nanti akan Anda gunakan untuk membangun segalanya.

---

## 1. Apa itu Intrinsics?
**Intrinsics** adalah sekumpulan objek fundamental yang harus ada di setiap *Realm* (lingkungan eksekusi) agar spesifikasi bisa bekerja. Tanpa intrinsics, Anda tidak bisa membuat array, objek, atau fungsi.

## 2. Notasi Spesifikasi: `%name%`
Dalam teks spesifikasi, intrinsics ditandai dengan tanda persen ganda, misalnya:
- **`%Object.prototype%`**: Objek prototipe dasar.
- **`%Array.prototype%`**: Tempat bersemayamnya metode seperti `.map()` dan `.filter()`.
- **`%ThrowTypeError%`**: Objek fungsi khusus yang selalu melempar TypeError (digunakan untuk properti terlarang di Strict Mode).

## 3. Intrinsics vs Global Objects
Banyak orang sulit membedakan keduanya:
- **Intrinsics:** Adalah referensi absolut di dalam spesifikasi (misal: "Gunakan objek `%Array.prototype%`").
- **Global Objects:** Adalah properti pada objek global yang bisa Anda lihat (misal: `window.Array`).
> *Waspada:* Anda bisa menghapus `window.Array`, tapi mesin JS tetap punya akses ke `%Array.prototype%` secara internal untuk menjalankan algoritma internalnya sendiri. Itulah kekuatan Intrinsics.

---

## Penutup Buku 01: Language Core Types
Selamat! Anda telah menyelesaikan bedah tuntas Clause 6.1 (Tipe Data Bahasa). Anda kini memahami:
1. 8 Bahan dasar bahasa.
2. Rahasia biner di balik String.
3. Kedaulatan identitas Symbol.
4. Anatomi internal Objek yang tak terlihat.

Anda bukan lagi sekadar "Pengguna JS", Anda adalah seorang **Spec-Architect** yang tahu persis apa yang terjadi di balik setiap deklarasi variabel Anda.

---

## Langkah Selanjutnya
Kita akan melangkah ke **Buku 02: Numeric Data Types** untuk menghadapi tantangan paling teknis: Matematika Spesifikasi (IEEE 754 dan BigInt).

---
> [!IMPORTANT]
> **Key Takeaway:** Intrinsics adalah jangkar realitas JavaScript. Mereka ada di sana sebelum Anda, dan akan tetap di sana meskipun Anda mencoba menghapusnya dari level Global.
