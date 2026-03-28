# BK-02: Web Interoperability (URL & AbortController)

![Book Header](https://img.shields.io/badge/BK--02-WEB_INTEROP-blue?style=for-the-badge&logo=javascript)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Kendali & Identitas: Bagaimana URL API Memberikan Alamat yang Seragam dan AbortController Memberikan Tombol Stop yang Konsisten untuk Seluruh Proses Asinkron di Web."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Implementasi standar **URL API** (parsing dan manipulasi alamat) serta **AbortController/AbortSignal** (mekanisme pembatalan tugas asinkron) di lingkungan server-side. Standar ini menjamin bahwa kode yang memproses alamat atau membatalkan request dapat berjalan identik baik di Node.js, Deno, Bun, maupun di Browser.
- **Analogi**: Bayangkan **Stop Kontak (URL)** dan **Tombol Darurat (AbortController)**. **URL API** memastikan semua peralatan (skrip) dicolokkan ke tempat yang benar dengan format yang dipahami semua orang. **AbortController** adalah tombol "Emergency Stop" universal. Sekali Anda menekan tombol tersebut, seluruh mesin yang terhubung ke sinyal yang sama akan berhenti beroperasi seketika untuk menghemat daya.

---

## 🗺️ 2. Visual Logic: Abort Signal Propagation

Bagaimana satu sinyal membatalkan seluruh rantai eksekusi:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#FF0000'}}}%%
graph TD
    AC["AbortController"] -->|controller.abort()| Signal["AbortSignal (aborted: true)"]
    Signal --> Task1["Database Query"]
    Signal --> Task2["Fetch External API"]
    Signal --> Task3["Large File Parsing"]
    
    Task1 & Task2 & Task3 -->|Reason| Stop((STOP))

    style AC fill:#fff,stroke:#ff0000
    style Signal fill:#f7df1e,stroke:#333
    style Stop fill:#ff0000,stroke:#fff
```

---

## 🏛️ 3. Strategic Chapters (Levels 5)

Standar navigasi dan kontrol:

1.  **[CH-01: URL & URLSearchParams](./CH-01_URL_API/)**
    *Membedah standar WHATWG URL dibandingkan modul legacy node:url.*
2.  **[CH-02: The Control Pattern (AbortController)](./CH-02_AbortController/)**
    *Membatalkan fetch, event listeners, dan tugas asinkron kustom.*

---

## 🧠 4. Under-the-hood: The WinterCG Standardization
**WinterCG** (Web-interoperable Runtimes Community Group) menetapkan bahwa runtime modern harus mendukung sekumpulan API Web Minimum. **`AbortController`** bukan hanya untuk membatalkan `fetch`, tetapi sudah menjadi standar untuk menghentikan **Event Listeners** (`{ signal }`) dan tugas di **Streams**. Di sisi lain, **URL API** di Node.js kini sudah 100% kompatibel dengan browser, sehingga penggunaan `url.parse()` yang lama sudah dinyatakan *deprecated* (usang).

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan WHATWG URL & DOM Spec (Abort).
- [x] **Visual Logic**: Mermaid diagram Abort Signal Propagation.
- [x] **Mental Model**: Analogi "Tombol Darurat Universal".

---
*Buku Status: [x] Complete | [status.md](../../status.md) | Kembali ke [SR-03](../README.md)*
