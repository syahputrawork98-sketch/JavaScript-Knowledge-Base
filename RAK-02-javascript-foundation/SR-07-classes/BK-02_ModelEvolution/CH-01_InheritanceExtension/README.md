# CH-01: Inheritance Extension (Evolving Blueprints)

> **"Ketika satu blueprint sudah stabil, kita tidak perlu memulai dari nol untuk membuat varian baru. CH-01 membedah bagaimana class diturunkan, diperluas, dan diubah perilakunya agar model bisa berevolusi dengan tetap terstruktur."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- **Technical Reference**: [ECMA-262 - Class Definitions](https://tc39.es/ecma262/#sec-class-definitions)

## 1. Jalur Pewarisan

### A. [SEC-01: Extends](./SEC-01_Extends/README.md)
Menghubungkan blueprint turunan ke blueprint dasar.

### B. [SEC-02: Super](./SEC-02_Super/README.md)
Mengakses constructor atau method milik induk dari class turunan.

### C. [SEC-03: Polymorphism](./SEC-03_PolymorphismRef/README.md)
Menyesuaikan perilaku turunan sambil tetap mempertahankan antarmuka umum.

---

## Arsitek Mindset: Evolusi yang Disiplin

Sebagai arsitek Hub:
- Gunakan pewarisan saat hubungan model memang alami, bukan sekadar untuk menghemat ketikan.
- Pastikan blueprint turunan benar-benar memperluas perilaku model dasar secara masuk akal.
- Perlakukan polymorphism sebagai alat untuk menjaga konsistensi perilaku lintas varian unit.

---

## Hands-on: Lab Evolving Blueprints
Masuk ke tiap section untuk melihat bagaimana pewarisan dipakai secara bertahap dari `extends` sampai penyesuaian perilaku model turunan.

---
*Status: [x] Complete (3 Sections).*
