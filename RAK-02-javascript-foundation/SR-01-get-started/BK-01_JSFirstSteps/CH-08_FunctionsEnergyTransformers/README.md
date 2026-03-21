# CH-08: Functions (The Energy Transformers)

> **"Fungsi adalah unit transformer yang dapat digunakan kembali untuk memproses input mentah menjadi output yang berguna."**

Bayangkan Web Hub Anda memiliki banyak kabel dan baterai. Tanpa **Fungsi**, Anda harus menulis ulang sirkuit yang sama setiap kali ingin menghitung daya. Fungsi memungkinkan kita untuk membungkus logika sirkuit ke dalam sebuah "perangkat" yang bisa dipanggil kapan saja.

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
- **Technical Reference**: [ECMA-262 - Function Definitions](https://tc39.es/ecma262/#sec-function-definitions)

## 🎓 Senior Terminology
- **Parameters vs Arguments**: Parameter adalah slot input (di posisi deklarasi), sedangkan argumen adalah nilai nyata (di posisi pemanggilan).
- **Return Value**: Nilai yang dikirimkan kembali ke pemanggil setelah fungsi selesai dieksekusi.
- **Arrow Functions**: Sintaks penulisan fungsi yang lebih ringkas menggunakan simbol `=>`.

## 1. Mental Model: "Perangkat Transformer"

Sebuah Fungsi bekerja seperti mesin transformer di gardu listrik:
- **Input (Parameters)**: Energi mentah atau data yang dimasukkan ke mesin.
- **Process (Function Body)**: Logika di dalam mesin untuk mengubah data tersebut.
- **Output (Return Value)**: Energi hasil konversi yang dikeluarkan untuk digunakan bagian lain.

```mermaid
graph LR
    In["Raw Data (Params)"] --> Trans["[ Function ] (Logic)"]
    Trans --> Out["Produced Energy (Return)"]
```

---

## 2. Membangun Transformer: Declaration

Cara standar untuk mendefinisikan transformer:

```javascript
function convertToKilowatt(watt) {
    return watt / 1000;
}
```

- `convertToKilowatt`: Nama perangkat (label).
- `watt`: Slot input (parameter).
- `return`: Gerbang output yang mengirimkan hasil keluar.

---

## 3. Desain Modern: Arrow Functions

Arsitek modern sering menggunakan desain yang lebih ringkas dan hemat ruang yang disebut **Arrow Functions**:

```javascript
const convertToKilowatt = (watt) => watt / 1000;
```

---

## Arsitek Mindset: Modularitas Hub

Jangan membangun satu mesin raksasa yang melakukan segalanya. Bangunlah banyak fungsi kecil yang masing-masing memiliki satu tanggung jawab (Single Responsibility). Misalnya, satu fungsi untuk menghitung pajak energi, satu lagi untuk memformat laporan teks. Ini memudahkan pemeliharaan sirkuit Hub Anda.

---

## Hands-on: Mengoperasikan Transformer
Buka file `examples/transformer_demo.js` untuk melihat bagaimana kita membuat dan memanggil berbagai transformer energi.

---
*Back to [JS First Steps](../README.md)*
