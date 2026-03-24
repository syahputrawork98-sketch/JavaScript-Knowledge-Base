# SEC-02: Advanced Prototypes (Blueprint Extensions)

> **"Pewarisan di JavaScript terjadi lewat delegasi prototipe, bukan penyalinan penuh dari induk ke anak."**

Bagian ini membahas bagaimana objek dapat meminjam perilaku dari objek lain melalui rantai prototipe.

## Source Hub
- **Primary Source**: [MDN Web Docs - Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- **Technical Reference**: [ECMA-262 - Ordinary Object Internal Methods and Internal Slots](https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots-getprototypeof)

## Senior Terminology
- **Prototypal Inheritance**: Mekanisme pewarisan berbasis rantai `[[Prototype]]`.
- **Prototype Chain**: Jalur pencarian properti dari objek ke prototipe di atasnya.
- **Property Shadowing**: Properti lokal menutupi properti warisan dengan nama yang sama.

## 1. Mental Model: "Blueprint Extensions"

Bayangkan Anda memiliki generator dasar lalu membuat varian baru di atas cetak biru yang sama. Varian itu bisa memakai fitur dari cetak biru induk tanpa perlu menyalinnya satu per satu.

![Prototypal Extension](./assets/prototype_extension.svg)

---

## 2. Membuat Objek dengan Prototipe Tertentu

```javascript
const energyBase = {
    type: "Generic",
    report: function() { console.log(`Type: ${this.type}`); }
};

const solarUnit = Object.create(energyBase);
solarUnit.type = "Solar";
solarUnit.report();
```

---

## 3. Inspeksi dan Modifikasi Rantai

- `Object.getPrototypeOf(obj)` untuk melihat induknya.
- `Object.setPrototypeOf(obj, proto)` untuk mengganti prototipe, walau ini sebaiknya dilakukan dengan hati-hati.

---

## 4. Properti Sendiri vs Warisan

```javascript
console.log(solarUnit.hasOwnProperty('type'));
console.log(solarUnit.hasOwnProperty('report'));
```

---

## Arsitek Mindset: Simpan Perilaku Bersama di Prototipe

Jika banyak objek berbagi metode yang sama, simpan metode itu di prototipe agar penggunaan memori lebih efisien.

---

## Hands-on: Lab Rantai Prototipe

Buka file `examples/proto_lab.js` untuk mencoba hierarki perangkat berbasis `Object.create()`.

---
*Status: [status.md](../../../status.md)*

---
*Back to [Object Mastery](../README.md)*
