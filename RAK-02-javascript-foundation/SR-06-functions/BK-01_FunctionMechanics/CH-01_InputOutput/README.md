# CH-01: Input Output (The Intake Ports)

> **"Sebuah unit operasi tidak bisa bekerja tanpa jalur masuk dan keluar yang jelas. CH-01 membedah bagaimana fungsi menerima argumen, menyediakan nilai cadangan, dan menangani variasi input secara rapi."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- **Technical Reference**: [ECMA-262 - Function Definitions](https://tc39.es/ecma262/#sec-function-definitions)

## 1. Jalur Penerimaan Muatan

### A. [SEC-01: Default Parameters](./SEC-01_DefaultParameters/README.md)
Cadangan nilai otomatis saat input tidak diberikan atau bernilai `undefined`.

### B. [SEC-02: Rest Parameters](./SEC-02_RestParameters/README.md)
Penampung variadik untuk jumlah argumen yang tidak menentu.

### C. [SEC-03: The `arguments` Object](./SEC-03_ArgumentsObject/README.md)
Mekanisme lama yang penting dipahami saat membaca kode legacy.

---

## Arsitek Mindset: API yang Jelas

Sebagai arsitek Hub:
- Gunakan parameter default untuk menjaga fungsi tetap tahan terhadap input yang hilang.
- Gunakan rest parameters untuk API yang memang variadik, bukan sekadar karena tersedia.
- Perlakukan `arguments` sebagai alat kompatibilitas, bukan pilihan utama untuk desain baru.

---

## Hands-on: Lab Intake Ports
Lihat lab di tiap section untuk membandingkan berbagai cara fungsi menerima muatan dan meneruskannya ke proses internal.

---
*Status: 🟢 Complete (3 Sections)*
