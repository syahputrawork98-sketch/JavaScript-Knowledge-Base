# CH-04: The Boolean Type (The Power Switch)

> **"Dunia Grid dibangun di atas binari. `Boolean` adalah 'Sakelar Daya' (The Power Switch) yang menentukan apakah energi mengalir (`true`) atau terhenti (`false`). Tanpa sakelar ini, tidak ada logika pencabangan di Hub."**

*Pemetaan ECMA-262: Clause 6.1.3 (The Boolean Type)*

## 1. Mental Model: "The Power Switch"

Logika Hub hanya mengenal dua posisi:
- **`true`**: Kontak terhubung, lampu indikator menyala, data mengalir melalui gerbang logika.
- **`false`**: Kontak terputus, lampu indikator mati, aliran data dialihkan ke jalur alternatif (*else*).

---

## 2. ToBoolean (Kebenaran Tersembunyi)

Banyak data lain (String, Number, dll) bisa diubah menjadi sinyal sakelar melalui operasi internal `ToBoolean`.
- **Falsy (Sakelar Mati)**: `undefined`, `null`, `false`, `+0`, `-0`, `NaN`, `""` (String kosong).
- **Truthy (Sakelar Nyala)**: Segala sesuatu yang lain, termasuk `{}` dan `[]`.

---

## 3. Praktik Lapangan (Lab)

```javascript
const gridIsActive = true;

if (gridIsActive) {
  console.log("Distribusi Energi Berjalan.");
} else {
  console.log("Hub Shutdown.");
}
```

---

## Arsitek Mindset: Logika yang Bersih

Sebagai arsitek Hub:
- Hindari membandingkan boolean secara eksplisit (`if (x === true)`). Cukup gunakan `if (x)`.
- Gunakan operator `!!` (double negasi) untuk memaksa nilai apapun menjadi sinyal sakelar murni (`true` atau `false`).
- Berhati-hatilah dengan `0` dan `""`; meskipun ada isinya secara fisik, di mata sakelar Boolean, keduanya dianggap sebagai "Sinyal Mati".

---
*Status: [status.md](../../../docs/status.md)*
