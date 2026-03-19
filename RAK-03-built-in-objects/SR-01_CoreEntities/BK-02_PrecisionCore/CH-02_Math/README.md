# CH-02: Math (The Calculation Module)

> **"Jika Hub Energi adalah struktur fisiknya, maka `Math` adalah kalkulator saku canggih yang selalu siap membantu Anda menghitung efisiensi, jarak, dan probabilitas arus energi."**

Berbeda dengan `Number` atau `String`, `Math` bukanlah sebuah constructor (Anda tidak bisa memanggil `new Math()`). Ia adalah objek statis yang berisi konstanta dan fungsi matematika.

## 1. Mental Model: "The Calculation Module"

Bayangkan `Math` sebagai sebuah modul tambahan yang terpasang di panel kontrol Hub Anda. Modul ini tidak menyimpan data, ia hanya menerima input, melakukan perhitungan cepat, dan memberikan output.

---

## 2. Konstanta Alam (Fixed Constants)

Beberapa nilai di alam semesta Hub Energi bersifat tetap:
- **`Math.PI`**: Rasio lingkaran (~3.14159).
- **`Math.E`**: Dasar logaritma natural (~2.718).

---

## 3. Fungsi Operasional Utama

### A. Pembulatan (Rounding)
- **`Math.floor(x)`**: Membulatkan ke bawah (lantai).
- **`Math.ceil(x)`**: Membulatkan ke atas (langit-langit).
- **`Math.round(x)`**: Membulatkan ke angka terdekat.
- **`Math.trunc(x)`**: Menghilangkan angka di belakang koma (memotong).

### B. Ekstrim & Pencarian Value
- **`Math.max(a, b, c...)`**: Mencari arus energi tertinggi.
- **`Math.min(a, b, c...)`**: Mencari arus energi terendah.

### C. Generator Probabilitas
- **`Math.random()`**: Menghasilkan angka acak antara 0 hingga 0.999... Sangat berguna untuk simulasi lonjakan energi yang tidak terduga.

---

## Arsitek Mindset: Presisi vs Kecepatan

Sebagai arsitek, gunakan `Math` untuk semua kebutuhan geometri, trigonometri, dan probabilitas di aplikasi Anda. Namun, ingatlah bahwa `Math.random()` bukan untuk keamanan tingkat tinggi (kriptografi). Jika Anda butuh angka acak yang benar-benar aman (misal: untuk kunci enkripsi), gunakan `crypto.getRandomValues()`.

---

## Hands-on: Lab Kalkulasi Otomatis
Buka file `examples/math_module_test.js` untuk melihat bagaimana kita menggunakan `Math` untuk menghitung luas area grid dan menghasilkan nilai acak untuk simulasi beban.

---
*Status: [status.md](../../../status.md)*
