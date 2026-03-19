# CH-02: Intl (The Translator)

> **"Hub Energi kita beroperasi dalam skala global. `Intl` adalah unit penerjemah otomatis yang memastikan setiap laporan energi, tanggal, dan nilai mata uang disajikan dalam format yang dimengerti oleh arsitek di belahan dunia mana pun."**

Namespace `Intl` (Internationalization API) menyediakan alat bantu untuk pemformatan data yang sensitif terhadap bahasa dan lokasi.

## 1. Mental Model: "The Translator"

Bayangkan Hub Anda mengirimkan data ke berbagai kantor cabang di seluruh dunia. Tanpa `Intl`, Anda harus menulis kode manual yang rumit untuk mengubah "1000.00" menjadi "1.000,00" untuk cabang di Indonesia atau "1,000.00" untuk cabang di Amerika. `Intl` melakukan semua terjemahan format ini secara otomatis berdasarkan kode bahasa (Locale).

---

## 2. Alat Pemformatan Utama

### A. Format Waktu (DateTimeFormat)
Menyesuaikan tampilan jam dan tanggal sesuai budaya lokal.
```javascript
const date = new Date();
const translator = new Intl.DateTimeFormat("id-ID", { dateStyle: "full" });
console.log(translator.format(date)); // "Kamis, 19 Maret 2026"
```

### B. Format Angka & Mata Wang (NumberFormat)
Menyesuaikan pemisah ribuan dan simbol mata uang.
```javascript
const powerPrice = 1500000;
const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
});
console.log(currencyFormatter.format(powerPrice)); // "Rp 1.500.000,00"
```

### C. Waktu Relatif (RelativeTimeFormat)
Menghasilkan teks seperti "2 menit yang lalu" atau "besok".

---

## Arsitek Mindset: Gunakan Standar, Bukan Manual

Sebagai arsitek, hindari membuat fungsi pemformatan angka atau tanggal sendiri (seperti menggunakan `.split()` dan `.join()` pada string). API `Intl` jauh lebih akurat, menangani aturan bahasa yang sangat rumit (seperti penjamakan), dan sudah teroptimasi pada level mesin JavaScript.

---

## Hands-on: Lab Penerjemah Global
Buka file `examples/intl_translator_lab.js` untuk melihat bagaimana satu data energi yang sama ditampilkan secara berbeda dalam format Indonesia, Jepang, dan Amerika Serikat.

---
*Status: [status.md](../../../status.md)*
