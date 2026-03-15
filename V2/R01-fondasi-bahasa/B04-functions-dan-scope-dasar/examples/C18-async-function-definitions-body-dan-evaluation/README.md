# Example C18

Contoh runnable untuk bab **C18 - Async Function Definitions Body dan Evaluation**.

## Tujuan Example

Folder ini menunjukkan alur eksekusi async function saat bertemu `await`, termasuk timing dan rejection.

## Daftar File

- `example.js` menunjukkan alur sebelum dan sesudah `await`.
- `example-02.js` menunjukkan timing async function expression.
- `example-03.js` menunjukkan bahwa `throw` menjadi Promise rejection.

## Penjelasan Per File

### `example.js`

File utama ini sengaja kecil:

```js
console.log('before await');
const value = await Promise.resolve('done');
console.log('after await =>', value);
```

Tujuannya agar pembaca jelas melihat titik jeda yang dibawa `await`.

### `example-02.js`

Contoh ini membandingkan akses sebelum dan sesudah assignment:

```js
console.log(sum(4, 5));
const sum = async function (a, b) { ... };
```

Async function expression tetap mengikuti urutan evaluasi binding biasa.

### `example-03.js`

File ini menunjukkan:

```js
throw new Error('task failed');
```

di dalam async function. Error tersebut tidak keluar sebagai throw sinkron biasa, melainkan sebagai Promise rejection.

## Catatan Belajar

- `await` mengubah alur body async function, bukan hanya nilainya.
- Async function expression tetap tunduk pada aturan initialization binding seperti expression lain.
- Error dalam async function harus dibaca dengan kacamata Promise, bukan hanya try/catch sinkron.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.8.3`
- `15.8.4`
- `15.8.5`

Referensi chapter: `../../chapters/C18-async-function-definitions-body-dan-evaluation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
