# CH-02: RegExp (Signal Patterns)

> **"Jika String adalah sinyalnya, maka `RegExp` adalah filter frekuensi yang sangat spesifik. Ia memungkinkan Anda mencari, menangkap, dan memvalidasi pola tertentu di tengah ribuan sinyal yang lewat di Hub Energi."**

`RegExp` (Regular Expression) adalah objek yang digunakan untuk mencocokkan teks dengan pola tertentu.

## 1. Mental Model: "Signal Patterns"

Bayangkan Anda mencari sinyal kerusakan di antara jutaan baris log. Alih-alih mencari satu kata spesifik, Anda mencari "setiap pesan yang dimulai dengan ERROR, diikuti oleh 3 angka, dan diakhiri dengan tanda seru". `RegExp` adalah bahasa untuk mendeskripsikan pola tersebut.

---

## 2. Membuat Filter Pola

Ada dua cara untuk membuat pemindai pola:
1.  **Literal (Statistik)**: `/pattern/flags` (Paling cepat dan umum).
2.  **Constructor (Dinamis)**: `new RegExp("pattern", "flags")` (Digunakan jika pola berubah-ubah).

### Bendera Kontrol (Flags)
- **`g` (Global)**: Cari di seluruh sinyal, jangan berhenti di temuan pertama.
- **`i` (Ignore Case)**: Tidak peduli huruf besar atau kecil.
- **`u` (Unicode)**: Memproses karakter energi tingkat lanjut.

---

## 3. Alat Pemindai (Methods)

- **`regex.test(string)`**: Memeriksa apakah pola ada (Hasil: True/False).
- **`regex.exec(string)`**: Mengambil informasi detail tentang temuan (Hasil: Array detail).
- **`string.match(regex)`**: Mengambil semua bagian teks yang cocok dengan pola.

```javascript
const signalPattern = /ERR-\d{3}/i;
const log = "System Status: err-502 Critical";

console.log(signalPattern.test(log)); // true
```

---

## Arsitek Mindset: Validasi vs Ekstraksi

Sebagai arsitek, gunakan `RegExp` untuk dua tugas utama:
1.  **Validasi**: Memastikan input (seperti email atau ID mesin) sesuai format sebelum masuk ke sistem.
2.  **Ekstraksi**: Mengambil data spesifik dari blok teks besar (seperti mengambil semua alamat IP dari log sensor).

**Peringatan**: Pola yang terlalu rumit bisa memakan banyak daya komputasi (*ReDoS*). Tetaplah sederhana dan gunakan komentar untuk menjelaskan pola yang kompleks.

---

## Hands-on: Lab Deteksi Pola
Buka file `examples/regexp_pattern_lab.js` untuk mencoba membangun filter pola untuk memvalidasi format ID Hub dan mengekstrak nilai numerik dari pesan teks.

---
*Status: [status.md](../../../status.md)*
