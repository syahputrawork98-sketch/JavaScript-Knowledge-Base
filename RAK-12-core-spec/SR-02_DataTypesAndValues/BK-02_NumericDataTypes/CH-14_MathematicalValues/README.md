# CH-14: Mathematical Values

Selamat! Anda telah sampai di bab terakhir dari **Buku 02**. Setelah membedah Number dan BigInt, ada satu konsep "Sakti" yang digunakan oleh spesifikasi untuk menghubungkan keduanya: **Mathematical Values (MV)**.

## Mental Model: "Dunia Ide vs Dunia Nyata"
- **Mathematical Values:** Adalah angka-angka sempurna di "Dunia Ide" Plato. Mereka tidak punya batas, tidak punya presisi yang hilang, dan tidak butuh memori komputer.
- **Language Values (Number/BigInt):** Adalah angka-angka di "Dunia Nyata" komputer yang memiliki batasan bit dan format.

---

## 1. Apa itu Mathematical Values?
Dalam setiap algoritma spesifikasi, saat mesin melakukan perhitungan, ia seringkali keluar sejenak dari batasan hardware dan masuk ke dunia **Mathematical Values**.
> *"Let n be the mathematical value of x..."*

MV digunakan untuk melakukan perhitungan yang sangat teliti sebelum hasilnya "dipaksa" kembali masuk ke dalam format `Number` (IEEE 754) atau `BigInt`.

## 2. Peran MV dalam Konversi
Saat Anda mengubah String menjadi Number (`Number("123.45")`), alur spesifikasinya adalah:
1. Ambil teks "123.45".
2. Ubah menjadi **Mathematical Value** 123.45 (nilai ideal).
3. Cari nilai **IEEE 754 64-bit** yang paling mendekati 123.45 tersebut.
4. Kembalikan hasilnya sebagai tipe `Number`.

## 3. Kenapa Harus Ada MV?
Tanpa konsep MV, spesifikasi akan sangat sulit menjelaskan operasi lintas tipe atau operasi presisi tinggi. MV adalah "Jembatan Netral" yang memungkinkan spesifikasi tetap akurat secara matematis sebelum harus berurusan dengan limitasi komputer.

---

## Penutup Buku 02: Numeric Data Types
Dengan selesainya bab ini, Anda telah menguasai:
1. Perbedaan filosofis Number vs BigInt.
2. Kekuatan dan kelemahan IEEE 754.
3. Rahasia algoritma aritmatika internal.
4. Perbedaan antara nilai matematika murni (MV) dan nilai komputer.

Anda kini siap untuk melangkah ke **Buku 03: Specification Data Types** untuk membedah bagaimana spesifikasi menggunakan tipe data internal (seperti Completion Records) untuk mengontrol aliran program Anda.

---
*Status: Completed (Versi v3.02.02.14)*
