# CH-07: Number Bitwise Shift Operations

Shift operations (`<<`, `>>`, `>>>`) adalah cara kita menggeser posisi bit di dalam memori. Mari kita lihat alur teknisnya di Clause 6.1.6.1.9 hingga 6.1.6.1.11.

---

## 1. Persiapan: Pemotongan 32-bit
Sama seperti Bitwise NOT, semua operasi shift pada tipe Number akan:
1. Mengubah angka menjadi integer 32-bit.
2. Melakukan pergeseran bit.
3. Mengembalikan hasilnya sebagai Number.

## 2. Tiga Jenis Pergeseran
- **Left Shift (`<<`):** Menggeser bit ke kiri dan mengisi kosong di kanan dengan `0`. Efeknya mirip dengan perkalian $2^n$.
- **Signed Right Shift (`>>`):** Menggeser bit ke kanan tapi **menjaga tanda** (mengisi kiri dengan bit tanda asal). Jika angkanya negatif, ia tetap negatif. Efeknya mirip pembagian $2^n$.
- **Unsigned Right Shift (`>>>`):** Menggeser bit ke kanan dan **selalu mengisi kiri dengan `0`**. Hasilnya selalu positif, berapapun angka asalnya.

---

## Mengapa Arsitek Harus Tahu Ini?
`>>> 0` adalah trik arsitektural yang populer untuk memaksa nilai apapun menjadi **Unsigned 32-bit Integer**. Ini sangat berguna saat Anda bekerja dengan WebGL, manipulasi pixel pada Canvas, atau protokol jaringan yang mengharuskan data dikirim dalam format 32-bit tetap.

---

## Tantangan Kecil
Berapakah hasil dari `-1 >>> 0`?
(Jawabannya: **4294967295**. Mengapa? Karena `-1` dalam biner 32-bit (Two's Complement) adalah semua bit bernilai `1`. Saat dilakukan Unsigned Right Shift 0 kali, ia dianggap sebagai angka positif terbesar yang bisa ditampung 32-bit).

---
> [!NOTE]
> **Key Takeaway:** Gunakan `>>` untuk matematika (pembagian cepat), gunakan `>>>` untuk manipulasi data biner murni (selalu positif).
