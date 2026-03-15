# Example C09

Contoh runnable untuk bab **C09 - Generator Functions Dasar**.

## Tujuan Example

Folder ini memperlihatkan dasar generator: `yield`, urutan `next()`, perbedaan `yield` dan `return`, serta konsumsi dengan `for...of`.

## Daftar File

- `example.js` menunjukkan generator dasar dan urutan `next()`.
- `example-02.js` membandingkan `yield` dan `return`.
- `example-03.js` menunjukkan konsumsi generator dengan `for...of`.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan generator sederhana:

```js
function* ticketQueue() {
  yield 'ticket-1';
  yield 'ticket-2';
  yield 'ticket-3';
}
```

Setiap `next()` menggerakkan eksekusi ke `yield` berikutnya. Ini adalah mental model inti generator.

### `example-02.js`

Contoh ini sangat penting karena membedakan:

- `yield` yang menghasilkan nilai sementara
- `return` yang menutup generator

Setelah `return`, iterasi dianggap selesai.

### `example-03.js`

File ini menunjukkan konsumsi generator dengan `for...of`, sehingga pembaca melihat bahwa generator tidak harus selalu diakses manual lewat `next()`.

## Catatan Belajar

- Generator bukan langsung “menghasilkan semua data”, tetapi menyalurkannya bertahap.
- `yield` dan `return` punya peran yang berbeda jelas.
- `for...of` sering menjadi cara konsumsi yang paling nyaman dibaca.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.5`
- `15.5.1`
- `15.5.2`

Referensi chapter: `../../chapters/C09-generator-functions-dasar.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
