# CH-12: Data Blocks

Di level paling rendah, JavaScript berurusan dengan memori mentah dalam bentuk byte. Spesifikasi merepresentasikannya melalui **Data Block** (Clause 6.2.9).

## Mental Model: "Pita Memori Biner"
Bayangkan sebuah pita panjang yang terdiri dari deretan kotak-kotak kecil. Setiap kotak hanya bisa berisi angka biner (0-255).
- Pita ini tidak punya tipe data.
- Pita ini hanya tahu berapa banyak kotak yang dimilikinya (Size).
Itulah **Data Block**.

---

## 1. Definisi Formal: Data Block
Didefinisikan sebagai *"A sequence of byte-sized (8-bit) numerical values."*
Data block adalah tempat penyimpanan fisik untuk data yang nantinya akan digunakan oleh `ArrayBuffer` atau `SharedArrayBuffer` di level bahasa.

## 2. Karakteristik Utama
- **Fixed Size:** Sekali dibuat, ukurannya tidak bisa berubah.
- **Inisialisasi:** Semua byte di dalamnya secara default diinisialisasi dengan angka `0`.
- **Dua Jenis:**
  - **Shared Data Block:** Bisa diakses oleh beberapa *thread* (Worker) sekaligus.
  - **Non-shared Data Block:** Hanya bisa diakses oleh satu *thread*.

## 3. Hubungan dengan Language Types
Data block bukanlah tipe data JavaScript. Ia adalah tempat di mana `TypedArray` (seperti `Uint8Array`) menyimpan data aslinya. Saat Anda membaca indeks ke-0 dari sebuah array buffer, mesin sebenarnya sedang mengambil 1 byte dari **Data Block** internalnya.

---

## Mengapa Arsitek Harus Tahu Ini?
Pengetahuan ini krusial saat Anda bekerja dengan sistem performa tinggi yang memproses file biner, audio, atau WebAssembly. Anda mulai menyadari bahwa di balik kemudahan objek JavaScript, ada "Pita Memori" (Data Block) yang harus dikelola dengan hati-hati agar tidak terjadi kebocoran memori atau lambat karena alokasi yang berlebihan.

---

## Tantangan Kecil
Apa isi default dari sebuah Data Block baru yang berukuran 5 byte?
(Jawabannya: `0x00, 0x00, 0x00, 0x00, 0x00`. Spesifikasi menjamin memori yang dialokasikan selalu bersih).

---
> [!IMPORTANT]
> **Key Takeaway:** Data Block adalah bentuk fisik dari data Anda. Ia adalah jembatan terakhir sebelum JavaScript menyentuh memori hardware.
