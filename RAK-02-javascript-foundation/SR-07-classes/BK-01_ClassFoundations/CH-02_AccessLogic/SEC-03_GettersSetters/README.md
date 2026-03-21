# SEC-03: Getters & Setters (The Security Gatekeepers)

> **"Arus energi yang masuk ke unit tidak boleh sembarangan. Terlalu tinggi bisa meledak, terlalu rendah tidak berguna. Getters & Setters adalah 'Penjaga Gerbang' (Security Gatekeepers) yang menyaring dan memvalidasi setiap data sebelum benar-benar menyentuh sirkuit internal."**

**Accessor properties** (`get` dan `set`) memungkinkan kita mendefinisikan metode yang terlihat dan berperilaku seperti properti biasa dari luar, namun menjalankan logika fungsi di dalamnya.

---

## 1. Mental Model: "The Security Gatekeepers"

Bayangkan sebuah gudang penyimpanan data sensitif:
- **Setter (Input Guard)**: Petugas keamanan yang memeriksa setiap barang yang masuk. Jika data tidak valid atau berbahaya (misal: suhu negatif), petugas ini akan menolaknya sebelum sampai ke rak penyimpanan.
- **Getter (Output Guard)**: Petugas yang menyiapkan laporan. Ia mengambil data mentah dari rak, memformatnya agar cantik, lalu memberikannya kepada Anda dalam bentuk yang sudah siap digunakan.

![Class Accessor Premium](./assets/class_accessor_premium.svg)

---

## 2. Implementasi Berpasangan

Sangat disarankan untuk memasangkan Getters/Setters dengan **Private Fields** agar data mentah benar-benar terlindungi dari akses langsung.

```javascript
class ReactorCore {
    #temperature = 25; // Internal State (Private)

    // GETTER: Laporan status
    get status() {
        return this.#temperature > 100 ? "CRITICAL" : "STABLE";
    }

    // SETTER: Gerbang Validasi
    set temperature(value) {
        if (value < 0) {
            console.error("Invalid Input: Temp cannot be below absolute zero!");
            return;
        }
        this.#temperature = value;
    }
}
```

---

## 3. Kekuatan "Derived Properties"

Getter juga sangat berguna untuk membuat "Properti Turunan" yang tidak perlu disimpan di memori, melainkan dihitung secara langsung saat dibutuhkan. Misalnya, menghitung `totalPower` dari `voltage` dan `current`.

---

## Arsitek Mindset: Keamanan Berlapis

Sebagai arsitek Hub:
- **Encapsulation**: Gunakan Getters/Setters untuk memberikan akses terkontrol pada private fields.
- **Data Integrity**: Setter adalah tempat pertahanan pertama Anda melawan bug dan data sampah.
- **Simplicity**: Targetkan agar pengguna class Anda merasa sedang mengakses properti biasa, tanpa perlu tahu bahwa ada logika validasi rumit yang berjalan di baliknya.
- **Performance Alert**: Jangan meletakkan logika yang terlalu berat di dalam accessor, karena akses properti biasanya diharapkan instan oleh sistem Hub.

---

## Hands-on: Lab Katup Regulator
Eksperimen dengan sistem keamanan energi dan pelaporan status otomatis di `examples/valve_lab.js`.

---
*Status: [status.md](../../../status.md)*
