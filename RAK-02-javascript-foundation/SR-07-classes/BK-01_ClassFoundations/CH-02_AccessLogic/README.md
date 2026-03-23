# CH-02: Access Logic (Controlled Access Paths)

> **"Setelah blueprint terbentuk, kita perlu mengatur siapa yang boleh melihat, memakai, atau mengubah bagian tertentu dari unit. CH-02 membedah jalur akses modern di dalam class agar data internal tetap aman dan utilitas bersama tetap tertata."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- **Technical Reference**: [ECMA-262 - Class Definitions](https://tc39.es/ecma262/#sec-class-definitions)

## 1. Jalur Akses Terstruktur

### A. [SEC-01: Private Fields](./SEC-01_PrivateFields/README.md)
Penyimpanan internal yang tidak bisa disentuh langsung dari luar.

### B. [SEC-02: Static Members](./SEC-02_StaticMembers/README.md)
Fasilitas bersama yang menempel pada class, bukan pada instance.

### C. [SEC-03: Getters & Setters](./SEC-03_GettersSetters/README.md)
Gerbang baca-tulis yang memungkinkan kontrol tambahan saat properti diakses.

---

## Arsitek Mindset: Akses Bukan Kebetulan

Sebagai arsitek Hub:
- Lindungi state internal yang tidak seharusnya dimanipulasi bebas.
- Gunakan static members untuk utilitas bersama, bukan untuk data yang seharusnya hidup per instance.
- Gunakan getters/setters saat Anda memang membutuhkan validasi atau transformasi, bukan sekadar untuk gaya.

---

## Hands-on: Lab Access Paths
Ikuti section di chapter ini untuk memahami berbagai cara class menjaga integritas data dan pola akses ke dalam unit.

---
*Status: [x] Complete (3 Sections).*
