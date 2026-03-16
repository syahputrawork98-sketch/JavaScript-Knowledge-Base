# CH-04: Number::exponentiate & multiply

Dua operasi ini adalah tulang punggung perhitungan skala. Mari kita bedah bagaimana Clause 6.1.6.1.3 dan 6.1.6.1.4 menangani kompleksitas perkalian floating point.

---

## 1. Number::exponentiate ( base, exponent )
Operasi ini terjadi saat Anda menulis `base ** exponent` atau `Math.pow()`.
Spesifikasi memiliki aturan unik:
1. Jika `exponent` adalah `NaN`, hasilnya `NaN`.
2. Jika `exponent` adalah `+0` atau `-0`, hasilnya **selalu 1** (bahkan jika base-nya `NaN`). *Ini adalah aturan standar IEEE 754.*
3. Jika `base` adalah `NaN` dan `exponent` bukan nol, hasilnya `NaN`.

**Insight Arsitek:** Aturan "Apapun pangkat 0 adalah 1" tetap berlaku di JS meskipun kita berurusan dengan nilai yang bukan angka (`NaN ** 0 === 1`).

---

## 2. Number::multiply ( x, y )
Operasi ini terjadi saat Anda menulis `x * y`. Mesin menjalankan algoritma perkalian IEEE 754:
- **Tanda Hasil:** Jika tanda operan sama, hasil positif. Jika berbeda, hasil negatif.
- **Infinity Rules:**
  - `Infinity * 0` menghasilkan `NaN`.
  - `Infinity * Infinity` menghasilkan `Infinity`.
- **Zero Rules:**
  - `0 * 0` mengikuti aturan tanda (bisa menghasilkan `-0` jika salah satu nol-nya negatif).

**Fakta Menarik:** Perkalian floating point bisa menghasilkan *Overflow* (menjadi Infinity) atau *Underflow* (menjadi 0 yang sangat kecil) jika angkanya terlalu ekstrem.

---

## Mengapa Arsitek Harus Tahu Ini?
Eksponensial bisa tumbuh sangat cepat. Sebagai arsitek, Anda harus memvalidasi input sebelum melakukan operasi `**` untuk mencegah sistem Anda menghasilkan nilai `Infinity` yang bisa merusak perhitungan logika atau penyimpanan database yang tidak mendukung format Infinity.

---

## Tantangan Kecil
Berapakah hasil dari `NaN ** 0`?
(Jawabannya: **1**. Walaupun terlihat aneh, inilah standar IEEE 754 yang diadopsi ECMAScript. Pangkat 0 dianggap lebih "kuat" daripada status "Bukan Angka").

---
> [!IMPORTANT]
> **Key Takeaway:** Perkalian dan eksponensial di JS mengikuti aturan ketat IEEE 754 yang terkadang mengabaikan logika matematika biasa demi konsistensi sistem komputer.
