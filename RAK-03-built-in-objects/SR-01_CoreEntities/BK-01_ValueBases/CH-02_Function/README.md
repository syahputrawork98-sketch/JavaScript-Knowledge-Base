# CH-02: Function (The Engine Unit)

> **"Setiap blok logika di JavaScript sebenarnya adalah instance dari objek `Function`. Ini adalah unit mesin yang dapat dikonfigurasi dan diperiksa kinerjanya."**

Meskipun kita biasanya membuat fungsi dengan sintaks `function name() {}`, penting untuk memahami bahwa di balik layar, JavaScript menggunakan global `Function` object.

## 1. Mental Model: "The Engine Unit"

Setiap fungsi adalah sebuah **Unit Mesin** mandiri. Seperti mesin sungguhan, ia memiliki spesifikasi yang bisa dibaca di label luarnya (properti statis) dan memiliki instruksi internal yang bisa dijalankan.

---

## 2. Label Mesin (Static Properties)

Sebagai arsitek, Anda bisa memeriksa spesifikasi mesin tanpa menjalankannya:

- **`fn.name`**: Nama unit mesin (berguna untuk debugging).
- **`fn.length`**: Berapa banyak input (parameter) yang diharapkan oleh mesin ini.
- **`fn.toString()`**: Melihat diagram sirkuit internal (kode sumber) dari mesin tersebut dalam bentuk teks.

```javascript
function addPower(a, b) {}
console.log(addPower.name);   // "addPower"
console.log(addPower.length); // 2
```

---

## 3. Konfigurasi Mesin (Call, Apply, Bind)

Fungsi sebagai objek memiliki metode bawaan untuk mengatur bagaimana mereka beroperasi (seperti yang kita bahas di RAK-02):
- **`.call()` & `.apply()`**: Menjalankan mesin dengan sumber daya (`this`) tertentu secara instan.
- **`.bind()`**: Membuat salinan mesin yang sudah "terkunci" pada sumber daya tertentu untuk digunakan nanti.

---

## Arsitek Mindset: Memahami Kapasitas Mesin

Mengetahui `fn.length` sangat berguna saat Anda membangun sistem otomatis (seperti *Higher-order Functions*) yang perlu beradaptasi berdasarkan jumlah argumen yang dibutuhkan oleh sebuah fungsi. Anda bisa mendeteksi apakah sebuah mesin butuh satu kabel input atau sepuluh kabel input sebelum Anda menghubungkannya ke jaringan.

---

## Hands-on: Inspeksi Unit Mesin
Buka file `examples/function_labels.js` untuk mencoba membaca label dan spesifikasi dari berbagai fungsi di Hub Energi.

---
*Status: [status.md](../../../status.md)*
