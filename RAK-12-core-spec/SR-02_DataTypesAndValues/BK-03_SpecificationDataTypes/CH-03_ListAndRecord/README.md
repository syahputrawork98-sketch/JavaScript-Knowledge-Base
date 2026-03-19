# CH-03: List and Record Specification Types

Jika spesifikasi ingin menyimpan sekumpulan data atau urutan langkah, ia tidak menggunakan Array atau Object JavaScript. Ia menggunakan **List** dan **Record** (Clause 6.2.2).

## Mental Model: "Formulir dan Daftar Inventaris"
- **Record:** Bayangkan sebuah Formulir Kertas. Ada kolom-kolom tetap (Fields) yang harus diisi. Setiap kolom punya nama dan nilai.
- **List:** Bayangkan sebuah Daftar Belanja. Urutan barang dari atas ke bawah sangat penting, dan Anda hanya mencatat satu per satu barang tersebut.

---

## 1. Record Type: "Formulir Internal"
Record adalah koleksi pasangan **Fields** dan **Values**.
- **Notasi:** Ditandai dengan kurung kurawal ganda, misal: `[[Field1, Field2]]`.
- **Field Name:** Selalu diawali dengan kurung siku ganda (misal: `[[Value]]`, `[[Configurable]]`).
- **Kekuatan:** Record digunakan untuk mendefinisikan segalanya, mulai dari *Property Descriptor* hingga *Execution Context*.

## 2. List Type: "Antrean Internal"
List digunakan untuk urutan nilai yang sederhana.
- **Notasi:** Ditandai dengan urutan elemen, misal: `« value1, value2 »`.
- **Kegunaan:** Menyimpan argumen fungsi, urutan pemanggilan, atau daftar nama variabel dalam sebuah scope.

## 3. Mengapa Tidak Pakai Object/Array?
Spesifikasi butuh struktur yang **100% Bebas Efek Samping**. Object JavaScript bisa memiliki prototype, getter, setter, dan perilaku aneh lainnya. Record dan List spesifikasi bersifat "Murni": mereka hanya data statis yang membantu menjelaskan algoritma tanpa ada "Magic" tambahan.

---

## Mengapa Arsitek Harus Tahu Ini?
Hampir setiap bagian dari spesifikasi (seperti cara kerja `Promise` atau `Module`) ditulis menggunakan Record dan List. Memahami notasi `[[...]]` untuk Record dan `«...»` untuk List adalah prasyarat wajib untuk memahami bagaimana status program Anda disimpan di balik layar oleh mesin.

---

## Tantangan Kecil
Apakah sebuah Record bisa berisi Record lain di dalamnya?
(Jawabannya: **YA**. Spesifikasi sering menggunakan *Nested Records* untuk merepresentasikan struktur data yang sangat kompleks, seperti sebuah *Environment Record* yang berisi *Reference Record*).

---
> [!IMPORTANT]
> **Key Takeaway:** Record `[[...]]` adalah untuk data terstruktur (seperti objek), List `«...»` adalah untuk urutan data (seperti array). Keduanya adalah fondasi deskripsi mesin.
