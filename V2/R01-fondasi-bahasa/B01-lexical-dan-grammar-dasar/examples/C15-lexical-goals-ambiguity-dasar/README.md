# Example C15

Contoh runnable untuk bab **C15 - Lexical Goals dan Ambiguity Dasar**.

## Tujuan Example

Folder ini membantu pembaca melihat contoh konkret dari karakter `/` yang bisa dibaca sebagai division atau regex literal tergantung konteks parser.

## Daftar File

- `example.js` membandingkan division dan regex dalam satu file.
- `example-02.js` mengulang pola yang sama dengan nilai berbeda.
- `example-03.js` menunjukkan konteks parser yang tetap jelas di sekitar IIFE dan regex.

## Penjelasan Per File

### `example.js`

Contoh utama ini langsung memperlihatkan dua makna `/`:

```js
const division = 10 / 2;
const regex = /2/;
```

Karakter yang dipakai sama, tetapi parser membacanya berbeda karena konteks sintaksnya berbeda.

Output yang diharapkan:

```bash
division: 5
regex test on 12: true
```

Ini adalah contoh paling sederhana untuk membangun intuisi tentang lexical ambiguity.

### `example-02.js`

File ini mengulang pola yang sama:

```js
const a = 12 / 3;
const re = /3/;
```

Tujuannya agar pembaca tidak mengira contoh sebelumnya hanya kebetulan. Pola konteks parser ini berlaku secara umum.

### `example-03.js`

Contoh ini sedikit lebih kaya:

```js
const total = 4 + 6;
(function () {
  const pattern = /x/;
  console.log('total:', total, 'regex:', pattern.test('text'));
})();
```

Di sini pembaca melihat bahwa:

- statement sebelumnya tetap jelas
- regex bisa muncul aman di context function
- parser memakai konteks grammar, bukan sekadar membaca satu karakter secara terisolasi

Output yang diharapkan:

```bash
total: 10 regex: true
```

## Catatan Belajar

- Jangan berpikir parser membaca JavaScript hanya per karakter tanpa konteks.
- Tulis kode dengan batas statement yang jelas agar aman untuk parser dan mudah untuk manusia.
- Contoh ambiguitas seperti ini adalah alasan mengapa style yang eksplisit biasanya lebih baik.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
