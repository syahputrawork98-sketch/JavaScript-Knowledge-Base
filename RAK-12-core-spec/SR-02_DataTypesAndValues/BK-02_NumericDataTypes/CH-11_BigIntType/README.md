# CH-11: The BigInt Type (The Heavy Industrial Load)

> **"Saat Hub harus menangani beban energi raksasa yang melampaui batas aman Number, kita membutuhkan `BigInt`. Ini adalah 'Beban Industri Berat' (The Heavy Industrial Load) — raksasa yang mampu menampung angka bulat berapapun besarnya tanpa pernah kehilangan satu bit pun presisi."**

*Pemetaan ECMA-262: Clause 6.1.6.2 (The BigInt Type)*

## 1. Mental Model: "The Heavy Industrial Load"

Jika `Number` adalah gelas ukur standar, maka `BigInt` adalah **Tangki Raksasa** yang bisa diperluas secara dinamis.
- Tidak ada batasan 64-bit yang kaku untuk bagian integer.
- Selama memori Hub tersedia, `BigInt` bisa menampung angka triliunan milaran tanpa pembulatan.

---

## 2. Aturan Operasional Hub

- **Suffix `n`**: Ditandai dengan karakter `n` di akhir angka (misal: `100n`).
- **No Floating Point**: `BigInt` hanya untuk angka bulat (*Integer*). Tidak ada `1.5n`.
- **Isolasi Jalur**: Anda tidak bisa mencampur `Number` dan `BigInt` dalam satu perhitungan operasi matematika secara langsung (`5 + 10n` akan menyebabkan `TypeError`). Anda harus mengonversi salah satunya secara eksplisit.

---

## 3. Praktik Lapangan (Lab)

```javascript
const maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991
console.log(maxSafe + 1 === maxSafe + 2); // true (KAPASITAS NUMBER JEBOL!)

const bigLoad = 9007199254740991n;
console.log(bigLoad + 1n === bigLoad + 2n); // false (BIGINT TETAP AKURAT)
```

---

## Arsitek Mindset: Kapan Menggunakan BigInt

Sebagai arsitek Hub:
- Gunakan `BigInt` untuk ID database yang sangat besar, timestamp presisi nanodetik, atau perhitungan kriptografi Hub.
- Hindari `BigInt` untuk perhitungan grafik atau fisika yang butuh desimal (gunakan `Number`).
- Sadarilah bahwa `BigInt` lebih lambat diproses oleh Hub dibandingkan `Number` karena ukurannya yang dinamis.

---
*Status: [status.md](../../../docs/status.md)*
