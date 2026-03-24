# CH-03: Data Types (The Energy Forms)

> **"Data bukan sekadar informasi; ia adalah 'bentuk energi' yang menentukan bagaimana JavaScript memprosesnya."**

Setelah memiliki baterai (variabel) untuk menyimpan energi, kita perlu tahu **jenis energi** apa yang disimpan di dalamnya. Dalam JavaScript, "bentuk energi" ini disebut sebagai **Tipe Data**.

## Source Hub
- **Primary Source**: [MDN Web Docs - JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- **Deep Dive**: [You Don't Know JS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md)

## Senior Terminology
- **Primitives**: Tipe data dasar yang nilainya tidak dapat diubah (immutable) (String, Number, BigInt, Boolean, Undefined, Symbol, Null).
- **Type Coercion**: Konversi otomatis dari satu tipe data ke tipe data lain yang dilakukan oleh engine JS.
- **Static vs Dynamic Typing**: Perbedaan cara bahasa pemrograman menangani pengecekan tipe data variabel.

## 1. Mental Model: "Bentuk-Bentuk Energi"

Setiap perangkat membutuhkan jenis energi yang berbeda:
- **Number**: Ibarat **Wattage/Daya Panas** (Digunakan untuk perhitungan).
- **String**: Ibarat **Aliran Informasi** (Pesan teks, label).
- **Boolean**: Ibarat **Saklar Lampu** (On atau Off).

---

## 2. Peta Energi: 7 Primitive Types

JavaScript memiliki 7 tipe data dasar (Primitives) yang bersifat "atomik" (tidak bisa dipecah lagi):

| Bentuk Energi | Deskripsi | Contoh |
| :--- | :--- | :--- |
| **Number** | Angka (bulat atau desimal). | `42`, `3.14` |
| **String** | Teks atau urutan karakter. | `"Hallo Hub!"` |
| **Boolean** | Logika benar atau salah. | `true`, `false` |
| **Undefined** | Baterai ada, tapi isinya belum terdefinisi. | `let x;` |
| **Null** | Baterai sengaja dikosongkan. | `let x = null;` |
| **BigInt** | Energi super besar (angka luar biasa besar). | `9007199254740991n` |
| **Symbol** | Label unik yang tidak bisa diduplikasi. | `Symbol("id")` |

---

## 3. Energy Scanner: Operator `typeof`

Bagaimana kita tahu bentuk energi apa yang ada di dalam sebuah variabel? Gunakan pemindai bawaan JavaScript: `typeof`.

```javascript
let energy = 100;
console.log(typeof energy); // "number"
```

---

## Arsitek Mindset: Presisi Bentuk Energi

Sebagai arsitek, Anda harus presisi dalam memilih bentuk energi. Mengirimkan **String** ("10") ke dalam fungsi kalkulasi matematika mungkin akan memberikan hasil yang tidak terduga karena JavaScript mencoba melakukan "Energy Transformation" (Type Coercion). Selalu pastikan "bentuk" data sesuai dengan peruntukannya.

---

## Hands-on: Memindai Energi
Buka file `examples/types_demo.js` untuk mencoba memindai berbagai bentuk energi menggunakan `typeof`.

---
*Back to [JS First Steps](../README.md)*
