# CH-06: Number::add & subtract

Penjumlahan dan pengurangan adalah operasi paling dasar, tapi dalam standar IEEE 754, mereka memiliki aturan "politik" yang sangat ketat untuk menangani nilai ekstrem. Mari kita bedah Clause 6.1.6.1.7 dan 6.1.6.1.8.

---

## 1. Number::add ( x, y )
Operasi `x + y` memiliki algoritma yang menangani berbagai kombinasi nilai:

- **Infinity Rules:**
  - `Infinity + Infinity = Infinity`.
  - `-Infinity + -Infinity = -Infinity`.
  - `Infinity + -Infinity = NaN`. (Anda tidak bisa menjumlahkan dua tak-hingga yang berlawanan arah).
- **Zero Rules:**
  - `+0 + +0 = +0`.
  - `-0 + -0 = -0`.
  - `+0 + -0 = +0`. (Nol positif lebih dominan dalam penjumlahan standar).
- **Precision Issue:** Inilah tempat di mana `0.1 + 0.2` dieksekusi. Karena representasi biner tidak bisa tepat menangani desimal tersebut, hasilnya adalah nilai terdekat yang bisa direpresentasikan, yaitu `0.30000000000000004`.

---

## 2. Number::subtract ( x, y )
Operasi `x - y` sebenarnya didefinisikan secara internal sebagai **penjumlahan dengan nilai negatif**:
`Number::add(x, Number::unaryMinus(y))`

Jadi, semua aturan pada `add` otomatis berlaku di sini setelah tanda `y` dibalik.

---

## Mengapa Arsitek Harus Tahu Ini?
Bug *Floating Point* paling sering muncul di operasi penjumlahan bertingkat. Sebagai arsitek, jika Anda membangun sistem yang menjumlahkan banyak angka desimal kecil (seperti akumulasi bunga bank), kesalahan presisi akan menumpuk (*accumulated error*). Gunakan pustaka *Big Decimal* atau simpan nilai dalam satuan terkecil (Integer) untuk menjaga akurasi.

---

## Tantangan Kecil
Berapakah hasil dari `Infinity - Infinity`?
(Jawabannya: **NaN**. Sesuai aturan `add` di atas, `Infinity - Infinity` diterjemahkan menjadi `Infinity + (-Infinity)`, yang hasilnya tidak terdefinisi atau `NaN`).

---
> [!IMPORTANT]
> **Key Takeaway:** Penjumlahan floating point bukan sekadar matematika, tapi proses estimasi biner. Waspadai hasil `NaN` saat berurusan dengan tak-hingga.
