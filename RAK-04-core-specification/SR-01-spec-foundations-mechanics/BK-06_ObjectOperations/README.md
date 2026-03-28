# BK-06: Object Operations

![Book Header](https://img.shields.io/badge/BK--06-OPERATIONS-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Lengan Mekanik Manipulator: Membedah Instruksi Operasional yang Mengelola Interaksi dengan Properti Objek."**

---

## 🔗 Source Hub
- **Primary Source**: [ECMA-262: Object Operations (Clause 7.3)](https://tc39.es/ecma262/#sec-operations-on-objects)
- **Technical Reference**: [ECMA-262: Get (Clause 7.3.1)](https://tc39.es/ecma262/#sec-get-o-p)

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Kumpulan operasi abstrak yang menyediakan interface tingkat tinggi untuk memanipulasi objek ECMAScript, bertindak sebagai pembungkus (wrapper) di atas metode internal esensial objek untuk memastikan konsistensi operasional.
- **Analogi**: Bayangkan sebuah **"Control Panel"** di sebuah pabrik. Untuk memindahkan barang, Anda tidak perlu menggerakkan sendi motor robot secara satu per satu. Anda cukup menekan tombol **`Get`**, dan sistem secara otomatis akan menjalankan sensor (**HasProperty**) dan motor penarik (**[[Get]]**) untuk memberikan barang tersebut kepada Anda.

---

## 🗺️ 2. Visual Logic: The Get/Set Lifecycle
Alur operasional saat engine mengakses sebuah properti:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Req[Get Property Request] --> Type{Is it Object?}
    Type -->|NO| GetV[Exec: GetV Abstract Op]
    Type -->|YES| GetM[Exec: [[Get]] Internal Method]
    
    subgraph "Internal Object Flow"
        GetM --> Prop{Find Property?}
        Prop -->|NO| Proto[Trace Prototype Chain]
        Prop -->|YES| Value[Return Value]
    end

    style Req fill:#f7df1e,stroke:#333
    style GetM fill:#fff,stroke:#ff0000
```

---

## 🏛️ 3. Structure: The Chapters

1.  **[CH-01: Essential Object Abstract Ops](./CH-01_EssentialObjectOps/)**
    *Bedah teknis `Get`, `Set`, `HasProperty`, `DefinePropertyOrThrow`, dan `DeleteProperty`.*
2.  **[CH-02: Property Creation and Iteration](./CH-02_PropertyCreation/)**
    *Mekanika `CreateDataProperty`, `GetMethod`, dan enumerasi properti.*

---

## 🧠 4. Under-the-hood: The "GetV" Difference
Di BK-06, kita mempelajari alasan mengapa Anda bisa memanggil `"".length` padahal string adalah primitif yang tidak memiliki properti. Secara internal, engine tidak memanggil `Get`, melainkan **`GetV`**. Operasi `GetV` secara otomatis akan membungkus (boxing) primitif tersebut menjadi objek sementara agar metode internal `[[Get]]` bisa dipanggil. 

Memahami perbedaan antara abstraksi ini akan membantu Anda mengidentifikasi potensi bottleneck performa saat melakukan akses properti yang berlebihan pada data primitif.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-01](../README.md)*
