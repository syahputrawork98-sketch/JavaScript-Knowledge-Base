# CH-01-03: JSC Pipeline (LLInt, DFG, FTL)

![Chapter Header](https://img.shields.io/badge/CH--01--03-JSC_PIPELINE-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Arsitektur 4-Tier: Bagaimana JavaScriptCore (Engine Safari/Bun) Mengelola Eksekusi Berlapis dari Low-Level Interpreter Hingga Faster-Than-Light JIT."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Pipeline eksekusi berjenjang pada mesin **JavaScriptCore (JSC)** yang mentransisikan kode dari **LLInt** (interpreter cepat), **Baseline JIT** (profiling), **DFG JIT** (optimasi data-flow), hingga **FTL JIT** (kompilasi puncak berbasis LLVM/B3) untuk mencapai performa tertinggi.
- **Analogi**: Bayangkan **Relay Race (Lari Estafet)**. **LLInt** adalah pelari pertama yang mulai sangat cepat dan efisien. Jika trek (kode) panjang, ia memberikan tongkat ke **Baseline JIT** untuk menambah kecepatan. Jika tongkat masih berlanjut, **DFG** dan **FTL** (Pelari Super) akan mengambil alih untuk mencapai garis finish dengan kecepatan maksimal. Strategi JSC adalah menyulut "pelari super" secara asinkron agar eksekusi utama tidak terhambat.

---

## 🗺️ 2. Visual Logic: The 4-Tier Pipeline

Alur peningkatan performa di JavaScriptCore:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#800080'}}}%%
graph LR
    AST["Source/AST"] --> LL["LLInt (Low-Level Interpreter)"]
    LL -->|Hot Function| BL["Baseline JIT"]
    BL -->|Very Hot| DFG["DFG JIT (Data Flow Graph)"]
    DFG -->|Extreme Performance| FTL["FTL JIT (Faster-Than-Light)"]
    
    style LL fill:#fff,stroke:#333
    style DFG fill:#fff,stroke:#333
    style FTL fill:#800080,stroke:#fff,color:#fff
```

---

## 🏛️ 3. Under-the-hood: Concurrent JIT Compilation
Keunggulan utama JSC (yang membuat **Bun** sangat cepat) adalah **Kompilasi JIT yang Konkuren**. Di V8, pengoptimalan terkadang bisa menarik sumber daya thread utama. Di JSC, DFG dan FTL melakukan tugas pengoptimalan berat di thread latar belakang (Background threads). Ini memastikan UI atau server tetap responsif sementara mesin membangun kode native yang lebih cepat di belakang layar.

---

## 📜 4. Architect's Principles (PPM V4)

1. **JSC for Short-lived Tasks**: Karena LLInt dirancang untuk startup yang instan, JSC sangat unggul untuk tugas-tugas singkat (CLI tools seperti Bun) dibandingkan V8 yang butuh waktu pemanasan Ignition.
2. **Predictable Types for FTL**: Sama seperti V8, tingkat keberhasilan optimasi FTL sangat bergantung pada stabilitas tipe data yang masuk ke DFG.
3. **Respect the Tiers**: Jangan mengharapkan performa puncak di milidetik pertama; biarkan mesin "menaikkan gigi" melalui 4 tingkat tiering-nya.

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan WebKit JavaScriptCore (JSC) engineering documentation.
- [x] **Visual Logic**: Mermaid 4-Tier Pipeline diagram.
- [x] **Mental Model**: Analogi "Relay Race (Lari Estafet)".

---
*Status Bab: [x] Full Hardened | [status.md](../../../status.md) | Kembali ke [BK-01](../README.md)*
