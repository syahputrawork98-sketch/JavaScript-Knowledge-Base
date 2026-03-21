# CH-04: JSON Data (The Courier Package)

> **"Data energi antar Hub tidak dikirim dalam bentuk perangkat fisik. Ia dikemas ke dalam paket standar yang ringan, dapat dibaca oleh siapa pun, dan siap dikirim melalui jaringan global."**

Saat kita ingin mengirimkan data objek JavaScript ke sistem lain (seperti server atau database), kita tidak bisa mengirimkan "objek hidup" tersebut secara langsung. Kita perlu mengemasnya menjadi teks terstandarisasi yang disebut **JSON** (JavaScript Object Notation).

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- **Technical Specification**: [ECMA-404 JSON Data Interchange Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-404/)

## 🎓 Senior Terminology
- **JSON (JavaScript Object Notation)**: Format pertukaran data yang ringan dan mudah dibaca oleh manusia maupun mesin.
- **Serialization**: Proses mengubah objek JavaScript menjadi format string JSON untuk transmisi.
- **Deserialization**: Proses mengubah string JSON kembali menjadi objek JavaScript yang bisa dimanipulasi.

## 1. Mental Model: "Paket Kurir" (Courier Package)

- **JavaScript Object**: Adalah barang belanjaan yang sedang Anda gunakan (bisa dimodifikasi, punya metode/fungsi).
- **JSON (String)**: Adalah barang yang sudah **dikemas di dalam kardus lakban** (Teks murni). Barang di dalam kardus tidak bisa "hidup" atau menjalankan fungsi sampai ia dibongkar kembali.
- **`JSON.stringify()`**: Proses memasukkan barang ke kardus dan melakbannya (Packing).
- **`JSON.parse()`**: Proses membongkar kardus untuk mengambil isinya kembali (Unpacking).

## 2. Aturan Ketat JSON

Berbeda dengan objek JavaScript biasa, JSON memiliki protokol keamanan yang ketat:
1. **Double Quotes**: Semua properti dan data teks WAJIB menggunakan tanda kutip ganda (`"`). Kutip tunggal (`'`) dilarang.
2. **Key/Property**: Nama properti wajib dibungkus kutip ganda.
3. **No Methods**: Fungsi atau metode tidak bisa dikemas ke dalam JSON. Hanya data (string, number, boolean, array, object).

Example JSON:
```json
{
  "hubId": "H-001",
  "active": true,
  "loadKw": 2500
}
```

## 3. Packing & Unpacking (Stringify & Parse)

```javascript
const hubData = { name: "Central", load: 100 };

// 📦 PACKING (Object -> String)
const packet = JSON.stringify(hubData);
console.log(packet); // '{"name":"Central","load":100}'

// 🔓 UNPACKING (String -> Object)
const receivedObject = JSON.parse(packet);
console.log(receivedObject.name); // "Central"
```

---

## Arsitek Mindset: Universal Interoperability

Sebagai arsitek, gunakanlah JSON sebagai bahasa universal. Karena JSON adalah teks standar, data ini bisa dibaca oleh Hub yang menggunakan bahasa Python, Go, atau Rust sekalipun. Ini memastikan infrastruktur pengetahuan Anda bisa "berbicara" dengan sistem apa pun di dunia luar.

---

## Hands-on: Transmisi Paket Data
Buka file `examples/packet_transmission_demo.js` untuk mensimulasikan proses pengemasan dan pembongkaran data status reaktor.

---
*Back to [Introducing Objects](../README.md)*
