# CH-02: Internal Logic (The Inner Wiring)

> **"Kekuatan fungsi bukan hanya pada inputnya, tetapi juga pada kabel internal yang menghubungkannya dengan data di sekitarnya. CH-02 membedah bagaimana fungsi membaca scope, menyimpan referensi, dan memecah masalah secara bertingkat."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- **Technical Reference**: [ECMA-262 - Function Definitions](https://tc39.es/ecma262/#sec-function-definitions)

## 1. Kabel Internal Fungsi

### A. [SEC-01: Lexical Scoping](./SEC-01_LexicalScoping/README.md)
Aturan tetap tentang bagaimana fungsi mengakses variabel berdasarkan posisi deklarasinya.

### B. [SEC-02: Closures](./SEC-02_ClosuresRef/README.md)
Kemampuan fungsi membawa akses ke data luar bahkan setelah scope asal selesai berjalan.

### C. [SEC-03: Recursion](./SEC-03_RecursionRef/README.md)
Teknik memecah masalah menjadi versi yang lebih kecil dari dirinya sendiri.

---

## Arsitek Mindset: Prediktabilitas dan Kendali

Sebagai arsitek Hub:
- Gunakan scoping untuk membatasi akses data secara alami.
- Gunakan closure untuk enkapsulasi dan factory patterns secara sadar, bukan berlebihan.
- Gunakan recursion saat bentuk masalah memang bertingkat dan base case-nya jelas.

---

## Hands-on: Lab Inner Wiring
Eksperimen di section-section bawah untuk melihat bagaimana fungsi mengingat data, membatasi akses, dan mengelola alur pemanggilan berulang.

---
*Status: 🟢 Complete (3 Sections)*
