# Example C10

Contoh runnable untuk bab **C10 - Generator Functions Instantiation dan Evaluation**.

## Tujuan Example

Folder ini menunjukkan bagaimana nilai masuk dan keluar generator sepanjang proses evaluasi.

## Daftar File

- `example.js` menunjukkan alur `next(value)` antar-yield.
- `example-02.js` menunjukkan manual iteration dan pengecekan `done`.
- `example-03.js` menunjukkan penghentian generator lewat `return()`.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan generator yang menerima nilai dari luar:

```js
const a = yield 'step-1';
const b = yield a + 1;
return b + 1;
```

Nilai yang dikirim melalui `next(value)` masuk kembali ke generator pada posisi `yield` sebelumnya.

### `example-02.js`

Contoh ini menampilkan iterasi manual dengan:

```js
current = it.next();
while (!current.done) { ... }
```

Tujuannya agar pembaca melihat bentuk mentah dari protocol iterator, bukan hanya versi singkat seperti `for...of`.

### `example-03.js`

File ini menunjukkan:

```js
it.return('stopped-early')
```

Dengan ini, generator ditutup dari luar sebelum menyelesaikan seluruh `yield` yang tersedia.

## Catatan Belajar

- Generator dapat menerima data dari luar, bukan hanya mengirim data keluar.
- Objek hasil `next()` selalu perlu dibaca dengan pasangan `value` dan `done`.
- `return()` dari luar iterator adalah bagian penting dari kontrol lifecycle generator.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.5.3`
- `15.5.4`
- `15.5.5`

Referensi chapter: `../../chapters/C10-generator-functions-instantiation-dan-evaluation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
