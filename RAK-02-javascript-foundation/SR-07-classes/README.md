# SR-07: Classes (The Blueprint System)

> **"Jika fungsi adalah unit operasi, maka class adalah sistem cetak biru yang menyatukan data dan perilaku ke dalam bentuk yang konsisten. SR-07 membahas bagaimana JavaScript menyediakan model desain modern untuk membangun unit yang rapi, terstruktur, dan mudah dikembangkan."**

**Classes** di JavaScript memberi kita cara yang lebih jelas untuk mendefinisikan blueprint objek, mengatur akses internal, dan membangun pewarisan perilaku tanpa harus selalu berhadapan langsung dengan detail prototipe mentah.

---

## Arsitektur Cetak Biru

### 1. [BK-01: Class Foundations](./BK-01_ClassFoundations/README.md)
Membangun fondasi class modern dan logika akses internal.
- **The Blueprint**: class declarations, constructors, methods.
- **Access Logic**: private fields, static members, getters/setters.

### 2. [BK-02: Model Evolution](./BK-02_ModelEvolution/README.md)
Membahas bagaimana blueprint berkembang melalui pewarisan dan penyesuaian perilaku.
- **Inheritance Extension**: `extends`, `super`, polymorphism.

---

## 1. Mental Model: "Blueprint System"

Bayangkan Hub tidak lagi membangun setiap unit secara manual. Sebaliknya:
- **Class** menjadi blueprint utama.
- **Constructor** menjadi jalur perakitan awal.
- **Methods** menjadi kemampuan operasional yang dibagikan.
- **Inheritance** menjadi mekanisme upgrade model tanpa menggambar ulang dari nol.

---

## Arsitek Mindset: Struktur yang Terkendali

Sebagai arsitek Hub:
- Gunakan class saat Anda butuh banyak objek dengan bentuk perilaku yang serupa.
- Jangan perlakukan class sebagai satu-satunya pola desain; ia berguna saat blueprint memang membantu, bukan sekadar demi terlihat modern.
- Pahami bahwa class di JavaScript tetap berdiri di atas sistem prototipe, meski sintaksnya lebih bersih.

---

## Hands-on: Lab Blueprint
Masuk ke tiap section untuk melihat bagaimana class dipakai untuk membangun model, mengatur akses, dan memperluas perilaku unit di dalam Hub.

---
*Status: Gold Standard (100% Complete).*
