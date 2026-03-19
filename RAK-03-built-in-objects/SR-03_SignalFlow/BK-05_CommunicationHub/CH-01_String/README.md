# CH-01: String (Textual Signal)

> **"Teks adalah sinyal utama yang mengalir antar komponen Hub Energi. `String` adalah protokol pembungkus data tekstual yang memungkinkan kita memotong, menggabungkan, dan memeriksa muatan pesan dengan presisi tinggi."**

Objek global `String` menyediakan alat bantu untuk manipulasi deretan karakter (teks).

## 1. Mental Model: "Textual Signal"

Bayangkan sebuah pesan teks yang mengalir melalui kabel optik Hub. Pesan ini bisa sangat panjang, memiliki spasi, atau berisi karakter khusus. Objek `String` memberikan Anda alat potong, alat sambung, dan alat deteksi isi pesan tersebut.

---

## 2. Toolbox Statis (Alat Generator Sinyal)

- **`String.fromCharCode(n...)`**: Menciptakan sinyal teks berdasarkan kode numerik karakter.
- **`String.raw`**: Membaca sinyal mentah tanpa memproses karakter *escape* (seperti `\n`).

---

## 3. Operasi Sinyal (Instance Methods)

### A. Alat Potong & Ambil (Extraction)
- **`.slice(start, end)`**: Mengambil segmen tertentu dari sinyal.
- **`.split(separator)`**: Memecah sinyal tunggal menjadi beberapa bagian di ban berjalan (Array).
- **`.trim()`**: Membersihkan derau (*noise*) atau spasi kosong di ujung sinyal.

### B. Alat Deteksi (Search)
- **`.includes(sub)`**: Memeriksa apakah kata kunci tertentu ada dalam sinyal.
- **`.startsWith()` / `.endsWith()`**: Memeriksa identitas pengirim atau tujuan sinyal.

### C. Transformasi Sinyal
- **`.replace()` / `.replaceAll()`**: Mengganti komponen sinyal yang rusak dengan yang baru.
- **`.toUpperCase()` / `.toLowerCase()`**: Mengatur amplitudo/kekuatan sinyal.

```javascript
const signal = " POWER-ACTIVE ";
const cleaned = signal.trim().toLowerCase();
console.log(cleaned.includes("power")); // true
```

---

## Arsitek Mindset: Memahami Immutability Sinyal

Ingatlah bahwa sinyal teks di JavaScript bersifat **Immutable**. Setiap kali Anda melakukan transformasi (seperti `.replace()` atau `.trim()`), Anda tidak mengubah sinyal asli, melainkan menciptakan **sinyal baru** dengan data yang telah dimodifikasi. Pastikan Anda menyimpan hasil transformasinya ke dalam variabel baru!

---

## Hands-on: Lab Inspeksi Sinyal
Buka file `examples/string_signal_lab.js` untuk mencoba berbagai teknik pembersihan dan pembedahan pesan teks yang masuk ke Hub Energi.

---
*Status: [status.md](../../../status.md)*
