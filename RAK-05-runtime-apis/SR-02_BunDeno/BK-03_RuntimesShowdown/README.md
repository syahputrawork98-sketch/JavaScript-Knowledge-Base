# BK-03: Runtimes Showdown (Node vs Deno vs Bun)

![Book Header](https://img.shields.io/badge/BK--03-SHOWDOWN-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Arena Duel: Membandingkan Tiga Raksasa Runtime JavaScript untuk Memahami Trade-off Antara Keamanan, Kecepatan, dan Kompatibilitas Sistem."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Analisis komparatif arsitektur antara Node.js, Deno, dan Bun. Fokus pada metrik performa (Cold start, Throughput), model keamanan (Sandbox vs Open), sistem modul (CJS vs ESM), serta ekosistem tooling (Native build-in vs Third-party).
- **Analogi**: Bayangkan memilih **Kendaraan untuk Ekspedisi**. **Node.js** adalah **Truk Kontainer** (Sangat besar, suku cadang ada di mana-mana, tapi berat untuk mulai jalan). **Deno** adalah **Mobil Lapis Baja** (Sangat aman, semuanya tertutup rapat, tapi jalannya agak kaku). **Bun** adalah **Sepeda Motor Superbike** (Sangat kencang, ringan, tapi mungkin terasa riskan karena pengembangannya yang sangat agresif).

---

## 🗺️ 2. Visual Logic: Runtime Comparison Matrix

Dimensi perbandingan utama:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#FF0000'}}}%%
quadrantChart
    title JavaScript Runtime Landscape
    x-axis "Low Security" --> "High Security (Sandbox)"
    y-axis "Slow Startup" --> "High Performance (Speed)"
    quadrant-1 "Enterprise Ready (Secure/Fast)"
    quadrant-2 "The Challenger (Bun)"
    quadrant-3 "The Veteran (Node.js)"
    quadrant-4 "The Sentinel (Deno)"
    "Node.js": [0.1, 0.4]
    "Deno": [0.8, 0.6]
    "Bun": [0.4, 0.9]
```

---

## 🏛️ 3. Strategic Chapters (Levels 5)

Evaluasi teknis lintas runtime:

1.  **[CH-01: Performance Trade-offs](./CH-01_Comparisons/)**
    *Analisis throughput vs latency dan penggunaan Resource (RAM/CPU).*
2.  **[CH-02: Ecosystem Compatibility](./CH-02_Showdown/)**
    *Sejauh mana Bun dan Deno bisa menjalankan package dari npm tanpa modifikasi.*

---

## 🧠 4. Under-the-hood: The "Battery Included" Philosophy
Perbedaan filosofis terbesar terletak pada **Standard Library**. Node.js bersifat minimalis (banyak fungsi harus menggunakan `npm install`). Deno menyediakan `standard library` yang dikurasi oleh tim inti. Bun mengambil langkah lebih ekstrem dengan menyisipkan SQLite, Bundler, Hashing, dan Test Runner langsung ke dalam binary-nya. Hal ini mengurangi ketergantungan pada `node_modules` yang membengkak, namun meningkatkan ukuran binary runtime itu sendiri.

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan benchmark runtime terbaru (2024+).
- [x] **Visual Logic**: Mermaid Quadrant Chart Comparison.
- [x] **Mental Model**: Analogi "Truk vs Lapis Baja vs Superbike".

---
*Buku Status: [x] Complete | [status.md](../../status.md) | Kembali ke [SR-02](../README.md)*
