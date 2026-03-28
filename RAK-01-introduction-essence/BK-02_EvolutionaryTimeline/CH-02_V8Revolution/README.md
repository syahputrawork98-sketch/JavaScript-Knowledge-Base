# CH-02: V8 Revolution & Node.js (2008 - 2012)

![Status](https://img.shields.io/badge/STATUS-COMPLETE-green?style=for-the-badge)

> **"Kelahiran Kecepatan: Transformasi Sepeda Jadi Mesin F1."**

---

## 🔗 Source Hub
- **V8 Engine**: [V8 Project - Blog History](https://v8.dev/blog)
- **Node.js**: [Node.js - Internal Architecture](https://nodejs.org/en/about)

---

## 🌓 1. Essence: The Logic
Tahun 2008 adalah titik balik fundamental. Google merilis **V8 Engine** yang tidak lagi sekadar menginterpretasi baris per baris, melainkan menggunakan teknik **JIT (Just-In-Time) Compilation**. Hal ini meningkatkan kecepatan JavaScript hingga ribuan kali lipat.

Puncaknya tahun 2009, Ryan Dahl membawa V8 keluar dari browser dan merilis **Node.js**, memungkinkan JavaScript menguasai backend enterprise.

---

## 🎨 2. Visual Logic: JIT Acceleration
Aliran eksekusi V8:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph LR
    Source[JS Code] --> Parser[Parser]
    Parser --> Interpreter[Ignition Interpreter]
    Interpreter -- "Fast Start" --> Machine[Machine Code]
    
    Interpreter -- "Identify Hot Functions" --> Optimizer[TurboFan Compiler]
    Optimizer -- "JIT Compilation" --> Machine
    
    style Source fill:#f7df1e,stroke:#333
    style Machine fill:#90EE90,stroke:#333
```

---

## ⚠️ 3. Common Pitfalls & Myths
- **Mitos**: "Node.js adalah bahasa pemrograman baru." (Sama sekali bukan, Node.js adalah **Runtime** yang menggunakan bahasa JavaScript).
- **Mitos**: "V8 hanya ada di Chrome." (Banyak runtime lain, seperti Node.js dan Electron, juga menggunakan V8).

---
*Back to [Evolutionary Timeline](../README.md)*
