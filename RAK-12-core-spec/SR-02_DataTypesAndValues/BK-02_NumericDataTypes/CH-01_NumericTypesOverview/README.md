# CH-01: Numeric Types Overview (The Load Distribution)

> **"Di dalam Grid, energi diukur dalam dua skala utama. `Number` untuk arus variabel yang cepat, dan `BigInt` untuk beban industri yang sangat berat. Memahami 'Distribusi Beban' (The Load Distribution) ini adalah kunci untuk menjaga stabilitas Hub."**

*Pemetaan ECMA-262: Clause 6.1.6 (Numeric Types Overview)*

## 1. Mental Model: "The Load Distribution"

Bayangkan Hub memiliki dua jenis kabel:
- **Kabel Tembaga (Number)**: Sangat cepat, fleksibel, bisa menangani desimal, tapi akan meleleh (kehilangan presisi) jika beban terlalu berat.
- **Kabel Baja (BigInt)**: Sangat kuat, tidak pernah meleset satu bit pun, tapi kaku (tidak bisa desimal) dan sedikit lebih lambat dipasang.

---

## 2. Kenapa Ada Dua?

Secara historis, JavaScript hanya memiliki `Number`. Namun seiring berkembangnya Grid menjadi ekosistem raksasa, Hub menghadapi masalah:
- **Presisi**: Angka di atas $2^{53}-1$ mulai tidak akurat.
- **Kebutuhan Baru**: ID database 64-bit dan kriptografi membutuhkan angka bulat yang benar-benar tepat.

Oleh karena itu, `BigInt` ditambahkan sebagai jalur "Tugas Berat" yang teruji.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Membandingkan dua skala
const lightLoad = 42;    // Number
const heavyLoad = 42n;   // BigInt

console.log(typeof lightLoad); // "number"
console.log(typeof heavyLoad); // "bigint"

// Peringatan: Jalur tidak boleh dicampur tanpa konversi!
// console.log(lightLoad + heavyLoad); // TypeError
```

---

## Arsitek Mindset: Memilih Jalur

Sebagai arsitek Hub:
- Gunakan `Number` untuk 99% kasus: koordinat UI, perhitungan harga (jika dibulatkan ke sen), dan logika loop.
- Gunakan `BigInt` hanya saat Anda menyentuh angka yang berisiko melampaui `16 digit`.
- Selalu beri label `n` pada BigInt agar teknisi lain tidak bingung dengan tipe data yang masuk ke mesin mereka.

---
*Status: [status.md](../../../docs/status.md)*
