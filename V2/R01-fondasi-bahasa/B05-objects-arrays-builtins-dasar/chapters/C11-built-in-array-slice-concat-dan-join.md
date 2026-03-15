# C11 - Built-in Array: `slice`, `concat`, dan `join`

## Tujuan

Bab ini bertujuan memahami built-in array dasar yang aman untuk mengambil bagian data, menggabungkan daftar, dan menyusun output string.

## Kenapa Bab Ini Penting

Setelah pembaca memahami mutasi dan operasi non-mutable, tiga method ini menjadi sangat berguna dalam pekerjaan sehari-hari. `slice()` membantu mengambil sebagian data, `concat()` membantu menggabungkan daftar tanpa merusak yang lama, dan `join()` membantu mengubah daftar menjadi teks yang lebih siap ditampilkan.

## Konsep Inti

### 1. `slice()` Mengambil Sebagian Array

```js
const fruits = ['apple', 'banana', 'mango', 'orange'];
const selected = fruits.slice(1, 3);

console.log(selected);
```

`slice()` menghasilkan array baru dan tidak mengubah array asli.

### 2. `concat()` Menggabungkan Array Menjadi Array Baru

```js
const first = ['apple', 'banana'];
const second = ['mango'];
const combined = first.concat(second);

console.log(combined);
```

Method ini berguna saat kita ingin menyusun daftar baru dari beberapa sumber.

### 3. `join()` Mengubah Array Menjadi String

```js
const tags = ['js', 'array', 'basic'];
console.log(tags.join(', '));
```

`join()` cocok saat data array perlu ditampilkan sebagai teks.

## Praktik yang Direkomendasikan

- Gunakan `slice()` saat ingin mengambil sebagian data tanpa mutasi.
- Gunakan `concat()` saat ingin menggabungkan daftar dan menjaga sumber tetap utuh.
- Gunakan `join()` saat output akhir yang dibutuhkan adalah string.

## Kesalahan Umum

- Mengira `slice()` dan `concat()` mengubah array asli.
- Lupa bahwa hasil `join()` bukan lagi array, melainkan string.
- Salah menafsirkan batas akhir `slice(start, end)` sebagai posisi yang ikut diambil.

## Checkpoint Cepat

1. Apa beda hasil `slice()` dan `join()`?
2. Kenapa `concat()` sering terasa lebih aman daripada mutasi manual?
3. Pada `slice(1, 3)`, elemen index mana saja yang diambil?

## Analogi

- Intuisi Singkat: Tiga method ini membantu menyalin, menyusun ulang, dan menyajikan daftar.
- Analogi: Seperti mengambil beberapa halaman fotokopi, menggabungkan dua berkas, lalu menyusun daftar isi menjadi satu baris teks.
- Batas Analogi: Di JavaScript, ketiganya mengembalikan tipe hasil yang berbeda sesuai tujuan: array baru untuk `slice()` dan `concat()`, string untuk `join()`.

## Ringkasan

- `slice()` mengambil sebagian array tanpa mengubah sumber.
- `concat()` menggabungkan beberapa daftar menjadi array baru.
- `join()` menyusun elemen array menjadi string.

## Contoh Runnable

- Lihat contoh: `../examples/C11-built-in-array-slice-concat-dan-join/example.js`
- Lihat contoh tambahan: `../examples/C11-built-in-array-slice-concat-dan-join/example-02.js`
- Lihat contoh tambahan: `../examples/C11-built-in-array-slice-concat-dan-join/example-03.js`
- Panduan: `../examples/C11-built-in-array-slice-concat-dan-join/README.md`
