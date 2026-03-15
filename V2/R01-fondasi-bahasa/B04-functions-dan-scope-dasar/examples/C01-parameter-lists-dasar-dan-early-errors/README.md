# Example C01

Contoh runnable untuk bab **C01 - Parameter Lists Dasar dan Early Errors**.

## Tujuan Example

Folder ini membantu pembaca melihat bentuk parameter fungsi yang valid dan mengenali bahwa sebagian kesalahan parameter sudah gagal sejak fase parse.

## Daftar File

- `example.js` menunjukkan parameter biasa, destructuring, dan rest parameter.
- `example-02.js` mensimulasikan early error lewat `Function(...)`.
- `example-03.js` menunjukkan urutan pengisian parameter saat fungsi dipanggil.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan tiga bentuk parameter yang umum:

- parameter biasa seperti `name, role`
- destructuring parameter seperti `{ id, active }`
- rest parameter seperti `...extraTags`

Tujuannya agar pembaca melihat bahwa “parameter fungsi” tidak selalu hanya daftar nama sederhana.

### `example-02.js`

Contoh ini sangat penting karena memakai `Function(source)` untuk mensimulasikan parse:

```js
Function(source);
```

Dengan cara ini, pembaca bisa melihat bahwa beberapa bentuk parameter tidak gagal saat fungsi dijalankan, tetapi sudah ditolak saat source diparse.

### `example-03.js`

File ini menyorot perilaku pemanggilan:

```js
pair('A')
pair('A', 'B', 'C')
withRest('head', 'x', 'y', 'z')
```

Poin pentingnya:

- argumen yang tidak dikirim membuat parameter biasa bernilai `undefined`
- argumen berlebih diabaikan kecuali ada rest parameter

## Catatan Belajar

- Bentuk parameter memengaruhi cara data masuk ke fungsi.
- Early error berarti bug sudah muncul sebelum body fungsi sempat dijalankan.
- Rest parameter sangat berguna ketika jumlah argumen tambahan tidak tetap.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.1`
- `15.1.1`
- `15.1.2`

Referensi chapter: `../../chapters/C01-parameter-lists-dasar-dan-early-errors.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
