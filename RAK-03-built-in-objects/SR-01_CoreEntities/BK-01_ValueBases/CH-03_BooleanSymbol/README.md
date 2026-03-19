# CH-03: Boolean & Symbol (Switches & IDs)

> **"Boolean adalah saklar energi paling sederhana (On/Off), sementara Symbol adalah kartu identitas unik yang menjamin tidak ada dua komponen hantu yang memiliki nama yang sama di Hub Energi."**

Bab ini membahas dua tipe data yang tampak sederhana namun memiliki peran krusial dalam integritas logika dan data.

## 1. Boolean: The Logic Switch

Meskipun ada global `Boolean`, kita hampir selalu bekerja dengan nilai primitifnya (`true`/`false`).

### Mental Model: "Energy Switches"
- **Truthy**: Komponen yang dianggap memiliki daya (seperti `1`, `"hello"`, `[]`, `{}`).
- **Falsy**: Komponen yang dianggap tidak memiliki daya (seperti `0`, `""`, `null`, `undefined`, `NaN`, `false`).

**Peringatan**: Jangan gunakan `new Boolean()`. Ini menciptakan objek, bukan primitif, dan bisa membingungkan logika `if` Anda.

---

## 2. Symbol: The Unique ID

`Symbol` diperkenalkan untuk memecahkan masalah tabrakan nama properti pada objek.

### Mental Model: "Forge-proof ID Cards"
Setiap kali Anda memanggil `Symbol()`, JavaScript mencetakkan sebuah Kartu Identitas yang **unik secara global**. Bahkan jika labelnya sama, kartunya berbeda.

```javascript
const id1 = Symbol("engine");
const id2 = Symbol("engine");

console.log(id1 === id2); // false! IDs are unique.
```

---

## 3. Kegunaan Symbol: Hidden Components

Anda bisa menggunakan Symbol sebagai kunci properti untuk menyembunyikan data sensitif di dalam Hub agar tidak sengaja terhapus atau terlihat saat inspeksi biasa (`Object.keys`).

```javascript
const PRIVATE_KEY = Symbol("secret");
const hub = {
    [PRIVATE_KEY]: "SUPER_ENERGY_123",
    publicID: "HUB-01"
};

console.log(Object.keys(hub)); // ["publicID"] -> Private key tersembunyi!
```

---

## Arsitek Mindset: Menjaga Integritas Identitas

Sebagai arsitek, gunakan **Symbol** saat Anda membangun *Plugin* atau *Libraries* eksternal untuk Hub Energi. Ini menjamin bahwa properti yang Anda tambahkan ke objek Hub tidak akan pernah bentrok dengan properti yang ditambahkan oleh arsitek lain di masa depan.

---

## Hands-on: Lab Saklar dan Identitas
Buka file `examples/boolean_symbol_lab.js` untuk melihat eksperimen tentang perbandingan identitas Symbol dan daftar komprehensif nilai Truthy/Falsy.

---
*Status: [status.md](../../../status.md)*
