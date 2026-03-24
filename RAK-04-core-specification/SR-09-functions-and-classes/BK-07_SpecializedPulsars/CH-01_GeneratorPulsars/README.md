# CH-01: Generator Pulsars

> **"Fungsi spesialis yang bisa berhenti dan melanjutkan aliran energinya."**

**Source Hub**:
- [ECMA-262: Generator Function Definitions](https://tc39.es/ecma262/#sec-generator-function-definitions)

---

## 1. Mental Model: "The Pauseable Plant"

Generator memakai `yield` untuk menghentikan dirinya sementara dan `next()` untuk melanjutkan alur kerja.

---

## 2. Visualisasi Sistem: Generator Suspension Cycle

```mermaid
graph LR
    Start[Start] --> Yield[yield]
    Yield --> Suspend[Suspend State]
    Suspend --> Next[next()]
    Next --> Resume[Resume]
```

---

## 3. Mekanisme & Hubungan

1. Generator menyimpan state eksekusi internal saat berhenti.
2. `next()` mengembalikan objek `{ value, done }`.
3. Model ini menjadikan generator fondasi iterator kustom dan banyak pola streaming.

---

## 4. Lab Praktis

Buka file `examples/01_generator_pulsars_lab.js` untuk melihat generator berhenti dan melanjutkan aliran nilainya.

---
*Status: [x] Complete | [status.md](../../../docs/status.md)*
