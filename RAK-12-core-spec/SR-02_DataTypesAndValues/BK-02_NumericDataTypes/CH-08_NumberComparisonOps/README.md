# CH-08: Number Comparison Operations

Kapan sebuah angka dianggap "Lebih Kecil" dari angka lain di mata spesifikasi? Mari kita bedah algoritma `Number::lessThan ( x, y )` di Clause 6.1.6.1.12.

---

## 1. Aturan Emas Perbandingan
Algoritma ini menghasilkan `true`, `false`, atau `undefined` (jika tidak bisa dibandingkan).

- **NaN Rule:** Jika salah satu operan (`x` atau `y`) adalah `NaN`, hasilnya adalah **undefined**. Inilah mengapa `NaN < 5` adalah `false` dan `NaN > 5` juga `false`.
- **Identical Numbers:** Jika `x` dan `y` memiliki nilai yang sama, hasilnya `false`.
- **Infinity Rules:**
  - `-Infinity` dianggap lebih kecil dari angka apapun (kecuali dirinya sendiri).
  - `+Infinity` dianggap lebih besar dari angka apapun (kecuali dirinya sendiri).
- **The Zero Paradox:** Meskipun secara internal berbeda, spesifikasi menetapkan bahwa `+0` **TIDAK** lebih kecil dari `-0` dan sebaliknya. `+0 < -0` adalah `false`.

---

## 2. Cara Kerja Internal
Mesin melakukan perbandingan matematika pada nilai riil yang diwakili oleh bit-bit tersebut. Jika `x` secara matematika berada di kiri `y` pada garis bilangan, maka hasilnya `true`.

---

## Mengapa Arsitek Harus Tahu Ini?
Aturan `NaN` yang menghasilkan `undefined` adalah jebakan klasik dalam logika pengurutan (*Sorting*). Jika array Anda mengandung `NaN`, algoritma sorting standar mungkin akan memberikan hasil yang tidak terduga karena perbandingannya "rusak". Selalu bersihkan nilai `NaN` sebelum melakukan operasi perbandingan massal.

---

## Tantangan Kecil
Berapakah hasil dari `-Infinity < +Infinity`?
(Jawabannya: **true**. Ini adalah perbandingan paling ekstrem yang bisa dilakukan tipe Number).

---
> [!IMPORTANT]
> **Key Takeaway:** `NaN` merusak perbandingan. Nol positif dan negatif dianggap setara dalam perbandingan `<`, tapi tidak pada algoritma lain.
