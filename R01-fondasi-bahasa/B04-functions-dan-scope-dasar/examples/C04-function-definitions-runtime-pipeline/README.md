# Example C04

Contoh runnable untuk bab **C04 - Function Definitions Runtime Pipeline**.

## Tujuan Example

Folder ini memperlihatkan bagaimana function definition terhubung ke hoisting, evaluation order, dan closure.

## Daftar File

- `example.js` menunjukkan hoisting pada function declaration.
- `example-02.js` menunjukkan evaluation order function expression.
- `example-03.js` menunjukkan closure saat fungsi dibuat dan dipanggil.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
console.log(greet('Arta'));
function greet(name) { ... }
```

Ini menunjukkan bahwa function declaration sudah tersedia sebelum posisi tekstualnya dieksekusi.

### `example-02.js`

File ini membandingkannya dengan function expression:

```js
console.log(runTask('draft'));
const runTask = function (task) { ... };
```

Hasilnya berbeda karena binding `const` belum siap dipakai sebelum inisialisasinya selesai.

### `example-03.js`

Contoh ini memperkenalkan closure:

```js
function makeLogger(prefix) {
  return function log(message) {
    return `${prefix}: ${message}`;
  };
}
```

Setiap fungsi hasil `makeLogger(...)` tetap “mengingat” nilai `prefix` saat ia dibuat.

## Catatan Belajar

- Hoisting paling terasa pada function declaration.
- Function expression mengikuti urutan evaluasi runtime biasa.
- Closure adalah salah satu fondasi terpenting dalam JavaScript modern.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.2.3`
- `15.2.4`
- `15.2.5`
- `15.2.6`

Referensi chapter: `../../chapters/C04-function-definitions-runtime-pipeline.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
