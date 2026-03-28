# BK-05: Testing & Comparison

![Book Header](https://img.shields.io/badge/BK--05-COMPARISON-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Sistem Sensor Identitas: Membedah Logika Kesetaraan yang Menentukan Kebenaran dalam Setiap Perbandingan."**

---

## 🔗 Source Hub
- **Primary Source**: [ECMA-262: Testing and Comparison (Clause 7.2)](https://tc39.es/ecma262/#sec-testing-and-comparison-operations)
- **Technical Reference**: [ECMA-262: SameValue (Clause 7.2.10)](https://tc39.es/ecma262/#sec-samevalue)

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Operasi abstrak internal (seperti `IsStrictlyEqual`, `SameValue`, dan `SameValueZero`) yang mendefinisikan kriteria matematis dan logis untuk membandingkan dua nilai ECMAScript.
- **Analogi**: Bayangkan sebuah **"Alat Pemindai Sidik Jari"**. Ada alat yang hanya memindai kemiripan visual (**Loose Equality `==`**), ada yang memindai struktur DNA dasar (**Strict Equality `===`**), dan ada alat mikroskopis yang sangat teliti hingga bisa membedakan partikel identik namun berlawanan arah (**SameValue** untuk `+0` vs `-0`).

---

## 🗺️ 2. Visual Logic: The Equality Matrix
Perbandingan 4 algoritma kesetaraan utama di JavaScript:

| Algorithm | Identical Primitives | `NaN` vs `NaN` | `+0` vs `-0` | Focus Layer |
| :--- | :---: | :---: | :---: | :--- |
| **IsLooselyEqual (`==`)** | YES (with coercion) | NO | YES | UI / Hybrid |
| **IsStrictlyEqual (`===`)** | YES | NO | YES | Standard Logic |
| **SameValue** | YES | **YES** | **NO** | Engine Integrity |
| **SameValueZero** | YES | **YES** | **YES** | `Set` & `Map` |

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Compare[Comparison Request] --> Type{Same Type?}
    Type -->|NO| Coerce[Perform Coercion (Loose Only)]
    Type -->|YES| Val{Values Match?}
    Val -->|YES| Zero{Is it Zero?}
    Zero -->|YES| Sign[Check +/- sign in SameValue]
    Val -->|NaN| Nan[True for SameValue/Zero]

    style Compare fill:#f7df1e,stroke:#333
    style Type fill:#fff,stroke:#ff0000
```

---

## 🏛️ 3. Structure: The Chapters

1.  **[CH-01: Equality and Comparison Algorithms](./CH-01_EqualityAlgorithms/)**
    *Bedah teknis `IsStrictlyEqual`, `IsLooselyEqual`, dan perbedaannya.*
2.  **[CH-02: SameValue Mechanics](./CH-02_SameValueMechanics/)**
    *Memahami algoritma `SameValue` (Object.is) dan `SameValueZero` (Collections).*

---

## 🧠 4. Under-the-hood: The Zero and NaN Paradox
Di BK-05, kita mempelajari alasan teknis di balik paradox perbandingan:
- **`NaN === NaN` adalah `false`**: Karena spesifikasi Clause 7.2.14 mengharuskan return `false` untuk perbandingan numerik NaN.
- **`SameValue` membedakan `+0` dan `-0`**: Algoritma ini membandingkan tanda bit (sign bit) pada representasi IEEE 754, yang sangat krusial di level engine V8 untuk menjaga integritas matematis.

Memahami BK-05 akan membuat Anda tidak pernah lagi bingung mengapa `NaN` tidak bisa ditemukan di `Array.prototype.indexOf` tapi bisa ditemukan di `Array.prototype.includes`.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-01](../README.md)*
