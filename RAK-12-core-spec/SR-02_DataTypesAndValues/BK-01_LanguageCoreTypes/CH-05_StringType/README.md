# CH-05: String Type

Kita sering menganggap **String** hanya sebagai "Teks". Namun bagi spesifikasi, String adalah struktur data teknis yang sangat spesifik yang berkaitan dengan enkoding memori.

## Mental Model: "Rangkaian Manik-manik 16-bit"
Bayangkan sebuah kalung manik-manik. Setiap manik-manik adalah sebuah **Code Unit** berukuran 16-bit (UTF-16).
- Kalung ini tidak bisa diputus atau ditambah (String bersifat *Immutable*).
- Jika Anda ingin mengubah satu manik, Anda harus merangkai kalung baru dari awal.

---

## 1. Definisi Formal: String
Menurut Clause 6.1.4: *"The String type is the set of all ordered sequences of zero or more 16-bit unsigned integer values (“elements”)."*

Poin Teknis Utama:
- **Bukan Karakter, tapi Code Unit:** Satu karakter yang kita lihat (seperti Emoji 🔥) bisa terdiri dari dua unit 16-bit (*Surrogate Pairs*).
- **Indeksasi:** Panjang string didefinisikan oleh jumlah unit 16-bit tersebut, bukan jumlah karakter visualnya.

## 2. Pentingnya UTF-16
ECMAScript menggunakan UTF-16 sebagai standar representasi string. Hal ini berdampak pada metode seperti `.length` dan `.charCodeAt()`. 
> *Example:* `"A".length` adalah 1. Namun emoji tertentu bisa memiliki `.length` sebesar 2 atau lebih.

## 3. Immutability (Kekekalan)
Sekali sebuah string tercipta di memori, isinya tidak pernah bisa diubah. Operasi seperti `.toUpperCase()` atau `.replace()` sebenarnya membuat **string baru** dan membuang referensi ke string lama. Inilah alasan mengapa manipulasi string yang masif di dalam loop bisa menjadi sangat lambat jika tidak dioptimasi.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami bahwa String adalah deretan unit 16-bit akan menghindarkan Anda dari bug saat memproses teks internasional atau Emoji. Anda akan lebih berhati-hati saat memotong string (*Slicing*) agar tidak "memotong di tengah" sebuah karakter yang terdiri dari dua unit.

---

## Tantangan Kecil
Berapakah "panjang" dari string kosong `""`?
(Jawabannya: **0**. Spesifikasi mengizinkan *zero sequences*, yang mewakili String Kosong).

---
> [!NOTE]
> **Key Takeaway:** String di JavaScript adalah urutan data biner 16-bit yang kita "anggap" sebagai teks.
