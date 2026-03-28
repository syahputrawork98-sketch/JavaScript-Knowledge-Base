# BK-01: Spec Foundations & Terminology

![Book Header](https://img.shields.io/badge/BK--01-FOUNDATIONS-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Alfabet Arsitektur JavaScript: Memahami Fondasi Definisi yang Membedakan Objek Biasa dari yang Eksotis."**

---

## 🔗 Source Hub
- **Primary Source**: [ECMA-262: Terms and Definitions (Clause 4.4)](https://tc39.es/ecma262/#sec-terms-and-definitions)
- **Technical Reference**: [ECMA-262: Ordinary Object (Clause 4.4.7)](https://tc39.es/ecma262/#sec-ordinary-object)

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Set terminologi fundamental yang digunakan oleh spesifikasi ECMA-262 untuk mendefinisikan infrastruktur dasar bahasa, mencakup taksonomi objek (Ordinary vs Exotic), serta struktur hubungan antar unit (Prototype).
- **Analogi**: Bayangkan **"Abjad Arsitektur"**. Sebelum kita membangun sebuah gedung (Aplikasi), kita harus sepakat apa yang disebut sebagai bata (**Ordinary Object**) dan apa yang disebut sebagai beton khusus (**Exotic Object**). Tanpa kesepakatan terminologi ini, seluruh instruksi berikutnya dalam spesifikasi (~800 halaman) akan terasa seperti bahasa asing.

---

## 🗺️ 2. Visual Logic: The Object Taxonomy
Di level spesifikasi, tidak semua objek diciptakan sama:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Obj[ECMAScript Object] --> Ord[Ordinary Object]
    Obj --> Exo[Exotic Object]
    
    subgraph "Ordinary Object (Bata Standar)"
        Ord --> SlotO["Wajib memiliki 14 Internal Methods standar."]
    end
    
    subgraph "Exotic Object (Beton Khusus)"
        Exo --> S1[Array: Custom [[DefineOwnProperty]]]
        Exo --> S2[Proxy: Intercepted [[Call/Construct]]]
        Exo --> S3[Bound Function: Custom [[Call]]]
    end

    style Ord fill:#f7df1e,stroke:#333
    style Exo fill:#fff,stroke:#ff0000
```

---

## 🏛️ 3. Structure: The Chapters

1.  **[CH-01: Objects and Prototypal Ethics](./CH-01_ObjectEthics/)**
    *Definisi Ordinary vs Exotic, Prototype, dan mekanika pewarisan DNA.*
2.  **[CH-02: Standard and Built-in Structures](./CH-02_BuiltInStructures/)**
    *Perbedaan antara Standard, Built-in, dan pengaruh Host (Browser/Node).*
3.  **[CH-03: Data Type Taxonomies](./CH-03_TypeTaxonomy/)**
    *Klasifikasi mendalam tipe Primitif vs tipe Objek di level spesifikasi.*
4.  **[CH-04: Properties and Internal Slots](./CH-04_InternalMechanics/)**
    *Atribut properti (Writable, Enumerable) vs Slot Internal (Hidden State).*

---

## 🧠 4. Under-the-hood: Internal Slots vs Attributes
Sebuah **Ordinary Object** dicirikan oleh memiliki implementasi default untuk metode internal esensial. Namun, yang sering membingungkan adalah perbedaan antara:
- **Property Attributes**: Deskripsi properti yang *terlihat* (seperti `value`, `writable`, `configurable`).
- **Internal Slots**: State internal yang *tidak terlihat* (ditulis dengan kurung siku ganda `[[...]]`, contoh: `[[Prototype]]`, `[[Extensible]]`).

Memahami BK-01 adalah syarat mutlak untuk memahami mengapa `Object.freeze()` tidak hanya mengubah atribut properti, tetapi juga memanipulasi slot internal `[[Extensible]]` pada objek tersebut.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-01](../README.md)*
