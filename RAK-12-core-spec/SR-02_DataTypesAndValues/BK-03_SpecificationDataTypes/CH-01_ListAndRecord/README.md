# CH-01: List & Record (The Internal Blueprints)

> **"Bukan semua struktur di Hub terlihat oleh teknisi luar. `List` dan `Record` adalah 'Cetak Biru Internal' (The Internal Blueprints) — struktur data khusus yang digunakan oleh spesifikasi untuk mengatur komponen Hub tanpa pernah muncul secara fisik di dalam kode JavaScript Anda."**

*Pemetaan ECMA-262: Clause 6.2.1 & 6.2.2 (The List & Record Specification Types)*

## 1. Mental Model: "The Internal Blueprints"

Bayangkan denah pipa rahasia di dalam dinding Hub.
- **List**: Seperti antrian kabel atau pipa yang urutannya sangat penting (misal: daftar argumen fungsi).
- **Record**: Seperti formulir data teknis yang memiliki field tetap (misal: konfigurasi properti `[[Value]]`, `[[Writable]]`).
- **Penting**: Anda tidak bisa mengetik `new List()` atau `let r = new Record()` di JavaScript. Ini hanyalah alat bantu bagi penulis spesifikasi untuk menjelaskan algoritma.

---

## 2. Karakteristik List

- Digunakan untuk mewakili urutan nilai yang panjangnya bisa berubah.
- Sering ditemui saat spec memproses argumentasi fungsi (`arguments List`) atau urutan eksekusi modul.
- Notasi spec: « val1, val2, val3 »

---

## 3. Karakteristik Record

- Terdiri dari pasangan field dan nilai (seperti Object, tapi lebih kaku).
- Field ditulis dalam kurung siku ganda: `[[FieldName]]`.
- Digunakan untuk **Property Descriptors** (Denah Properti) dan **Environment Records** (Denah Scope).

---

## Arsitek Mindset: Memahami Struktur Abstrak

Sebagai arsitek Hub:
- Memahami List & Record membantu Anda membayangkan bagaimana JavaScript menyimpan data "di balik layar".
- Saat Anda melihat `Object.getOwnPropertyDescriptor(obj, 'p')`, JavaScript sebenarnya mengonversi sebuah **Internal Record** menjadi **Ordinary Object** agar Anda bisa membacanya.

---
*Status: [status.md](../../../docs/status.md)*
