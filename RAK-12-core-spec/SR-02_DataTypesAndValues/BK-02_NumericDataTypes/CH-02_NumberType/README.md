# CH-02: The Number Type (The Variable Load)

> **"Sebagian besar energi di Hub diukur dalam format `Number`. Ini adalah 'Beban Variabel' (The Variable Load) — sistem pengukuran fluida yang sangat cepat namun memiliki batas presisi saat menangani angka-angka yang sangat besar atau sangat kecil secara bersamaan."**

*Pemetaan ECMA-262: Clause 6.1.6.1 (The Number Type)*

## 1. Mental Model: "The Variable Load"

Bayangkan sebuah gelas ukur digital di Hub.
- Gelas ini sangat canggih dan bisa mengukur tetesan air kecil hingga volume galon.
- Namun, gelas ini punya keterbatasan fisik: total hanya ada **64 bit** informasi.
- Jika Anda memasukkan terlalu banyak detail di satu sisi (angka desimal yang panjang), gelas ini akan kehilangan detail di sisi lain (angka bulat besar).

---

## 2. Struktur Spec: IEEE 754 Double Precision

Spesifikasi ECMA-262 menggunakan format *64-bit binary floating point*.
- **1 bit**: Sign (Positif/Negatif).
- **11 bit**: Exponent (Skala/Besar angka).
- **52 bit**: Fraction/Mantissa (Detail angka).

![IEEE 754](./assets/ieee754_floating_point.svg)

---

## 3. Nilai Spesial (The Edge Cases)

Hub memiliki 3 sinyal angka khusus yang harus dipahami setiap teknisi:
- **`NaN` (Not-a-Number)**: Sinyal "Error Komputasi" (misal: membagi teks dengan angka).
- **`+Infinity` & `-Infinity`**: Beban yang melampaui kapasitas ukur Hub (Overflow).
- **`-0`**: Sinyal nol yang datang dari arah negatif (Sangat teknis, tapi ada di spec!).

---

## Arsitek Mindset: Batas Presisi

Sebagai arsitek Hub:
- Ingat "The 0.1 + 0.2 Challenge". Di dalam Grid, `0.1 + 0.2` tidak tepat `0.3` karena keterbatasan representasi biner.
- Gunakan `Number.EPSILON` untuk membandingkan angka desimal yang sangat kecil.
- Untuk transaksi keuangan Hub yang butuh presisi mutlak tanpa kompromi desimal, gunakan **Integer** (simpan dalam Sen bukan Rupiah) atau gunakan **BigInt**.

---
*Status: [status.md](../../../docs/status.md)*
