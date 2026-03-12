# Example C19

Contoh runnable untuk bab **C19 - Async Arrow Function Definitions End to End**.

## Tujuan Example

Folder ini memperlihatkan async arrow function dari bentuk expression body sampai block body dan hubungannya dengan lexical `this`.

## Daftar File

- `example.js` menunjukkan expression body pada async arrow.
- `example-02.js` menunjukkan lexical `this` pada async arrow.
- `example-03.js` menunjukkan block body untuk langkah async bertahap.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan bentuk paling ringkas:

```js
const doubleLater = async (value) => value * 2;
```

Walaupun bentuknya sangat singkat, hasilnya tetap Promise yang harus di-`then` atau `await`.

### `example-02.js`

Contoh ini menyorot lexical `this`:

```js
return async () => this.value;
```

Async arrow mewarisi perilaku arrow biasa, jadi `this` tetap diambil dari lingkungan lexical tempat ia dibuat.

### `example-03.js`

File ini menunjukkan kapan block body terasa lebih tepat:

```js
const upper = await Promise.resolve(name.toUpperCase());
return `USER:${upper}`;
```

Begitu langkah async bertambah, block body memberi ruang baca yang lebih nyaman daripada expression body satu baris.

## Catatan Belajar

- Async arrow tetap Promise-based seperti async function lain.
- Ia juga tetap punya sifat lexical khas arrow function.
- Pilih expression body atau block body berdasarkan kejernihan baca, bukan hanya demi singkat.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.9`
- `15.9.1`
- `15.9.2`
- `15.9.3`
- `15.9.4`
- `15.9.5`

Referensi chapter: `../../chapters/C19-async-arrow-function-definitions-end-to-end.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
