# CH-01: Exception Handling (The Safety Fuse Box)

> **"Kesalahan adalah hal yang tak terelakkan di Hub Energi yang kompleks. Exception Handling adalah 'Kotak Sekering' (Safety Fuse Box) yang mencegah seluruh sirkuit terbakar saat terjadi lonjakan arus (error) yang tak terduga."**

Exception handling memungkinkan kita untuk "menangkap" error saat mereka terjadi dan menanganinya secara elegan tanpa membuat aplikasi berhenti total.

## 1. Mental Model: "The Safety Fuse Box"

Bayangkan sirkuit energi Anda memiliki sekering pelindung:
- **`try`**: Bagian sirkuit tempat arus utama bekerja. Jika ada lonjakan, sekering akan putus.
- **`catch`**: Kotak penampung lonjakan. Di sini Anda melakukan prosedur pemulihan (misal: jalankan generator cadangan).
- **`finally`**: Tindakan pembersihan yang dilakukan **setiap saat**, tidak peduli apakah ada ledakan atau tidak (misal: menutup pintu lab).

![Error Fuse Box](./assets/error_fuse_box.svg)

---

## 2. Struktur Try-Catch-Finally

```javascript
try {
    // Alur kerja utama yang berisiko
    jalankanTurbinUtama();
} catch (error) {
    // Jalankan jika terjadi error di blok 'try'
    console.error("GANGGUAN TERDETEKSI:", error.message);
    jalankanTurbinCadangan();
} finally {
    // Selalu jalankan (Opsional)
    console.log("Membersihkan sisa-sisa uap di saluran.");
}
```

---

## 3. Mengapa Ini Penting?

`try...catch` penting saat Anda memang perlu mencegah sebuah error sinkron menghentikan alur yang sedang berjalan atau saat Anda ingin mengubah error menjadi respons yang lebih terkontrol. Namun, ia bukan solusi universal untuk semua masalah error. Pada alur asinkron, pola penanganannya bisa berbeda tergantung apakah Anda memakai callback, Promise, atau `async/await`.

---

## Arsitek Mindset: Tangkap, Identifikasi, Pulihkan

Sebagai arsitek keamanan:
- **Jangan menangkap error secara diam-diam** (silent catch). Berikan log atau notifikasi yang jelas.
- Gunakan blok **`finally`** untuk cleanup yang memang harus selalu dijalankan, seperti menutup resource atau melepaskan state sementara.

---

## Hands-on: Simulasi Ledakan Sirkuit
Buka file `examples/safety_fuse_lab.js` untuk melihat bagaimana `try...catch` menyelamatkan Hub Energi dari kegagalan total saat terjadi lonjakan data palsu.

---
*Status: [status.md](../../../status.md)*
