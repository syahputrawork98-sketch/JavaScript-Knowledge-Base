# CH-01: ToNumber (The Metric Conversion)

> **"Sebelum energi bisa dihitung, ia harus dikonversi ke format standar. `ToNumber` adalah 'Konversi Metrik' (The Metric Conversion) — algoritma kaku yang memaksa nilai apapun masuk ke dalam tabung ukur 64-bit IEEE 754."**

*Pemetaan ECMA-262: Clause 7.1.3 (ToNumber)*

## 1. Mental Model: "The Metric Conversion"

Bayangkan sebuah filter di Hub yang hanya menerima cairan (angka). Apapun yang masuk—kabel, stiker, atau wadah kosong—harus dilelehkan menjadi cairan angka.
- **String**: Jika teksnya terbaca angka (seperti `"42"`), ia mencair jadi `42`. Jika isinya sampah (`"ABC"`), ia menjadi lumpur tak berguna (`NaN`).
- **Undefined**: Menjadi `NaN`.
- **Null**: Menjadi `0`. (Salah satu keputusan sejarah Hub yang paling sering diperdebatkan).
- **Boolean**: `true` jadi `1`, `false` jadi `0`.

---

## 2. Aliran Transmutasi Kompleks

Jika sebuah `Object` masuk ke ruang `ToNumber`:
1.  Panggil `ToPrimitive(input, number)`.
2.  Hasil primitifnya kemudian diproses ulang dengan aturan `ToNumber` standar.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log(Number(undefined)); // NaN
console.log(Number(null));      // 0
console.log(Number("  123  ")); // 123 (Trim otomatis oleh spec)
console.log(Number("123px"));   // NaN (Berbeda dengan parseInt!)
```

---

## Arsitek Mindset: Ketegasan Tipe

Sebagai arsitek Hub:
- Gunakan `Number()` untuk konversi yang ketat. Jika ada satu karakter non-angka, Anda akan mendapatkan `NaN`, yang memudahkan deteksi kerusakan data.
- Pahami bahwa `null` menjadi `0` bisa menyebabkan bug logika jika Anda tidak hati-hati saat melakukan perhitungan inventaris Hub.

---
*Status: [status.md](../../../docs/status.md)*
