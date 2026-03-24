# SEC-02: Arrow vs Regular Functions (The Switch Core)

> **"Arrow function dan regular function terlihat serupa, tetapi perilakunya berbeda terutama pada `this`, `arguments`, dan kemampuan dipakai sebagai constructor."**

Memilih `function()` atau `=>` bukan sekadar soal gaya penulisan, tetapi soal bagaimana fungsi akan berinteraksi dengan konteksnya.

## Source Hub
- **Primary Source**: [MDN Web Docs - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- **Technical Reference**: [ECMA-262 - Arrow Function Definitions](https://tc39.es/ecma262/#sec-arrow-function-definitions)

## Senior Terminology
- **Lexical `this`**: `this` diwarisi dari scope tempat arrow dibuat.
- **Arguments Object Binding**: Arrow function tidak punya `arguments` miliknya sendiri.
- **Constructor Limitation**: Arrow function tidak bisa dipanggil dengan `new`.

## 1. Mental Model: "The Switch Core"

Bayangkan dua jenis saklar:
1. **Regular Function** memiliki pengaturan konteks sendiri yang bergantung pada cara ia dipanggil.
2. **Arrow Function** meminjam pengaturan konteks dari tempat ia dibuat.

![Arrow vs Regular Functions](./assets/arrow_vs_regular.svg)

---

## 2. Perbedaan Utama: `this`

### A. Regular Function
`this` bergantung pada cara pemanggilannya.

```javascript
const hub = {
    name: "Main Hub",
    status: function() {
        console.log(`System: ${this.name}`);
    }
};
```

### B. Arrow Function
`this` mengikuti konteks tempat ia dibuat.

```javascript
const hub = {
    name: "Main Hub",
    status: () => {
        console.log(`System: ${this.name}`);
    }
};
```

---

## 3. Hal yang Tidak Dimiliki Arrow

- Tidak punya `arguments` sendiri.
- Tidak bisa dipakai dengan `new`.
- Tidak memiliki `prototype` untuk konstruksi objek.

---

## Arsitek Mindset: Pilih Sesuai Peran

Gunakan regular function untuk metode objek yang membutuhkan `this`. Gunakan arrow function untuk callback singkat, transformasi data, atau kasus yang justru ingin mewarisi `this` dari luar.

---

## Hands-on: Lab Perbandingan Saklar

Buka file `examples/arrow_lab.js` untuk membandingkan kedua bentuk fungsi ini dalam konteks yang sama.

---
*Status: [status.md](../../../status.md)*

---
*Back to [The Functional Engine](../README.md)*
