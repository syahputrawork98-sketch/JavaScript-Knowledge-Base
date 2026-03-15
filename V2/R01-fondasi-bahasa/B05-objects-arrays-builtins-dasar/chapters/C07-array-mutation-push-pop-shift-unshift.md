# C07 - Array Mutation: `push`, `pop`, `shift`, `unshift`

## Tujuan

Bab ini bertujuan memahami operasi mutable paling umum pada array untuk menambah dan menghapus elemen.

## Kenapa Bab Ini Penting

Dalam program nyata, daftar data jarang statis. Kita sering menambah item baru ke akhir array, mengambil item terakhir, atau menyisipkan item dari depan. Empat method ini adalah fondasi manipulasi daftar sebelum pembaca masuk ke transformasi array yang lebih tinggi.

## Konsep Inti

### 1. `push()` Menambah Elemen ke Akhir Array

```js
const fruits = ['apple', 'banana'];

fruits.push('mango');
console.log(fruits);
```

Method ini memutasi array asli dan mengubah `length`.

### 2. `pop()` Mengambil Elemen Terakhir

```js
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
```

`pop()` berguna saat kita perlu memproses atau membuang item paling belakang.

### 3. `unshift()` dan `shift()` Bekerja dari Depan Array

```js
fruits.unshift('orange');
const firstFruit = fruits.shift();
```

- `unshift()` menambah elemen ke depan.
- `shift()` mengambil elemen pertama.

## Praktik yang Direkomendasikan

- Pilih method berdasarkan arah operasi: depan atau belakang array.
- Ingat bahwa keempat method ini mengubah array asli.
- Simpan hasil `pop()` atau `shift()` jika nilai yang diambil masih dibutuhkan.

## Kesalahan Umum

- Mengira `push()` menghasilkan array baru tanpa mengubah array lama.
- Lupa bahwa `pop()` dan `shift()` mengembalikan elemen yang diambil.
- Menggunakan operasi depan/belakang tanpa sadar bahwa urutan elemen ikut berubah.

## Checkpoint Cepat

1. Apa beda `push()` dengan `unshift()`?
2. Nilai apa yang dikembalikan oleh `pop()` dan `shift()`?
3. Kenapa empat method ini disebut operasi mutable?

## Analogi

- Intuisi Singkat: Empat method ini mengatur pintu masuk dan keluar di dua ujung daftar.
- Analogi: Seperti antrean barang di rak berjalan; kita bisa menaruh barang di depan atau belakang, lalu mengambilnya dari salah satu ujung.
- Batas Analogi: Di JavaScript, perubahan itu langsung terjadi pada array yang sama, jadi semua referensi ke array tersebut melihat hasil yang baru.

## Ringkasan

- `push()` dan `pop()` bekerja di ujung belakang array.
- `unshift()` dan `shift()` bekerja di ujung depan array.
- Keempat method ini memutasi array asli dan sering dipakai untuk manipulasi daftar sederhana.

## Contoh Runnable

- Lihat contoh: `../examples/C07-array-mutation-push-pop-shift-unshift/example.js`
- Lihat contoh tambahan: `../examples/C07-array-mutation-push-pop-shift-unshift/example-02.js`
- Lihat contoh tambahan: `../examples/C07-array-mutation-push-pop-shift-unshift/example-03.js`
- Panduan: `../examples/C07-array-mutation-push-pop-shift-unshift/README.md`
