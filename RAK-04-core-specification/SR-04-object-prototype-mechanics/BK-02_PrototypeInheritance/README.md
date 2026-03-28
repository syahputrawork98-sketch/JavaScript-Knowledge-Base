# BK-02: Prototype Chain & Inheritance Mechanics

![Book Header](https://img.shields.io/badge/BK--02-PROTOTYPE-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Silsilah Keluarga & Pewarisan Sifat: Membedah Mekanisme Pendelegasian DNA Objek yang Terkoneksi Melalui Tautan Internal."**

---

## 🌐 Source Hub
- **Strategic Blueprint**: [RAK-04 Core Specification](../README.md)
- **Primary Source**: [ECMA-262: Prototypal Inheritance (Clause 10.1.1)](https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots-getprototypeof)
- **Technical Reference**: [ECMA-262: The [[Prototype]] Internal Slot (Clause 10.1)](https://tc39.es/ecma262/#sec-ordinary-getprototypeof)

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Sekumpulan aturan yang mendefinisikan bagaimana properti dicari dan diwariskan antar objek melalui tautan slot internal **`[[Prototype]]`**. Proses ini melibatkan rekursi algoritma `[[Get]]` yang terus menelusuri rantai hingga menemukan properti yang diminta atau mencapai nilai `null`.
- **Analogi**: Bayangkan sebuah **"Pohon Keluarga Bangsawan"**. Anda (Objek) mungkin tidak memiliki gelar bangsawan sendiri. Namun, jika orang tua Anda memilikinya, Anda bisa menggunakannya. Jika tidak, Anda bertanya pada kakek Anda. Rantai ini terus berlanjut hingga ke **Leluhur Tertua (Object.prototype)**. Jika sang leluhur pun tidak memilikinya, barulah Anda menyerah dan menyatakan bahwa keluarga Anda tidak memiliki gelar tersebut (**undefined**).

---

## 🗺️ 2. Visual Logic: The Prototype Search Loop

Bagaimana engine melakukan resolusi properti:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Start[Get Property: 'name'] --> Find{Found in Own?}
    Find -->|YES| Success[Return Value]
    Find -->|NO| Next{Has [[Prototype]]?}
    
    Next -->|YES| SearchProto[Move to Prototype Object]
    SearchProto --> Find
    
    Next -->|NO: null| End[Return undefined]

    style Start fill:#f7df1e,stroke:#333
    style Success fill:#fff,stroke:#ff0000
```

---

## ⚙️ 3. Spec-Internals: OrdinaryGet Recursion

Mekanisme internal pencarian properti (delegasi):

| Fase | Algoritma / Semantik |
| :--- | :--- |
| **Discovery** | Engine melakukan `[[GetOwnProperty]](P)` pada objek target. |
| **Delegation** | Jika kosong, engine mengambil `[[Prototype]]` dari objek tersebut. |
| **Recursion** | Engine memanggil `[[Get]]` secara rekursif pada objek prototipe. |
| **Termination** | Proses berhenti jika properti ditemukan atau prototipe bernilai `null`. |

---

## 🧪 4. The Lab: Discovery Specimens

Eksperimen Pewarisan:
1.  **[examples/prototype_collision.js](../../examples/prototype_collision.js)**: Demonstrasi Shadowing (properti lokal menindih prototipe).
2.  **[examples/cross_realm_prototype.js](../../examples/cross_realm_prototype.js)**: Bukti bahwa `Object.prototype` antar-iframe tidak identik.

---

## 🏛️ 5. Landscape: The Chapters

1.  **[CH-01: The Proto-Linkage Architecture](./CH-01_ProtoLinkage/)**
    *Bedah teknis slot `[[Prototype]]` vs properti `.prototype`.*
2.  **[CH-02: Inheritance and Property Resolution](./CH-02_InheritanceResolution/)**
    *Mekanisme Shadowing, delegasi, dan performa penelusuran rantai.*

---

## 🧠 6. Under-the-hood: The "OrdinaryGet" Recursion
Di BK-02, kita mempelajari bahwa "Pewarisan" di JavaScript bukanlah penyalinan (copying), melainkan **Delegasi**. Secara internal, metode **`[[Get]]`** akan memanggil operasi **`OrdinaryGet`**. 

Jika properti tidak ditemukan pada objek target, `OrdinaryGet` akan melihat ke slot internal `[[Prototype]]`. Jika slot tersebut berisi objek lain, ia akan memanggil `[[Get]]` milik objek tersebut. Inilah fondasi efisiensi memori JavaScript: jutaan objek bisa berbagi metode yang sama (seperti `.toString()`) tanpa harus menduplikasi fungsinya di setiap instansi.

---
*Status: 🟢 Gold Standard | Kembali ke [SR-04](../README.md)*
