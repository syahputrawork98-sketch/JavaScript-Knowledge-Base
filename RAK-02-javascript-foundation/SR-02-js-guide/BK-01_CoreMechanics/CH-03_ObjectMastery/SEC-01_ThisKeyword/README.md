# SEC-01: The `this` Keyword (The Current Power Source)

> **"Kata kunci `this` merujuk pada konteks pemanggilan saat ini, bukan pada tempat fungsi ditulis."**

`this` sering membingungkan karena nilainya tidak tetap. Ia berubah berdasarkan cara sebuah fungsi dipanggil.

## Source Hub
- **Primary Source**: [MDN Web Docs - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- **Technical Reference**: [ECMA-262 - ResolveThisBinding](https://tc39.es/ecma262/#sec-resolvethisbinding)

## Senior Terminology
- **Default Binding**: `this` mengarah ke objek global atau `undefined` dalam strict mode saat fungsi dipanggil tanpa konteks.
- **Implicit vs Explicit Binding**: `this` ditentukan otomatis oleh pemanggilan metode, atau dipaksa lewat `call`, `apply`, dan `bind`.
- **New Binding**: `this` merujuk ke instance baru saat fungsi dipakai dengan `new`.

## 1. Mental Model: "The Current Power Source"

Bayangkan `this` seperti perangkat portabel yang mengambil daya dari tempat ia sedang terhubung.

- Jika dipanggil biasa, sumber dayanya mengikuti aturan default.
- Jika dipanggil sebagai metode objek, sumber dayanya adalah objek itu.
- Jika dipaksa dengan `call` atau `bind`, sumber dayanya ditentukan secara eksplisit.

![This Power Source](./assets/this_power_source.svg)

---

## 2. Aturan Utama `this`

### A. Default Binding

```javascript
function showPower() {
    console.log(this);
}
```

### B. Implicit Binding

```javascript
const generator = {
    id: "G1",
    check: function() { console.log(this.id); }
};
```

### C. Explicit Binding

```javascript
function reportStatus() {
    console.log(`Status ${this.id}: Online`);
}
const subStation = { id: "S-09" };
reportStatus.call(subStation);
```

### D. New Binding

Saat fungsi dipanggil dengan `new`, `this` mengarah ke objek baru yang sedang dibuat.

---

## 3. Arrow Function Catch

Arrow function tidak punya `this` sendiri. Ia mewarisi `this` dari lingkungan tempat ia dibuat.

---

## Arsitek Mindset: Jangan Menebak Konteks

Kesalahan memahami `this` sering menghasilkan `undefined` yang sulit dilacak. Jika konteks harus stabil, pakai bentuk pemanggilan yang jelas atau gunakan `.bind()`.

---

## Hands-on: Pelacakan Sumber Daya

Buka file `examples/this_lab.js` untuk melihat bagaimana `this` berubah tergantung pola pemanggilan.

---
*Status: [status.md](../../../status.md)*

---
*Back to [Object Mastery](../README.md)*
