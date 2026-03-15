# Example C12

Contoh runnable untuk bab **C12 - Async Generator Functions Instantiation dan Evaluation**.

## Tujuan Example

Folder ini menunjukkan bagaimana async generator diinstansiasi, bagaimana `next()` bekerja, dan bagaimana iterasi dapat dihentikan lebih awal.

## Daftar File

- `example.js` menunjukkan alur `next(value)` pada async generator.
- `example-02.js` menunjukkan manual iteration dengan `value` dan `done`.
- `example-03.js` menunjukkan penghentian awal via `return()`.

## Penjelasan Per File

### `example.js`

Contoh ini memperlihatkan bahwa:

```js
await iterator.next()
await iterator.next(10)
```

`next()` pada async generator mengembalikan Promise, dan nilai yang dikirim dari luar tetap masuk ke titik `yield` sebelumnya seperti pada generator biasa.

### `example-02.js`

File ini menunjukkan bentuk mentah hasil iterasi:

```js
{ value, done }
```

Bedanya, sekarang pembaca melihat objek itu melalui `await`, karena lifecycle iterasinya async.

### `example-03.js`

Contoh ini menunjukkan:

```js
await iterator.return('stopped')
```

Dengan ini, async generator dihentikan lebih awal dari luar, dan pembaca bisa melihat bagaimana status iterator berubah setelah `return()`.

## Catatan Belajar

- Async generator tetap mengikuti protocol iterator, hanya saja hasilnya dibungkus Promise.
- `value` dan `done` tetap dua hal yang harus dibaca bersama.
- `return()` tetap penting untuk mengontrol lifecycle iterasi, termasuk pada versi async.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.6.3`
- `15.6.4`
- `15.6.5`

Referensi chapter: `../../chapters/C12-async-generator-functions-instantiation-dan-evaluation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
