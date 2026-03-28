# BK-02: Release Timeline

![Status](https://img.shields.io/badge/STATUS-COMPLETE-green?style=for-the-badge)

> **"Ritme Evolusi: Membedah Denyut Rilis Tahunan dan Lini Masa Modernisasi JavaScript."**

---

## 🔗 Source Hub
- **Primary Source**: [ECMAScript - Finished Proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
- **Technical Reference**: [Ecma-262 - History](https://tc39.es/ecma262/#sec-history)
- **Conceptual Parent**: [RAK-03 Evolution](../README.md)

---

## 🌓 1. Essence: The Logic
Konsistensi adalah kunci. Di **BK-02**, kita membedah mekanisme internal bagaimana sejak tahun 2015, JavaScript bermutasi melalui **Annual Release Cycle**. Memahami **Release Timeline** memungkinkan arsitek Hub untuk melakukan pemetaan fitur berdasarkan versi (ES2015, ES2020, dsb) guna menjamin kompatibilitas runtime dan efisiensi transpilasi di Hub aplikasi.

Di sini, kita melihat bagaimana "Zaman Kegelapan" (jeda antara ES3 dan ES5) telah digantikan oleh ritme tahunan yang meledak secara kinetik, memastikan pengembang selalu memiliki instrumen terbaru untuk menangani tantangan web modern.

---

## 🎨 2. Visual Logic: The Annual Release Pulse
Mekanisme siklus rilis tahunan yang menjamin progresivitas stabil:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    ES2015[Wave 1: ES2015 - Massive Mutation] -- "Annual Pulse" --> ES2016[ES2016-2019: Iterative Growth]
    ES2016 -- "Annual Pulse" --> ES2020[Wave 2: ES2020+ - Modern Resilience]
    ES2020 -- "Continuous" --> ESNext[ESNext: Future Horizon]
    
    subgraph Progression_Model
    ES2020 -- "Feature Selected" --> ESNext
    ESNext -- "Ratified" --> ESNew[New Yearly Standard]
    end
    
    style ES2015 fill:#fff,stroke:#333;
    style ES2020 fill:#fff,stroke:#333,stroke-width:2px;
    style ESNext fill:#f7df1e,stroke:#333,stroke-width:3px;
```

---

## 🏛️ 3. Sections Atlas
- **[CH-01: Modern Era](./CH-01_ModernEra/)**: Membedah teknik pemetaan fitur sejak revolusi ES2015 hingga ES2019.
- **[CH-02: Continuous Flux](./CH-02_ContinuousFlux/)**: Meninjau rilis tahunan terkini (ES2020+) dan tren mutasi bahasa masa depan secara kinetik.

---

## 🧪 4. The Lab (Timeline Lab)
Pantau kronologi fitur yang telah selesai secara real-time di laboratorium:
- `https://tc39.es/finished-proposals/`

---

## ⚠️ 5. Common Pitfalls & Myths
- **Mitos**: *"Setiap versi tahunan JavaScript membawa perubahan besar yang merombak bahasa."* (Salah, sejak ES2015, versi tahunan cenderung bersifat **Iterative**. Satu versi mungkin hanya merilis 2 atau 3 fitur kecil. Strategi rilis atomik ini mencegah kejutan arsitektural yang besar pada ekosistem web).
- **Mitos**: *"Tunggu hingga versi tahunan dirilis sebelum menggunakan fiturnya."* (Faktanya, sebagian besar fitur sudah tersedia di browser dan runtime (Node.js) segera setelah fitur tersebut mencapai **Stage 4**, bahkan sebelum dokumen standar tahunan resmi dipublikasikan oleh ECMA).

---
*Back to [Future Hub Proposals](../README.md)*
