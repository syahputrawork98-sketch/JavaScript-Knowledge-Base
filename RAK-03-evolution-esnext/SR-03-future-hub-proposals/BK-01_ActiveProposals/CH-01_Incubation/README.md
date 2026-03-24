# CH-01: Incubation (Stage 1-2)

> **"Eksperimen di Laboratorium Hub. `Incubation` adalah tahap di mana ide-ide radikal diuji validitas arsitekturalnya."**

**Source Hub**: 
- [TC39 Stage 1 Proposals](https://github.com/tc39/proposals/blob/main/stage-1-proposals.md)
- [TC39 Stage 2 Proposals](https://github.com/tc39/proposals/blob/main/stage-2-proposals.md)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Stage 1** (Proposal) berarti komite setuju untuk mengeksplorasi suatu masalah dan solusinya. **Stage 2** (Draft) berarti deskripsi formal pertama dari fitur tersebut sudah ada. Pada tahap ini, sintaksis masih bisa berubah drastis.

**Model Mental**:
Bayangkan Hub sedang merancang tipe kabel baru.
- **Stage 1**: Sketsa di atas kertas tisu ("Bagaimana kalau kita punya kabel yang tidak bisa putus?").
- **Stage 2**: Blueprint teknis awal yang dikirim ke pabrik contoh untuk pengujian internal.

---

## 2. Visualisasi Sistem: High Impact Incubation Features

| Proposal | Stage | Deskripsi Singkat |
| :--- | :--- | :--- |
| **Records & Tuples** | 2 | Struktur data imutabel (Object/Array-like). |
| **Pattern Matching** | 1 | Sintaksis `match` yang kuat untuk alur logika. |
| **Async Context** | 2 | Pelacakan status asinkron lintas fungsi. |
| **Signals** | 1 | Mekanisme reaktif tingkat rendah di dalam bahasa. |

---

## 3. Mekanisme & Hubungan

### Karakteristik Penting
- **Fluid Syntax**: Di Stage 2, Hub masih melakukan perdebatan sengit tentang tanda baca (seperti pemilihan `%` vs `#{` untuk Record).
- **Polyfill Limitation**: Banyak fitur di tahap ini belum bisa di-polyfill dengan sempurna karena membutuhkan perubahan pada engine internal Hub (**Exotic behaviors**).
- **Static Semantic Checks**: Tim Editor mulai memeriksa apakah proposal ini bertabrakan dengan aturan bahasa yang sudah ada.

### Arsitek Mindset: Predictive Architecture
- Pantau fitur Stage 2 untuk memahami ke mana arah bahasa JavaScript dalam 3-5 tahun ke depan. Jangan jadikan fitur Stage 2 sebagai pondasi produk Anda saat ini, karena sirkuit tersebut bisa ditarik atau diganti kapan saja oleh TC39.

---

## 4. Lab Praktis
Cobalah proposal **Records & Tuples** menggunakan playground online TC39 untuk merasakan sensasi bekerja dengan struktur data yang tidak pernah bisa berubah.

---
*Status: [x] Complete.*
