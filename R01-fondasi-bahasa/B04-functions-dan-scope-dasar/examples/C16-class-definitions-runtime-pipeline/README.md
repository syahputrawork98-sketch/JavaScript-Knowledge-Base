# Example C16

Contoh runnable untuk bab **C16 - Class Definitions Runtime Pipeline**.

## Tujuan Example

Folder ini memperlihatkan timing evaluasi class declaration dan class expression, termasuk field initializer saat instance dibuat.

## Daftar File

- `example.js` menunjukkan akses class sebelum dan sesudah declaration.
- `example-02.js` menunjukkan timing evaluasi class expression.
- `example-03.js` menunjukkan instance field initializer saat membuat instance.

## Penjelasan Per File

### `example.js`

Contoh ini sangat penting untuk mental model runtime:

```js
console.log(Book);
class Book { ... }
```

Pembaca bisa langsung melihat bahwa class declaration tidak bisa dipakai sebelum selesai dievaluasi.

### `example-02.js`

File ini menunjukkan class expression yang dibangun secara dinamis:

```js
return class Logger { ... };
```

Setiap pemanggilan `buildLoggerClass(...)` menghasilkan class yang dibentuk saat expression dijalankan.

### `example-03.js`

Contoh ini menyorot instance field initializer:

```js
token = this.createToken();
```

Saat `new Session()` dipanggil, inisialisasi field berjalan dan menghasilkan efek log yang bisa diamati.

## Catatan Belajar

- Class declaration tidak berperilaku seperti function declaration biasa.
- Class expression sangat dekat dengan konsep “buat class saat expression ini dijalankan”.
- Field initializer adalah bagian penting dari pipeline instansiasi class modern.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.7.12`
- `15.7.13`
- `15.7.14`
- `15.7.15`
- `15.7.16`

Referensi chapter: `../../chapters/C16-class-definitions-runtime-pipeline.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
