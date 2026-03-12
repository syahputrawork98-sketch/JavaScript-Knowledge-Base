# Example C02

Contoh runnable untuk bab **C02 - Parameter Lists Initializer dan Expected Argument Count**.

## Tujuan Example

Folder ini menunjukkan kapan default initializer dipakai, bagaimana urutan parameter memengaruhi evaluasi default, dan kenapa `function.length` tidak selalu sama dengan jumlah parameter tertulis.

## Daftar File

- `example.js` menunjukkan default parameter hanya aktif untuk `undefined`.
- `example-02.js` memperlihatkan efek urutan initializer antar-parameter.
- `example-03.js` menunjukkan aturan `function.length`.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
greet()
greet(undefined)
greet(null)
```

Poin pentingnya:

- default initializer aktif saat argumen bernilai `undefined`
- `null` tetap dianggap nilai nyata, jadi tidak memicu default

### `example-02.js`

File ini membandingkan:

```js
function safeOrder(a, b = a + 1)
function riskyOrder(a = b, b = 10)
```

Tujuannya adalah menunjukkan bahwa urutan parameter bukan sekadar urutan tulis, tetapi memengaruhi apakah initializer bisa mereferensikan nilai sebelumnya secara aman.

### `example-03.js`

Contoh ini mengajak pembaca membaca `function.length`:

```js
withDefault.length
defaultFirst.length
withRest.length
```

Yang dihitung oleh `length` adalah expected argument count, bukan jumlah semua parameter yang tampak di source.

## Catatan Belajar

- Default parameter berguna, tetapi tetap punya aturan evaluasi yang ketat.
- Jangan menganggap semua parameter setelah tanda `=` ikut dihitung sama oleh `function.length`.
- Urutan parameter penting lebih dari yang sering dibayangkan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.1.3`
- `15.1.4`
- `15.1.5`

Referensi chapter: `../../chapters/C02-parameter-lists-initializer-dan-expected-argument-count.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
