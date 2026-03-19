# JavaScript Knowledge Base: Documentation Hub

Pusat dokumentasi ini menyimpan seluruh cetak biru, standar kualitas, dan panduan meta untuk membangun repository ini secara konsisten mengikuti standar *MDN Web Docs* dan *ECMAScript Spec*.

## Daftar Dokumen Utama

### 1. Standar & Protokol
- **[Architecture Standards](./standards/architecture.md)**: Analogi "Pusat Energi Web" dan kriteria Gold Standard.
- **[Naming Conventions](./standards/conventions.md)**: Aturan penamaan RAK, SR, BK, hingga Level Bab.
- **[PPM Workflow](./standards/workflow.md)**: 4 Tahapan Penulisan Materi (PPM) V4.
- **[Status Protocol](./standards/status-protocol.md)**: Cara melaporkan dan menghitung progress pengerjaan.
- **[Contribution Guide](./standards/contribution.md)**: Panduan kontribusi dan aturan PR.
- **[Core Contribution](./standards/core-contribution.md)**: Standar teknis kontribusi materi inti.

### 2. Cetak Biru (Blueprints)
- **[Repository Plan](./repository-plan/README.md)**: Dekomposisi total dari MDN JavaScript ke dalam struktur 11-Rack.

### 3. Spesialisasi (Specializations)
- **[RAK-12: Core Specification](../RAK-12-core-spec/README.md)**: Membedah internal ECMAScript (Clause-by-clause).
- **[RAK-13: Modern Web Runtimes](../RAK-13-runtimes/README.md)**: Menjelajahi dunia Node.js, Bun, dan Deno sebagai pusat transmisi data web modern yang asinkron.
- **[RAK-14: JS Engines](../RAK-14-engines/README.md)**: Membedah "mesin fisik" (V8, SpiderMonkey) dan optimasi JIT.

### 4. Narasi & Esensi
- **[JavaScript Origins](./javascript-origins.md)**: Kisah legendaris pembuatan bahasa dalam 10 hari oleh Brendan Eich.
- **[JavaScript History](./javascript-history.md)**: Transformasi dari 10 hari pengodean hingga bahasa universal internet.
- **[Philosophy & Essence](./javascript-philosophy.md)**: Membedah Event Loop dan fleksibilitas tanpa batas.
- **[Why JavaScript?](./why-javascript.md)**: Mengapa tetap memilih JS di era persaingan bahasa modern.

## Struktur Direktori `docs/`

```text
/docs
├── standards/             # Standar & Protokol (Architecture, Conventions, etc.)
├── repository-plan/       # Cetak biru 11-Rack (Level 2)
├── javascript-history.md  # Narasi Sejarah
├── javascript-philosophy.md # Filosofi Bahasa
├── javascript-origins.md  # Legenda Inisiasi
├── why-javascript.md      # Rasionalitas Penggunaan
└── README.md              # File ini (Hub navigasi)
```
