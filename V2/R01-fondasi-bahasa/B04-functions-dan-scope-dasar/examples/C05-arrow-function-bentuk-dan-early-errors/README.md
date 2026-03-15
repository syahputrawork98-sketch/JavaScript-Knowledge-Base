# Example C05

Contoh runnable untuk bab **C05 - Arrow Function Bentuk dan Early Errors**.

## Tujuan Example

Folder ini membantu pembaca melihat bentuk arrow function, perbedaan body-nya, dan beberapa batasan sintaks penting.

## Daftar File

- `example.js` menunjukkan concise body vs block body.
- `example-02.js` menunjukkan bahwa arrow function bukan constructor.
- `example-03.js` mensimulasikan bentuk valid dan syntax error dasar.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan dua gaya arrow:

```js
const add = (a, b) => a + b;
const describe = (name) => {
  ...
  return ...
};
```

Tujuannya adalah menunjukkan bahwa concise body cocok untuk expression pendek, sedangkan block body lebih nyaman untuk langkah yang lebih banyak.

### `example-02.js`

Contoh ini menegaskan batasan penting:

```js
const p = new makePoint(1, 2);
```

Arrow function tidak punya `[[Construct]]`, jadi tidak bisa dipakai dengan `new`.

### `example-03.js`

File ini memakai `Function(source)` untuk membandingkan bentuk valid dan invalid, misalnya duplicate parameter pada bentuk strict-like. Ini membantu pembaca melihat bahwa sebagian masalah arrow function gagal di level parse, bukan saat runtime biasa.

## Catatan Belajar

- Arrow function bagus untuk expression ringkas dan callback.
- Jangan pakai arrow jika kamu butuh constructor.
- Saat syntax arrow terasa rumit, pecah dulu ke bentuk yang paling jelas.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.3`
- `15.3.1`
- `15.3.2`

Referensi chapter: `../../chapters/C05-arrow-function-bentuk-dan-early-errors.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
