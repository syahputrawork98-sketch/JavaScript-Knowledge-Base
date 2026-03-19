# CH-06: Add & Subtract (The Load Combiner)

> **"Di dalam Grid, menggabungkan dua aliran energi atau mengurangi beban adalah operasi yang paling sering dilakukan. `add` (+) dan `subtract` (-) adalah 'Pencampur Beban' (The Load Combiner) — mesin presisi yang harus menangani anomali sinyal seperti Infinity dan NaN agar Hub tidak meledak."**

*Pemetaan ECMA-262: Clause 6.1.6.1.7 & 6.1.6.1.8*

## 1. Mental Model: "The Load Combiner"

- **`add` (+)**: Menghubungkan dua sumber daya untuk mendapatkan total output.
- **`subtract` (-)**: Mengambil beban dari aliran energi utama.
- **Precision Trap**: Ingat bahwa hasil penjumlahan di Hub mengikuti aturan IEEE 754. Menambahkan angka yang sangat besar ke angka yang sangat kecil bisa mengakibatkan angka kecil tersebut "tertelan" (kehilangan presisi).

---

## 2. Aturan Pencampuran (Spec Logic)

1.  **Any + NaN**: Hasilnya `NaN`.
2.  **(+Infinity) + (-Infinity)**: Hasilnya `NaN`. (Dua gaya yang berlawanan pada skala tak hingga saling membatalkan secara destruktif).
3.  **(+0) + (-0)**: Hasilnya `+0`. (Positif Nol adalah default kecuali pada pembulatan khusus).

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Pencampur Beban ---");

// 1. Infinity Cases
console.log(`Infinity + 5 = ${Infinity + 5}`);
console.log(`Infinity - Infinity = ${Infinity - Infinity}`); // NaN

// 2. Zero Sign
console.log(`(+0) + (-0) = ${(+0) + (-0)}`); // 0

// 3. Precision Loss (The Large & The Small)
const huge = 2**53;
console.log(`Huge + 1: ${huge + 1}`); // Tetap huge (Loss of 1 bit)
```

---

## Arsitek Mindset: Batas Akurasi

Sebagai arsitek Hub:
- Gunakan `Number.isSafeInteger()` untuk memastikan beban yang Anda hitung masih berada di dalam batas akurasi "Kabel Tembaga" (Number).
- Jika Anda mulai melakukan pengurangan yang menghasilkan angka hampir nol, waspadalah terhadap hasil yang tidak terduga karena pembulatan biner di level spesifikasi.

---
*Status: [status.md](../../../docs/status.md)*
