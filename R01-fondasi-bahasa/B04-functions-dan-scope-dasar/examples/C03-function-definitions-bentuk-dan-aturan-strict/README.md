# Example C03

Contoh runnable untuk bab **C03 - Function Definitions Bentuk dan Aturan Strict**.

## Tujuan Example

Folder ini membantu pembaca membedakan function declaration, function expression, dan beberapa aturan strict yang memengaruhi definisi fungsi.

## Daftar File

- `example.js` menunjukkan declaration vs expression.
- `example-02.js` mensimulasikan duplicate parameter error pada strict mode.
- `example-03.js` menunjukkan named function expression dan scope namanya.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan dua bentuk definisi fungsi:

```js
function declarationSum(a, b) { ... }
const expressionMultiply = function (a, b) { ... };
```

Tujuannya untuk memperjelas bahwa keduanya sama-sama membuat fungsi, tetapi berasal dari bentuk sintaks yang berbeda.

### `example-02.js`

Contoh ini memfokuskan perhatian ke strict mode:

```js
const source = "'use strict'; function bad(a, a) { return a; }";
```

Melalui `Function(source)`, pembaca bisa melihat bahwa duplicate parameter pada strict mode ditolak sebagai syntax-level problem.

### `example-03.js`

File ini menunjukkan named function expression:

```js
const calculator = function compute(a, b) { ... };
```

Nama `compute` berguna di dalam body fungsi, tetapi tidak tersedia sebagai binding biasa di outer scope.

## Catatan Belajar

- Function declaration dan function expression terlihat mirip, tetapi konteks pembuatannya berbeda.
- Strict mode membuat beberapa bentuk function menjadi lebih ketat.
- Nama internal pada function expression berguna untuk debugging, tetapi tidak otomatis bocor keluar.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.2`
- `15.2.1`
- `15.2.2`

Referensi chapter: `../../chapters/C03-function-definitions-bentuk-dan-aturan-strict.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
