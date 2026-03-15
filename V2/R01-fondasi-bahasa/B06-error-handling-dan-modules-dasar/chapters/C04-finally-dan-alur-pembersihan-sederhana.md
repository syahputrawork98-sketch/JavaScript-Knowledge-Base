# C04 - `finally` dan Alur Pembersihan Sederhana

## Tujuan

Bab ini bertujuan memahami kapan `finally` dipakai untuk langkah penutup yang harus tetap berjalan.

## Kenapa Bab Ini Penting

Saat sebuah operasi selesai, kadang ada langkah penutup yang tetap perlu dijalankan baik operasi itu berhasil maupun gagal. Misalnya, menampilkan pesan penutup, mengembalikan status antarmuka, atau merapikan penanda proses. `finally` membantu menjaga bagian akhir alur itu tetap konsisten.

## Konsep Inti

### 1. `finally` Berjalan Setelah `try...catch`

```js
try {
  console.log('mulai');
} catch (error) {
  console.log('ada error');
} finally {
  console.log('selesai');
}
```

Blok `finally` dijalankan setelah `try` dan `catch` selesai diproses.

### 2. `finally` Tetap Berjalan Baik Saat Berhasil Maupun Gagal

```js
try {
  JSON.parse('{"name":"Alya"}');
} finally {
  console.log('proses parse selesai');
}
```

Kalau tidak ada error, `finally` tetap berjalan. Kalau ada error dan ditangkap, `finally` juga tetap berjalan.

### 3. `finally` Cocok untuk Langkah Penutup, Bukan Logika Utama

```js
let isLoading = true;

try {
  riskyOperation();
} finally {
  isLoading = false;
}
```

`finally` paling cocok dipakai untuk pembersihan atau langkah penutup yang harus konsisten.

## Praktik yang Direkomendasikan

- Gunakan `finally` untuk langkah akhir yang harus dijalankan apa pun hasilnya.
- Simpan logika utama di `try`, bukan dipindah ke `finally`.
- Pakai `finally` untuk menjaga state penutup tetap konsisten.

## Kesalahan Umum

- Menaruh logika utama di `finally` padahal seharusnya ada di `try`.
- Mengira `finally` hanya jalan saat ada error.
- Memakai `finally` tanpa alasan jelas sehingga alur jadi lebih sulit dibaca.

## Checkpoint Cepat

1. Kapan `finally` dijalankan?
2. Kenapa `finally` cocok untuk langkah penutup?
3. Apa risiko jika logika utama justru dipindah ke `finally`?

## Analogi

- Intuisi Singkat: `finally` adalah langkah beres-beres setelah proses utama selesai.
- Analogi: Seperti menutup meja kerja setelah tugas selesai; entah tugasnya lancar atau sempat bermasalah, meja tetap perlu dirapikan.
- Batas Analogi: Di JavaScript, `finally` bukan tempat menyelesaikan inti pekerjaan, melainkan tempat memastikan langkah penutup tetap terjadi.

## Ringkasan

- `finally` dijalankan setelah alur `try...catch`.
- `finally` cocok untuk langkah penutup yang harus selalu terjadi.
- Menggunakan `finally` dengan tepat membantu alur program lebih konsisten.

## Contoh Runnable

- Lihat contoh: `../examples/C04-finally-dan-alur-pembersihan-sederhana/example.js`
- Lihat contoh tambahan: `../examples/C04-finally-dan-alur-pembersihan-sederhana/example-02.js`
- Lihat contoh tambahan: `../examples/C04-finally-dan-alur-pembersihan-sederhana/example-03.js`
- Panduan: `../examples/C04-finally-dan-alur-pembersihan-sederhana/README.md`
