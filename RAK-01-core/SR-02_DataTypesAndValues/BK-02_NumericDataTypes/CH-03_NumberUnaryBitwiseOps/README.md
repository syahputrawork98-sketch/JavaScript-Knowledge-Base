# CH-03: Number::unaryMinus & bitwiseNOT

Bagaimana mesin JavaScript membalikkan tanda angka atau memanipulasi bit secara mandiri? Mari kita lihat dua operasi dasar di Clause 6.1.6.1.1 dan 6.1.6.1.2.

---

## 1. Number::unaryMinus ( x )
Operasi ini adalah apa yang terjadi saat Anda menulis `-x`. Spesifikasi melakukan hal berikut:
1. Jika `x` adalah `NaN`, kembalikan `NaN`.
2. Jika `x` adalah `+0`, kembalikan `-0`.
3. Jika `x` adalah `-0`, kembalikan `+0`.
4. Jika `x` adalah `+Infinity`, kembalikan `-Infinity`.
5. Jika `x` adalah `-Infinity`, kembalikan `+Infinity`.
6. Jika tidak, kembalikan nilai `x` dengan tanda yang dibalik secara matematis.

**Insight Arsitek:** Perhatikan poin 2 dan 3. Spesifikasi sangat peduli pada "Tanda Nol". Hal ini penting dalam perhitungan arah (vektor) atau limit matematika.

---

## 2. Number::bitwiseNOT ( x )
Operasi ini terjadi saat Anda menulis `~x`. Ini adalah operasi yang sering membingungkan karena ia mengubah Number (Floating Point) menjadi Integer lalu membalik bitnya.

Alurnya dalam spesifikasi:
1. Ubah `x` menjadi integer 32-bit (menggunakan algoritma internal `ToInt32`).
2. Balikkan setiap bit secara biner (0 jadi 1, 1 jadi 0).
3. Hasilnya adalah `- (x + 1)`.

**Contoh Cepat:**
- `~5` menjadi `-6`.
- `~-1` menjadi `0`. (Inilah alasan trik lama `if (~str.indexOf(..))` bekerja: ia mencari apakah hasilnya bukan `-1`).

---

## Mengapa Arsitek Harus Tahu Ini?
Operasi bitwise pada Number adalah cara tercepat untuk melakukan beberapa manipulasi data tingkat rendah. Namun, arsitek harus waspada bahwa operasi ini **selalu memotong angka ke 32-bit**. Jika Anda melakukan `~` pada angka yang lebih besar dari $2^{31} - 1$, hasilnya akan terpotong dan tidak akurat.

---

## Tantangan Kecil
Berapakah hasil dari `-(-0)`?
(Jawabannya: **+0**. Sesuai aturan poin 3 di atas, unary minus akan selalu menukar identitas antara Nol Positif dan Nol Negatif).

---
> [!NOTE]
> **Key Takeaway:** Unary Minus menjaga tanda (sign), sementara Bitwise NOT memaksa angka masuk ke dunia biner 32-bit.
