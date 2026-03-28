# CH-01: Dynamic Nature (Typing & Flexibility)

![Status](https://img.shields.io/badge/STATUS-COMPLETE-green?style=for-the-badge)

> **"Bentuk yang Menyesuaikan, Bukan yang Terkunci."**

---

## 🔗 Source Hub
- **TC39 Spec**: [ECMA-262 Data Types & Values](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
- **MDN Glossary**: [Dynamic typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)

---

## 🌓 1. Essence: The Logic
JavaScript adalah bahasa dengan **Dynamic Typing**. Ini berarti tipe data tidak melekat pada nama variabel saat dideklarasikan, melainkan pada **Nilai** yang sedang dikandungnya saat runtime. Satu variabel bisa menyimpan `string`, lalu berubah menjadi `number` atau `object` di langkah berikutnya.

Fleksibilitas ini memungkinkan penulisan kode yang sangat cepat dan adaptif, namun menuntut pemahaman mendalam tentang **Type Coercion** (konversi tipe otomatis) agar tidak terjadi bug yang sulit dilacak.

---

## 🎨 2. Visual Logic: Typing Comparison
Pemisahan antara Static vs Dynamic:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#000', 'primaryTextColor': '#000'}}}%%
graph LR
    subgraph Static_Typing_Language
    A[Box: INT] -- "Only Numbers" --> B[101]
    end
    
    subgraph JavaScript_Dynamic
    C[Box: Variable] -- "Phase 1" --> D["ABC (String)"]
    C -- "Phase 2" --> E[123 (Number)]
    C -- "Phase 3" --> F["{ } (Object)"]
    end
    
    style C fill:#f7df1e,stroke:#333,stroke-width:2px
```

---

## ⚠️ 3. Common Pitfalls & Myths
- **Mitos**: "Dynamic Typing sama dengan Untyped." (Sama sekali tidak, JS tetap memiliki tipe data yang kuat di level internal, hanya saja pemeriksaannya dilakukan saat eksekusi).
- **Mitos**: "Dynamic Typing mempercepat aplikasi." (Secara performa, ini justru memberikan beban tambahan pada JIT Compiler untuk melakukan profiling tipe).

---
*Back to [Core Characteristics](../README.md)*
