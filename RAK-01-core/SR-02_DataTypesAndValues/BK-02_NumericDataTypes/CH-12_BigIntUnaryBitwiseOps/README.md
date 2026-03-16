# CH-12: BigInt Unary & Bitwise Operations

Berbeda dengan Number yang terbatas pada 32-bit, operasi bitwise pada BigInt mencakup seluruh rentang digitnya. Mari kita lihat keajaiban biner ini di spesifikasi.

---

## 1. BigInt::unaryMinus
Cara kerjanya sama dengan matematika sekolah: Jika Anda punya `10n`, unary minus (`-10n`) akan menghasilkan nilai negatifnya. Sederhana, tanpa ada drama `+0` vs `-0` seperti pada tipe Number.

## 2. BigInt::bitwiseNOT ( ~ )
Operasi `~n` pada BigInt menghasilkan `-(n + 1)`. 
Karena BigInt tidak punya batas bit (seperti 32-bit pada Number), operasi ini akan secara logis membalikkan seluruh rentang biner angka tersebut (menggunakan representasi *Two's Complement* yang tak terhingga).

## 3. Bitwise Logic ( &, |, ^ )
Operasi ini bekerja secara bit-per-bit pada representasi biner BigInt.
- Tidak ada pemotongan. Jika Anda melakukan `(1n << 100n) | 1n`, Anda akan mendapatkan angka yang memiliki bit pertama dan bit ke-101 bernilai `1`.

---

## Mengapa Arsitek Harus Tahu Ini?
Manipulasi bit pada BigInt adalah cara super efisien untuk melakukan kompresi data atau membuat struktur data *Bitset* yang sangat besar untuk kebutuhan seperti *Bloom Filters* atau sistem izin (*Permissions*) yang melampaui 32 jenis. Arsitek bisa menyimpan ribuan flag dalam satu variabel BigInt tanpa mengkhawatirkan overflow.

---

## Tantangan Kecil
Berapakah hasil dari `~(-1n)`?
(Jawabannya: **0n**. Sesuai hukum `-(n + 1)`, maka `-(-1 + 1)` adalah `0`).

---
> [!IMPORTANT]
> **Key Takeaway:** Bitwise pada BigInt adalah pertempuran biner yang adil: tidak ada pemotongan, tidak ada kehilangan data.
