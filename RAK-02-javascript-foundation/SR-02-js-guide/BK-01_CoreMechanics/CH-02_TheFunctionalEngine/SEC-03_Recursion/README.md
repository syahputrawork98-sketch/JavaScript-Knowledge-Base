# SEC-03: Recursion (The Re-routing Loop)

> **"Recursion adalah pola ketika fungsi memanggil dirinya sendiri sampai kondisi penghentian tercapai."**

Beberapa masalah bersarang lebih mudah diselesaikan dengan rekursi daripada loop biasa.

## Source Hub
- **Primary Source**: [MDN Web Docs - Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- **Technical Reference**: [ECMA-262 - Execution Contexts](https://tc39.es/ecma262/#sec-execution-contexts)

## Senior Terminology
- **Base Case**: Kondisi penghenti yang mencegah pemanggilan tanpa akhir.
- **Stack Overflow**: Error saat call stack terlalu dalam.
- **Tail Call Optimization (TCO)**: Optimasi teoritis untuk bentuk rekursi tertentu.

## 1. Mental Model: "The Re-routing Loop"

Rekursi terdiri dari dua bagian penting:
1. **Base Case** untuk berhenti.
2. **Recursive Case** untuk melanjutkan dengan input yang lebih kecil atau lebih sempit.

![Recursion Loop](./assets/recursion_loop.svg)

---

## 2. Struktur Dasar

```javascript
function countdown(power) {
    if (power <= 0) {
        console.log("Energi Habis. Sirkuit Berhenti.");
        return;
    }

    console.log(`Sisa Energi: ${power}MW`);
    countdown(power - 10);
}
```

---

## 3. Risiko Utama: Stack Overflow

Setiap pemanggilan rekursif menambah frame baru di call stack. Jika base case tidak pernah tercapai, program akan gagal.

---

## Arsitek Mindset: Gunakan Saat Alaminya Memang Bersarang

Rekursi sangat cocok untuk tree, struktur folder, atau data bertingkat. Untuk pengulangan linear biasa, loop sering lebih sederhana dan hemat memori.

---

## Hands-on: Penelusuran Grid Kompleks

Buka file `examples/recursion_lab.js` untuk melihat rekursi pada struktur yang lebih dalam.

---
*Status: [status.md](../../../status.md)*

---
*Back to [The Functional Engine](../README.md)*
