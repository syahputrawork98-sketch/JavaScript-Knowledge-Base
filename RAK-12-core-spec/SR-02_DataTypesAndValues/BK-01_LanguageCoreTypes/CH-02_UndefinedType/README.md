# CH-02: The Undefined Type (The Dead Line)

> **"Di dalam Grid, `undefined` adalah 'Kabel Mati' (The Dead Line). Ini adalah sinyal yang menunjukkan bahwa sebuah jalur distribusi telah dialokasikan, namun belum ada daya yang mengalir di dalamnya."**

*Pemetaan ECMA-262: Clause 6.1.1 (The Undefined Type)*

## 1. Mental Model: "The Dead Line"

Bayangkan Anda baru saja memasang kabel baru ke sebuah gedung di Hub. Kabel itu ada, terdaftar di denah (memori), tapi saat Anda tes dengan voltmeter, jarumnya tidak bergerak. Itulah `undefined`.
- **Bukan** berarti kabelnya hilang (itu adalah `ReferenceError`).
- **Berarti** kabelnya terpasang tapi *voltasenya nol* karena belum diisi daya.

---

## 2. Karakteristik Spec

- Hanya memiliki satu nilai: `undefined`.
- Digunakan sebagai nilai default untuk variabel yang di-`declare` tanpa `initialization`.
- Digunakan sebagai nilai kembalian default dari fungsi yang tidak memiliki statement `return`.

---

## 3. Praktik Lapangan (Lab)

```javascript
let powerLine; // Dideklarasikan tapi tidak diisi
console.log(powerLine); // undefined (The Dead Line)

function checkGrid() {
  // Tidak ada return
}
console.log(checkGrid()); // undefined
```

---

## Arsitek Mindset: Mendeteksi Inisialisasi

Sebagai arsitek Hub:
- Gunakan pemeriksaan `=== undefined` jika Anda ingin tahu apakah sebuah parameter dikirim atau tidak saat memanggil fungsi.
- Hindari memberikan nilai `undefined` secara manual kepada variabel (`power = undefined`); ini akan membingungkan teknisi lain. Jika Anda ingin mengosongkan daya secara sengaja, gunakan `null`.

---
*Status: [status.md](../../../docs/status.md)*
