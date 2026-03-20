# JavaScript Knowledge Base
 
> **"Mastering the Web's Language: From Syntax to Metaprogramming."**

## 🏛️ Arsitektur 5-Rak (Universal Standard)
Repositori ini menggunakan **5-Rack Universal Architecture** dengan prinsip **Digital Mirroring** untuk memisahkan antara fondasi penggunaan dengan dekonstruksi arsitektur mesin.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Root["JavaScript Knowledge Base"]
    
    RAK01["RAK-01-javascript<br/>(The Entry Point)"]
    RAK02["RAK-02-evolution<br/>(The History & Future)"]
    RAK03["RAK-03-core-spec<br/>(The Internal Logic)"]
    RAK04["RAK-04-runtimes<br/>(The Environments)"]
    RAK05["RAK-05-engines<br/>(The Machine Room)"]
    
    Root --> RAK01 & RAK02 & RAK03 & RAK04 & RAK05
    
    style Root fill:#f7df1e,stroke:#333,stroke-width:4px,color:#000
    style RAK01 fill:#fff,stroke:#333
    style RAK02 fill:#fff,stroke:#333
    style RAK03 fill:#f96,stroke:#333
    style RAK04 fill:#fff,stroke:#333
    style RAK05 fill:#f96,stroke:#333
```

---

## 🗄️ Struktur Perpustakaan

### 1. [RAK-01-javascript](./RAK-01-javascript/)
Seluruh sintaks dan fitur standar JavaScript (MDN-Mirror).
- **SR-01 s/d SR-10**: Kedalaman materi dari pemula hingga fitur lanjut.

### 2. [RAK-02-evolution](./RAK-02-evolution/)
Evolusi bahasa, proses TC39, dan fitur-fitur masa depan (ESNext).

### 3. [RAK-03-core-spec](./RAK-03-core-spec/)
Dekonstruksi teknis **ECMA-262**. Membedah algoritma, memori, dan internal spesifikasi secara presisi.

### 4. [RAK-04-runtimes](./RAK-04-runtimes/)
Eksplorasi lingkungan eksekusi: Node.js, Bun, Deno, dan Web Platform APIs.

### 5. [RAK-05-engines](./RAK-05-engines/)
Deep dive ke dalam mesin JavaScript (**V8 Engine**, JIT, Garbage Collection).

---

## 📏 Standar Kualitas (Gold Standard)
Setiap materi mengikuti prinsip **Digital Mirroring** dan standar **PPM V4** yang mewajibkan:
1. **Source-Synced**: Akurasi 1:1 terhadap dokumentasi resmi/spesifikasi.
2. **Experimental Lab**: Kode pembuktian fungsional di folder `examples/`.
3. **Mental Model Visual**: Diagram Mermaid di folder `assets/`.
4. **Narrative Excellence**: Penjelasan mendalam dengan analogi dunia nyata.

*Dokumentasi Lengkap Standar: [docs/standards/architecture.md](./docs/standards/architecture.md)*

---
*Status Pengembangan: [status.md](./status.md)*
