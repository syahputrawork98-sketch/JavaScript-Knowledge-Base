# C06 - Iterasi Array Dasar dengan Loop dan `forEach`

## Tujuan

Bab ini bertujuan memahami cara membaca isi array secara berurutan dengan loop dasar dan `forEach()`.

## Kenapa Bab Ini Penting

Setelah pembaca paham index dan `length`, langkah alami berikutnya adalah memproses seluruh isi array tanpa menulis akses satu per satu. Iterasi adalah pintu masuk ke hampir semua operasi data yang lebih tinggi, termasuk `map()`, `filter()`, dan pencarian elemen.

## Konsep Inti

### 1. Loop `for` Memberi Kontrol Penuh atas Index

```js
const fruits = ['apple', 'banana', 'mango'];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(i, fruits[i]);
}
```

Pola ini cocok saat kita memang perlu tahu posisi elemen.

### 2. `for...of` Membaca Nilai Array Secara Langsung

```js
for (const fruit of fruits) {
  console.log(fruit);
}
```

Pola ini lebih ringkas saat kita hanya butuh nilainya.

### 3. `forEach()` Cocok untuk Menjalankan Aksi pada Tiap Elemen

```js
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

`forEach()` nyaman dipakai untuk efek samping sederhana seperti logging atau membangun output.

## Praktik yang Direkomendasikan

- Mulai dari loop `for` saat pembaca masih membangun intuisi tentang index.
- Pakai `for...of` jika yang dibutuhkan hanya nilainya.
- Gunakan `forEach()` untuk aksi sederhana, bukan untuk menghentikan iterasi di tengah.

## Kesalahan Umum

- Menulis kondisi loop yang melewati batas `length`.
- Lupa bahwa `forEach()` tidak dirancang untuk `break` atau `continue`.
- Memilih pola iterasi yang terlalu rumit untuk kebutuhan yang sederhana.

## Checkpoint Cepat

1. Kapan loop `for` lebih berguna daripada `for...of`?
2. Kenapa `i < fruits.length` lebih tepat daripada `i <= fruits.length`?
3. Kapan `forEach()` terasa lebih nyaman dipakai?

## Analogi

- Intuisi Singkat: Iterasi adalah cara berjalan menyusuri seluruh isi daftar secara teratur.
- Analogi: Seperti memeriksa kursi di satu baris kelas; kita bisa mengecek berdasarkan nomor kursi atau langsung menyapa setiap siswa yang duduk.
- Batas Analogi: Di JavaScript, cara iterasi yang dipilih memengaruhi seberapa mudah kita mengakses index, nilai, atau mengontrol alur loop.

## Ringkasan

- Loop `for` memberi kontrol paling jelas atas index dan batas iterasi.
- `for...of` cocok saat kita hanya perlu membaca nilainya.
- `forEach()` nyaman untuk aksi sederhana pada setiap elemen.

## Contoh Runnable

- Lihat contoh: `../examples/C06-iterasi-array-dasar-dengan-loop-dan-foreach/example.js`
- Lihat contoh tambahan: `../examples/C06-iterasi-array-dasar-dengan-loop-dan-foreach/example-02.js`
- Lihat contoh tambahan: `../examples/C06-iterasi-array-dasar-dengan-loop-dan-foreach/example-03.js`
- Panduan: `../examples/C06-iterasi-array-dasar-dengan-loop-dan-foreach/README.md`
