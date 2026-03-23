# SR-06: Functions (The Operational Units)

> **"Jika data adalah energi, maka Function adalah unit operasi yang menerima muatan, mengolahnya, lalu mengembalikan hasilnya ke Grid. SR-06 membangun fondasi modularitas JavaScript agar logika tidak tersebar liar, tetapi dikemas dalam unit kerja yang jelas, aman, dan bisa dipakai ulang."**

**Functions** adalah pusat transformasi di JavaScript. Di level fondasi, kita mempelajari cara fungsi menerima input, menjaga akses ke data sekitarnya, dan hadir dalam berbagai bentuk sintaks yang cocok untuk kebutuhan yang berbeda.

---

## Arsitektur Unit Operasi

### 1. [BK-01: Function Mechanics](./BK-01_FunctionMechanics/README.md)
Membedah bagaimana fungsi menerima input dan mengelola logika internalnya.
- **Input Handling**: `default parameters`, `rest parameters`, dan `arguments`.
- **Internal Logic**: lexical scoping, closures, dan recursion.

### 2. [BK-02: Unit Types](./BK-02_UnitTypes/README.md)
Membedah berbagai bentuk fungsi modern dan pola penggunaannya.
- **Functional Variety**: arrow functions, declarations vs expressions, dan IIFE.

---

## 1. Mental Model: "Operational Units"

Bayangkan Hub memiliki sekumpulan mesin kerja:
- **Parameter**: bahan baku yang masuk ke mesin.
- **Function Body**: ruang proses tempat energi diolah.
- **Return Value**: hasil akhir yang dikirim kembali ke jalur distribusi.

Semakin rapi kita mendesain fungsi, semakin mudah seluruh Hub dipelihara dan diperluas.

---

## Arsitek Mindset: Modularitas Tanpa Kabut

Sebagai arsitek Hub:
- Gunakan fungsi untuk memecah tugas besar menjadi unit kecil yang jelas tanggung jawabnya.
- Pilih bentuk fungsi sesuai konteks: tidak semua logika cocok ditulis sebagai arrow function, dan tidak semua helper perlu menjadi declaration global.
- Jaga agar parameter, scope, dan nilai balik tetap eksplisit supaya alur kode mudah diaudit.

---

## Hands-on: Lab Unit Operasi
Buka setiap folder `examples/` di dalam section untuk melihat bagaimana fungsi dipakai dalam skenario konfigurasi, enkapsulasi, dan alur kerja modular.

---
*Status: Gold Standard (100% Complete)*
