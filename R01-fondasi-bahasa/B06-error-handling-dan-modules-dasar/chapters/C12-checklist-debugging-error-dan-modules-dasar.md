# C12 - Checklist Debugging Error dan Modules Dasar

## Tujuan

Bab ini bertujuan merangkum checklist praktis untuk membaca error dan melacak bug modul dasar.

## Kenapa Bab Ini Penting

Setelah mempelajari error handling dan modules dasar, pembaca perlu penutup yang membantu menggabungkan semuanya menjadi kebiasaan debugging sederhana. Dalam praktik nyata, yang dibutuhkan sering bukan teori tambahan, tetapi checklist yang bisa dipakai saat program gagal berjalan.

## Konsep Inti

### 1. Mulai dari Pesan Error yang Paling Dekat

```txt
SyntaxError: Unexpected token
```

Jenis error, pesan, dan lokasi kejadian tetap menjadi petunjuk pertama yang paling berguna.

### 2. Untuk Bug Module, Periksa Hubungan Antar File

```js
import { add } from './math.js';
```

Saat modul gagal, penyebab umum sering ada pada path file, bentuk export, atau bentuk import yang tidak cocok, termasuk tertukar antara default import dan named import.

### 3. Checklist Membantu Mengurangi Debugging yang Acak

```js
// cek path
// cek export
// cek import
```

Dengan checklist, pembaca tidak perlu menebak secara liar dari nol setiap kali error muncul.

## Praktik yang Direkomendasikan

- Baca error dulu, lalu cocokkan dengan kategori masalahnya.
- Untuk bug module, cek path, nama export, dan bentuk import secara berurutan.
- Pastikan bentuk import cocok dengan bentuk export: named dengan named, default dengan default.
- Uji bagian kecil lebih dulu sebelum menyimpulkan seluruh project rusak.

## Kesalahan Umum

- Langsung menyalahkan module tanpa membaca error yang sebenarnya.
- Mengubah banyak file sekaligus saat sumber masalah belum jelas.
- Tidak membedakan bug syntax, bug path, dan bug pemakaian nilai.
- Lupa mengecek apakah import memakai kurung kurawal pada kasus yang memang named export.

## Checkpoint Cepat

1. Apa langkah pertama saat program modular gagal dijalankan?
2. Mengapa path file harus dicek lebih awal?
3. Apa manfaat checklist dibanding debugging acak?

## Analogi

- Intuisi Singkat: Checklist debugging adalah rute pemeriksaan tetap saat sistem mulai bermasalah.
- Analogi: Seperti teknisi yang punya daftar cek sebelum membongkar seluruh mesin; ia memeriksa sumber daya, sambungan, dan komponen dasar lebih dulu.
- Batas Analogi: Di JavaScript, checklist membantu mempersempit arah, tetapi tetap harus dipadukan dengan pembacaan error yang nyata.

## Ringkasan

- Debugging dasar dimulai dari membaca error dengan benar.
- Pada modules, path, export, dan import adalah tiga titik cek yang sangat sering bermasalah.
- Mismatch antara default export dan named import adalah sumber bug pemula yang sangat umum.
- Checklist sederhana membantu debugging lebih tenang, cepat, dan terarah.

## Contoh Runnable

- Lihat contoh: `../examples/C12-checklist-debugging-error-dan-modules-dasar/example.js`
- Lihat contoh tambahan: `../examples/C12-checklist-debugging-error-dan-modules-dasar/example-02.js`
- Lihat contoh tambahan: `../examples/C12-checklist-debugging-error-dan-modules-dasar/example-03.js`
- Panduan: `../examples/C12-checklist-debugging-error-dan-modules-dasar/README.md`
