# CH-05: Completion Record Specification Type

Inilah "Jantung" dari alur eksekusi JavaScript. Segala sesuatu yang Anda lakukan di kode—mulai dari `return`, `throw`, hingga `break`—diterjemahkan oleh mesin menjadi sebuah **Completion Record** (Clause 6.2.4).

## Mental Model: "Laporan Hasil Eksekusi"
Bayangkan setiap kali mesin JavaScript menjalankan satu baris kode, ia harus memberikan "Laporan Tertulis" kepada atasannya (ExecutionContext). Laporan ini harus menjawab tiga pertanyaan:
1. **Type:** Bagaimana hasilnya? (Apakah sukses, error, atau instruksi lompatan?)
2. **Value:** Apa data yang dikembalikan? (Jika ada).
3. **Target:** Ke mana kita harus melompat? (Khusus untuk Label/Break).
Itulah isi dari sebuah **Completion Record**.

---

## 1. Struktur Completion Record
Didefinisikan sebagai sebuah Record dengan field:
- **[[Type]]**: Salah satu dari Enum **~normal~**, **~break~**, **~continue~**, **~return~**, atau **~throw~**.
- **[[Value]]**: Nilai ECMAScript (misal: hasil perhitungan atau objek Error). Jika tidak ada, berisi **~empty~**.
- **[[Target]]**: Label target (String atau **~empty~**).

## 2. Kategori Utama
Spesifikasi membaginya menjadi dua kelompok besar:
- **Normal Completion:** Tipe **~normal~**. Artinya kode berjalan lancar dan berlanjut ke baris berikutnya.
- **Abrupt Completion:** Tipe lainnya (**~break~, ~continue~, ~return~, ~throw~**). Artinya alur kode terputus dan mesin harus "melompat" ke tempat lain.

## 3. Rahasia di Balik Try...Catch
Saat terjadi error, mesin menciptakan Completion Record tipe **~throw~**. Blok `catch` pada dasarnya adalah algoritma yang "menangkap" record tipe **~throw~** ini dan mengubahnya kembali menjadi alur **~normal~**.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami Completion Record memungkinkan Anda memahami mengapa `finally` tetap berjalan meskipun ada `return` di blok `try`. Ini karena blok `finally` bisa menimpa (*overwrite*) Completion Record yang sedang berjalan. Arsitek yang paham ini bisa mendesain alur *Safe-Clean-Up* yang sangat handal.

---

## Tantangan Kecil
Apa isi [[Type]] dari Completion Record jika Anda menjalankan kode `break;` di dalam loop?
(Jawabannya: **~break~**. Mesin akan mencari blok loop terdekat untuk menghentikan eksekusi dan mengembalikan alur menjadi **~normal~** setelah loop selesai).

---
> [!IMPORTANT]
> **Key Takeaway:** Segala sesuatu di JavaScript adalah Completion Record. Tanpa ini, mesin tidak akan tahu kapan harus berhenti atau kapan harus error.
