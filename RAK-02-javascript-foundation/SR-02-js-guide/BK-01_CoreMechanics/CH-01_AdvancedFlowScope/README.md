# CH-01: Advanced Flow & Scope

Buku ini membedah bagaimana JavaScript mengelola ruang (Scope) dan waktu (Hoisting) eksekusi kode.

## Source Hub
- **Primary Source**: [MDN Web Docs - JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- **Technical Reference**: [ECMA-262 - ECMAScript Language Specification](https://tc39.es/ecma262/)

## Status Audit
Struktur lama `CH > CH` pada chapter ini sudah dinormalisasi menjadi `CH > SEC`, sehingga unit hoisting, lexical scope, dan closures sekarang selaras dengan standar arsitektur terbaru.

Di sisi domain, area ini tetap perlu dijaga sebagai jembatan konseptual karena bersinggungan langsung dengan `SR-05` dan `SR-06`.

## Daftar Section
1.  **[SEC-01: Hoisting](./SEC-01_Hoisting/README.md)**: Persiapan deklarasi sebelum eksekusi berjalan.
2.  **[SEC-02: Scope Chain & Lexical Environment](./SEC-02_ScopeChainLexicalEnvironment/README.md)**: Aturan akses variabel berdasarkan lokasi penulisan.
3.  **[SEC-03: Closures](./SEC-03_Closures/README.md)**: Fungsi yang membawa memori dari scope asalnya.

---
*Status: [x] Complete (3 Sections) - Bridge chapter finalized.*
