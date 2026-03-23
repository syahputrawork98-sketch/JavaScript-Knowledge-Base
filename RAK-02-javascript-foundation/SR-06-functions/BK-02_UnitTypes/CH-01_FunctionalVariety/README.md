# CH-01: Functional Variety (The Form Factors)

> **"Mesin kerja yang sama bisa hadir dalam bentuk yang berbeda. CH-03 membedah variasi bentuk fungsi di JavaScript agar kita bisa memilih format yang paling cocok untuk konteks, keterbacaan, dan perilaku yang kita butuhkan."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- **Technical Reference**: [ECMA-262 - Function Definitions](https://tc39.es/ecma262/#sec-function-definitions)

## 1. Ragam Bentuk Fungsi

### A. [SEC-01: Arrow Functions](./SEC-01_ArrowFunctions/README.md)
Bentuk ringkas yang cocok untuk callback dan fungsi utilitas tanpa `this` sendiri.

### B. [SEC-02: Expressions vs Declarations](./SEC-02_ExpressionsVsDeclarations/README.md)
Perbedaan bentuk definisi fungsi dan dampaknya pada keterbacaan serta ketersediaan.

### C. [SEC-03: IIFE](./SEC-03_IIFE/README.md)
Pola eksekusi langsung untuk isolasi dan inisialisasi satu kali.

---

## Arsitek Mindset: Bentuk Mengubah Perilaku

Sebagai arsitek Hub:
- Jangan memilih bentuk fungsi hanya karena lebih pendek; perhatikan juga `this`, hoisting, dan tujuan penggunaannya.
- Gunakan declaration untuk infrastruktur yang ingin dibaca jelas sebagai unit utama.
- Gunakan expression atau IIFE saat Anda memang membutuhkan kontrol lebih ketat terhadap timing dan scope.

---

## Hands-on: Lab Form Factors
Bandingkan tiap bentuk fungsi lewat lab agar perbedaan perilaku dan kegunaan praktisnya terasa langsung dalam kode.

---
*Status: 🟢 Complete (3 Sections)*
