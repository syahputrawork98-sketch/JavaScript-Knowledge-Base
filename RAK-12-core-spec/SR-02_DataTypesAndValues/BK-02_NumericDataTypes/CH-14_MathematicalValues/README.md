# CH-14: Mathematical Values (The Abstract Blueprints)

> **"Di dalam spesifikasi, ada perbedaan antara angka yang dijalankan mesin dan angka yang ada di pikiran Arsitek. `Mathematical Values` adalah 'Cetak Biru Abstrak' (The Abstract Blueprints) — nilai matematika murni yang tak terbatas sebelum dipaksa masuk ke dalam keterbatasan fisik memori komputer."**

*Pemetaan ECMA-262: Clause 6.1.6 (Mathematical Values)*

## 1. Mental Model: "The Abstract Blueprints"

Bayangkan Anda sedang merancang sebuah mesin Hub di atas kertas. Anda bisa menulis angka $\pi$ atau fraction $1/3$ dengan presisi tak terhingga. Itu adalah **Mathematical Value (MV)**.
Namun, saat Anda mulai membangun mesin fisiknya, Anda harus membulatkan angka tersebut agar muat di dalam display digital. Itu adalah **Number** atau **BigInt**.

---

## 2. Peran MV dalam Spesifikasi

Spesifikasi ECMA-262 menggunakan MV untuk menjelaskan **algoritma** secara presisi sebelum dikonversi menjadi tipe data JavaScript.
- Saat spec menyebut *"The result is the sum of x and y"*, itu seringkali merujuk pada penjumlahan matematika murni (MV).
- Setelah itu, baru spec akan mengatakan *"Return the Number value for the MV result"*, yang berarti melakukan pembulatan sesuai aturan IEEE 754.

---

## 3. Contoh: Pergeseran Bit

Dalam operasi bitwise, spesifikasi akan:
1.  Mengonversi `Number` ke **Mathematical Value**.
2.  Melakukan operasi matematika (seperti modulo $2^{32}$).
3.  Mengonversi kembali hasilnya ke `Number` (32-bit Integer).

---

## Arsitek Mindset: Memahami Ketepatan

Sebagai arsitek Hub:
- Memahami konsep MV membantu Anda membaca spesifikasi dengan lebih jernih.
- Sadarilah bahwa setiap kali Hub melakukan perhitungan, ada proses "Penyempitan" dari dunia matematika abstrak (MV) ke dunia fisik komputer (Types).
- Kehilangan data (*Data Loss*) selalu terjadi saat konversi dari MV ke `Number` jika nilainya terlalu kompleks.

---
*Status: [status.md](../../../docs/status.md)*
