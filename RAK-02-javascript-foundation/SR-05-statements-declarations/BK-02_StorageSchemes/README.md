# BK-02: Storage Schemes (The Memory Grid)

> **"Sebelum data bisa diproses, Hub harus memesan ruang di Grid Memori. BK-02 membahas bagaimana kita mendeklarasikan unit penyimpanan dengan berbagai tingkat keamanan dan jangkauan (scope)."**

## 1. Unit Penyimpanan

### A. `const` (Locked Unit)
Penyimpanan permanen. Setelah diisi, nilainya tidak bisa diganti. Sangat aman dan direkomendasikan untuk stabilitas Hub.

### B. `let` (Mutable Unit)
Penyimpanan fleksibel. Nilainya bisa diupdate sesuai kebutuhan alur kerja, namun tetap terkunci di dalam blok sirkuitnya sendiri (*Block Scope*).

### C. `var` (Legacy Loophole)
Penyimpanan lama yang memiliki jangkauan berlebihan (*Function Scope*) dan sering kali menyebabkan tabrakan data karena bisa diakses sebelum dideklarasikan secara resmi (*Hoisting*).

---

## 2. Visualisasi: Memory Allotment

![Memory Allotment Premium](./assets/memory_allotment_premium.svg)

---

## Hands-on: Lab Penyimpanan
Uji jangkauan variabel dan perilaku hoisting di `examples/storage_scope_lab.js`.
