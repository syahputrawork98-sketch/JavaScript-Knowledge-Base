# C07 - Mengapa Modules Diperlukan

## Tujuan

Bab ini bertujuan memahami mengapa kode perlu dipecah ke file yang lebih kecil dan bertanggung jawab jelas.

## Kenapa Bab Ini Penting

Saat program masih sangat kecil, menaruh semua kode dalam satu file terasa cukup. Tetapi begitu logika mulai bertambah, satu file besar cepat menjadi sulit dibaca, sulit dirawat, dan sulit diuji secara mental. Modules membantu kita membagi tanggung jawab kode menjadi bagian yang lebih jelas.

## Konsep Inti

### 1. Satu File Besar Cepat Sulit Dirawat

```js
const users = [];

function addUser(name) {}
function removeUser(name) {}
function printUsers() {}
function saveUsers() {}
```

Kalau semua logika dicampur di satu tempat, pembaca harus memegang terlalu banyak konteks sekaligus.

### 2. Modules Membantu Memisahkan Tanggung Jawab

```js
// user-store.js
export function addUser(name) {}
```

Dengan module, kita bisa menaruh logika yang saling terkait dalam file yang sama dan memisahkannya dari tanggung jawab lain.

### 3. Modules Membantu Kode Lebih Mudah Dibaca dan Digunakan Ulang

```js
import { addUser } from './user-store.js';
```

Saat fungsi ditempatkan di module yang jelas, file lain bisa memakai fungsi itu tanpa perlu menyalin logika.

## Praktik yang Direkomendasikan

- Pecah kode saat satu file mulai memegang banyak tanggung jawab.
- Kelompokkan fungsi berdasarkan tujuan yang saling terkait.
- Gunakan nama file module yang membantu pembaca menebak isinya.

## Kesalahan Umum

- Memecah file terlalu cepat tanpa alasan yang jelas.
- Membuat satu module berisi terlalu banyak peran yang tidak berhubungan.
- Menyalin fungsi antar file daripada berbagi lewat module.

## Checkpoint Cepat

1. Kenapa satu file besar cepat sulit dibaca?
2. Apa manfaat utama module bagi pembaca kode?
3. Kapan kode mulai layak dipisah ke file lain?

## Analogi

- Intuisi Singkat: Module membantu membagi pekerjaan besar menjadi meja kerja yang lebih rapi.
- Analogi: Seperti perpustakaan yang tidak menaruh semua topik dalam satu buku raksasa, tetapi memecahnya menjadi buku-buku dengan fokus yang jelas.
- Batas Analogi: Di JavaScript, module bukan hanya cara menyusun rak, tetapi juga cara resmi berbagi kode antar file.

## Ringkasan

- Modules membantu memecah kode menjadi bagian yang lebih fokus.
- Pemisahan file membuat program lebih mudah dibaca dan dirawat.
- Module yang baik biasanya punya tanggung jawab yang jelas.

## Contoh Runnable

- Lihat contoh: `../examples/C07-mengapa-modules-diperlukan/example.js`
- Lihat contoh tambahan: `../examples/C07-mengapa-modules-diperlukan/example-02.js`
- Lihat contoh tambahan: `../examples/C07-mengapa-modules-diperlukan/example-03.js`
- Panduan: `../examples/C07-mengapa-modules-diperlukan/README.md`
