# CH-02: Set & WeakSet (Uniqueness Filter)

> **"Di dalam Hub Energi yang sibuk, kadang kita menerima ribuan sinyal yang sama berulang kali. `Set` bertugas sebagai penyaring otomatis yang memastikan setiap unit energi yang masuk adalah unik dan tidak terduplikasi."**

`Set` adalah koleksi nilai di mana setiap nilai hanya boleh muncul satu kali.

## 1. Mental Model: "Uniqueness Filter"

Bayangkan sebuah gerbang di pintu masuk Hub. Jika ada barang dengan identitas yang sama mencoba masuk, gerbang `Set` akan menolaknya. Ini sangat berguna untuk membersihkan data kotor atau duplikat secara instan.

![Map & Set Storage](../CH-01_MapWeakMap/assets/map_set_storage.svg)

---

## 2. Operasi Utama `Set`

- **`.add(val)`**: Mencoba memasukkan barang ke dalam koleksi.
- **`.has(val)`**: Memeriksa dengan cepat apakah barang sudah ada di dalam.
- **`.size`**: Mengetahui berapa banyak barang unik yang tersimpan.
- **`.clear()`**: Mengosongkan seluruh filter.

```javascript
const tags = new Set(["power", "energy", "power"]);
console.log(tags.size); // 2! "power" hanya dihitung satu kali.

// Trick Arsitek: Menghapus duplikat dari Array secara instan
const duplicateArray = [1, 2, 2, 3, 4, 4];
const uniqueArray = [...new Set(duplicateArray)];
console.log(uniqueArray); // [1, 2, 3, 4]
```

---

## 3. WeakSet: Private Unique Groups

Sama seperti `WeakMap`, `WeakSet` hanya bisa menampung **objek** dan bersifat "lemah".

### Mental Model: "Ghost Filter"
`WeakSet` digunakan untuk menandai objek-objek tertentu (misal: mesin yang sedang dalam pemeliharaan) tanpa menghalangi objek tersebut untuk dihapus dari memori jika sudah tidak digunakan lagi di tempat lain.

---

## Arsitek Mindset: Integritas Tanpa Duplikasi

Gunakan **Set** saat Anda tidak peduli dengan urutan atau pasangan kunci-nilai, melainkan hanya peduli pada **apakah sesuatu itu ada atau tidak** dan memastikan **tidak ada elemen yang ganda**. Ini jauh lebih efisien daripada menggunakan `Array.indexOf()` atau `Array.includes()` berkali-kali di dalam loop.

---

## Hands-on: Lab Penyaring Unik
Buka file `examples/set_filter_lab.js` untuk melihat bagaimana kita membersihkan log energi dari entri duplikat dan mengelola daftar mesin aktif menggunakan `WeakSet`.

---
*Status: [status.md](../../../status.md)*
