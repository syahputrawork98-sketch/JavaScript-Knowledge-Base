# CH-02: TypedArrays (High-Speed Belts)

> **"Saat ban berjalan standar terlalu lambat untuk menangani aliran data numerik yang masif, Hub Energi beralih ke 'High-Speed Belts' (TypedArrays) yang dirancang khusus untuk memproses bit dan byte dengan kecepatan cahaya."**

`TypedArrays` adalah sekumpulan objek yang memungkinkan kita membaca dan menulis data biner mentah ke dalam alokasi memori yang tetap.

## 1. Mental Model: "High-Speed Belts"

Berbeda dengan `Array` biasa yang bisa menampung campuran apa pun, `TypedArray` hanya bisa menampung satu jenis tipe data numerik yang spesifik (misal: hanya Integer 8-bit). Ini seperti ban berjalan yang memiliki lubang-lubang presisi yang hanya pas untuk satu jenis baterai saja.

---

## 2. Arsitektur: Buffer & View

Untuk menggunakan ban berjalan cepat ini, kita butuh dua komponen:
1.  **ArrayBuffer**: Gudang penyimpanan memori mentah (tidak bisa diakses langsung).
2.  **TypedArray (View)**: Sabuk ban berjalan yang dipasang di atas gudang tersebut agar kita bisa memasukkan/mengambil data.

```javascript
// Membuat gudang 16 byte
const buffer = new ArrayBuffer(16);

// Memasang sabuk Int32 (tiap elemen butuh 4 byte, jadi total muat 4 elemen)
const int32View = new Int32Array(buffer);
int32View[0] = 1000;
```

---

## 3. Jenis-jenis Sabuk (Common Types)

- **`Uint8Array`**: 0 hingga 255 (Sangat populer untuk pengolahan gambar/file).
- **`Int32Array`**: Angka bulat besar dengan tanda (+/-).
- **`Float64Array`**: Angka desimal presisi tinggi (Sama seperti tipe `Number` standar).

---

## Arsitek Mindset: Kapan Menggunakan Sabuk Cepat?

Sebagai arsitek, gunakan `TypedArrays` saat Anda berhadapan dengan:
- **WebGL/Grafis**: Mengirim ribuan koordinat ke GPU.
- **Audio/Video Processing**: Mengolah aliran bit media secara real-time.
- **WebSocket/Network**: Memproses paket data biner mentah dari server.
- **File API**: Membaca gambar atau dokumen di browser.

---

## Hands-on: Lab Memori Biner
Buka file `examples/typed_array_lab.js` untuk melihat bagaimana kita mengelola buffer memori dan melihat satu data yang sama melalui berbagai jenis View yang berbeda.

---
*Status: [status.md](../../../status.md)*
