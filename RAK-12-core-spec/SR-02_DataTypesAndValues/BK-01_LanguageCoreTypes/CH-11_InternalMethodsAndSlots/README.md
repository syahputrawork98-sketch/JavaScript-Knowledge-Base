# CH-11: Internal Methods & Slots (The Secret Schematics)

> **"Dibalik casing mesin Hub yang mengkilap, terdapat 'Skematik Rahasia' (The Secret Schematics) yang disebut Internal Methods dan Slots. Inilah aturan dasar yang menentukan bagaimana sebuah mesin merespon saat ditarik, ditekan, atau dibuka."**

*Pemetaan ECMA-262: Clause 6.1.7.2 (Object Internal Methods and Internal Slots)*

## 1. Mental Model: "The Secret Schematics"

Bayangkan setiap Object memiliki buku panduan teknis yang tertanam di dalamnya. Saat Anda mencoba membaca properti (`obj.prop`), JavaScript sebenarnya memanggil instruksi internal bernama `[[Get]]`.
- **Slots (`[[ ... ]]`)**: Seperti chip memori internal yang menyimpan status privat (misal: `[[Prototype]]`).
- **Methods**: Seperti fungsi mekanis otomatis yang dijalankan oleh mesin (misal: `[[Get]]`, `[[Set]]`, `[[Delete]]`).

---

## 2. Essential Internal Methods

Inilah beberapa "tombol internal" paling penting yang dimiliki setiap Object di Grid:

| Method | Trigger di JS | Penjelasan |
| :--- | :--- | :--- |
| **[[Get]]** | `obj.prop` | Mengambil energi dari pipa `prop`. |
| **[[Set]]** | `obj.prop = val` | Mengisi energi ke pipa `prop`. |
| **[[HasProperty]]** | `"prop" in obj` | Memeriksa apakah pipa `prop` terpasang. |
| **[[Delete]]** | `delete obj.prop` | Mencabut pipa `prop` secara permanen. |
| **[[GetPrototypeOf]]** | `Object.getPrototypeOf(obj)` | Melihat denah arsitektur dasar mesin. |

---

## 3. Ordinary vs Exotic

- **Ordinary Objects**: Mesin standar yang mengikuti skematik default spesifikasi untuk semua metode di atas.
- **Exotic Objects**: Mesin khusus yang memiliki perilaku menyimpang pada satu atau lebih metode internal (contoh: `Array` memiliki perilaku `[[DefineOwnProperty]]` yang unik untuk menangani properti `length`).

---

## Arsitek Mindset: Memahami Mekanisme

Sebagai arsitek Hub:
- Memahami bahwa operasi sederhana seperti `.` atau `[]` sebenarnya memicu rangkaian algoritma internal yang kompleks.
- Keunikan `Proxy` di JavaScript adalah kemampuannya untuk "mencegat" (*trap*) metode-metode internal ini dan menggantinya dengan logika kustom Anda.

---
*Status: [status.md](../../../docs/status.md)*
