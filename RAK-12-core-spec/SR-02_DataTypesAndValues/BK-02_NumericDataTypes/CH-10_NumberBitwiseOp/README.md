# CH-10: NumberBitwiseOp

Setelah kita mempelajari pergeseran bit (shift) di CH-07, sekarang kita akan membedah bagaimana spesifikasi menangani operasi logika bit (AND, OR, XOR) pada tipe Number. Mari kita lihat Clause 6.1.6.1.16.

---

## 1. Algoritma: NumberBitwiseOp ( op, x, y )
Meskipun kita menulis `&`, `|`, atau `^`, spesifikasi menggunakan satu algoritma umum untuk ketiganya:
1. Ubah operan pertama `x` menjadi integer 32-bit (`ToInt32(x)`).
2. Ubah operan kedua `y` menjadi integer 32-bit (`ToInt32(y)`).
3. Lakukan operasi biner sesuai operator:
   - **AND (&):** Hanya menghasilkan 1 jika kedua bit bernilai 1.
   - **OR (|):** Menghasilkan 1 jika salah satu atau kedua bit bernilai 1.
   - **XOR (^):** Hanya menghasilkan 1 jika salah satu (tapi tidak keduanya) bit bernilai 1.
4. Kembalikan hasilnya sebagai nilai 32-bit bertanda (*Signed 32-bit Integer*).

## 2. Kenapa Harus Digabung?
Spesifikasi menggabungkan ketiganya dalam satu definisi algoritma karena mekanismenya identik: **Paksa ke 32-bit, lalu operasikan bit-per-bit.**

---

## Mengapa Arsitek Harus Tahu Ini?
Operasi bitwise adalah cara yang sangat efisien untuk menyimpan banyak status (seperti *Permission Flags*: Read, Write, Execute) ke dalam satu angka saja. Namun, arsitek harus ingat bahwa bitwise op hanya bekerja pada jangkauan 32-bit. Jika aplikasi Anda menggunakan flag yang lebih dari 31 buah, Anda mungkin akan mengalami *Integer Overflow* dan data Anda akan rusak.

---

## Tantangan Kecil
Berapakah hasil dari `NaN | 5`?
(Jawabannya: **5**. Sesuai aturan poin 1, `NaN` saat diubah menjadi integer 32-bit (`ToInt32`) akan menjadi `0`. Maka `0 | 5` adalah `5`).

---
> [!NOTE]
> **Key Takeaway:** Bitwise AND, OR, XOR adalah alat kompresi data yang cepat, namun terbatas pada dunia 32-bit.
