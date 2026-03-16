# CH-04: Boolean Type

Dalam dunia komputer yang serba biner, **Boolean** adalah fondasi dari semua pengambilan keputusan. Meskipun terlihat sangat sederhana, spesifikasi memiliki aturan ketat tentang bagaimana nilai ini dikelola.

## Mental Model: "Saklar Lampu"
Tipe Boolean adalah sebuah saklar yang hanya punya dua posisi absolut:
- **ON (true):** Menandakan sebuah pernyataan atau kondisi itu benar.
- **OFF (false):** Menandakan sebuah pernyataan atau kondisi itu salah.
Tidak ada posisi "Remang-remang" di antara keduanya.

---

## 1. Definisi Formal: Boolean
Menurut Clause 6.1.3: *"The Boolean type represents a logical entity having two values, called **true** and **false**."*

## 2. Boolean vs Truthy/Falsy
Inilah perbedaan besar antara **Tipe Boolean** dan **Evaluasi Logika**:
- **Tipe Boolean:** Hanya ada dua anggota yaitu `true` dan `false`.
- **Truthy/Falsy:** Adalah mekanisme di mana JavaScript mencoba "memaksa" (*coerce*) tipe data lain (seperti string kosong atau angka 0) untuk berakting seperti Boolean.
> *Catatan Arsitek:* Bedakan antara "Nilainya adalah Boolean" dan "Nilainya berperilaku seperti Boolean".

## 3. Operasi pada Boolean
Di dalam spesifikasi, Boolean sering digunakan dalam algoritma percabangan (*If...Else*). Operasi seperti `Logical NOT (!)` atau `Logical AND (&&)` sebenarnya bekerja dengan mengambil nilai Boolean mentah dan mengembalikan hasil sesuai tabel kebenaran (*Truth Table*).

---

## Mengapa Arsitek Harus Tahu Ini?
Mendesain sistem dengan *State* Boolean murni jauh lebih aman dan mudah diuji daripada mengandalkan nilai *Truthy/Falsy*. Sebagai arsitek, usahakan agar variabel status Anda selalu berisi `true` atau `false` secara eksplisit.

---

## Tantangan Kecil
Apakah `Boolean(new Boolean(false))` menghasilkan `true` atau `false`?
(Jawabannya: **true**. Mengapa? Karena `new Boolean(false)` menciptakan sebuah **Object**. Dan di JavaScript, semua **Object** dianggap *Truthy*, terlepas dari isi di dalamnya).

---
> [!IMPORTANT]
> **Key Takeaway:** Boolean adalah tipe data paling jujur. Jangan pernah mencampuradukkan kejujurannya dengan nilai "mirip-benar" (Truthy).
