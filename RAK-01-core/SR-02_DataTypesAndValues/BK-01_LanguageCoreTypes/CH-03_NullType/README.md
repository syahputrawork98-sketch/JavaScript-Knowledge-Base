# CH-03: Null Type

Jika *Undefined* adalah ketidaksengajaan atau status "Belum Siap", maka **Null** adalah pernyataan niat yang eksplisit.

## Mental Model: "Kotak Kosong yang Disengaja"
Bayangkan sebuah kotak hadiah.
- **Undefined:** Anda bahkan tidak tahu apakah ada kotak atau tidak.
- **Null:** Anda melihat ada kotak, Anda membukanya, dan isinya kosong karena memang dikosongkan secara sengaja oleh si pemberi.

---

## 1. Definisi Formal: Null
Menurut Clause 6.1.2: *"The Null type has exactly one value, called **null**. The Null type represents the intentional absence of any object value."*

Kata kuncinya adalah **Intentional Absence**. Anda menggunakan `null` untuk memberi tahu program: *"Saya tahu ada tempat untuk data di sini, tapi saat ini saya sengaja mengosongkannya."*

## 2. Null vs Object (The Legacy Bug)
Inilah sumber kebingungan ribuan pengembang: `typeof null` menghasilkan `"object"`.
- **Fakta Spec:** `null` bukan Object. Dia adalah primitif.
- **Sejarah:** Ini adalah bug pada implementasi awal JavaScript tahun 1995 dan tidak diperbaiki hingga sekarang demi menjaga kompatibilitas aplikasi lama.

## 3. Penggunaan Terbaik
Arsitek menggunakan `null` biasanya untuk:
1. Me-reset nilai variabel yang tadinya berisi Object.
2. Inisialisasi awal variabel yang *akan* berisi Object nanti.
3. Sebagai penanda akhir dari sebuah *link* (misal: akhir dari *Prototype Chain* adalah `null`).

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami perbedaan filosofis antara `null` dan `undefined` akan membuat API Anda lebih ekspresif. Pengguna API Anda akan tahu apakah sebuah data "Hilang karena error/lupa" (`undefined`) atau "Memang tidak ada/dikosongkan" (`null`).

---

## Tantangan Kecil
Jika `Object.getPrototypeOf(Object.prototype)` dipanggil, apa hasilnya?
(Jawabannya: **null**. Mengapa? Karena `Object.prototype` adalah puncak dari rantai warisan. Di atasnya sudah tidak ada siapa-siapa lagi, maka spesifikasi menggunakan `null` sebagai penanda akhir).

---
> [!IMPORTANT]
> **Key Takeaway:** `undefined` = "Saya tidak tahu". `null` = "Saya tahu, dan isinya kosong".
