# CH-07: Bitwise Shift (The Bit Shunter)

> **"Sinyal biner terkadang perlu digeser posisinya untuk mempercepat transmisi atau pembagian data secara cepat. `leftShift`, `signedRightShift`, dan `unsignedRightShift` adalah 'Bit Shunter' (The Bit Shunter) — mesin yang memindahkan bit-bit data ke kiri atau ke kanan di dalam register Hub."**

*Pemetaan ECMA-262: Clause 6.1.6.1.9 s/d 6.1.6.1.11*

## 1. Mental Model: "The Bit Shunter"

Bayangkan sederet gerbong kereta (bit):
- **Left Shift (<<)**: Menggeser gerbong ke kiri dan memasukkan gerbong kosong (0) di belakang. Ini adalah cara tercepat untuk mengalikan tenaga dengan $2^n$.
- **Signed Right Shift (>>)**: Menggeser ke kanan sambil tetap menjaga warna gerbong pertama (tanda negatif/positif).
- **Unsigned Right Shift (>>>)**: Menggeser ke kanan dan selalu memasukkan gerbong kosong (0), mengabaikan tanda aslinya.

---

## 2. Aturan Jalur 32-Bit

Semua operasi shunting ini memaksa Number masuk ke register **32-bit**.
- **Left Shift**: `5 << 1` -> `10`.
- **Unsigned Shift**: Sangat berguna untuk memastikan sebuah sinyal selalu dianggap sebagai angka positif di Hub.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Bit Shunter ---");

// 1. Multiply by power of 2
console.log(`5 << 2 = ${5 << 2}`); // 5 * 2^2 = 20

// 2. Sign Awareness
console.log(`-128 >> 1 = ${-128 >> 1}`);   // -64
console.log(`-128 >>> 1 = ${-128 >>> 1}`); // 2147483584 (Huge positive!)
```

---

## Arsitek Mindset: Kecepatan vs Tanda

Sebagai arsitek Hub:
- Gunakan `>>` jika Anda butuh pembagian cepat dengan angka positif/negatif yang tetap mempertahankan tandanya.
- Gunakan `>>>` hanya saat Anda berurusan dengan data biner murni (seperti warna pixel atau hash) di mana Anda tidak peduli dengan tanda negatif.
- Ingat: Shifting lebih dari 31 bit akan menghasilkan perilaku berputar (modulo 32) di Hub.

---
*Status: [status.md](../../../docs/status.md)*
