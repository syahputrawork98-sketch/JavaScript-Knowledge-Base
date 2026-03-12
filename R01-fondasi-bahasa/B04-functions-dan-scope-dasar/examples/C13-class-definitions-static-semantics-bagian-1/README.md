# Example C13

Contoh runnable untuk bab **C13 - Class Definitions Static Semantics Bagian 1**.

## Tujuan Example

Folder ini memperkenalkan struktur dasar class: constructor, instance method, dan beberapa aturan statis dasar.

## Daftar File

- `example.js` menunjukkan class dasar dengan constructor dan instance method.
- `example-02.js` mensimulasikan duplicate constructor sebagai early error.
- `example-03.js` membandingkan instance method dan static method.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan bentuk class yang paling dasar:

```js
class User {
  constructor(name) { ... }
  greet() { ... }
}
```

Tujuannya agar pembaca melihat hubungan antara constructor, instance, dan method dalam satu contoh kecil.

### `example-02.js`

Contoh ini memakai `Function(source)` untuk menunjukkan bahwa duplicate constructor ditolak sebagai early error. Ini penting karena pembaca melihat bahwa sebagian aturan class diverifikasi bahkan sebelum instance dibuat.

### `example-03.js`

File ini membandingkan:

- `tool.double(5)` sebagai instance method
- `MathTool.version()` sebagai static method

Perbedaan lokasinya penting untuk membangun intuisi tentang apa yang menempel pada class dan apa yang menempel pada instance.

## Catatan Belajar

- Constructor dan instance method adalah dua fondasi class yang paling awal harus dipahami.
- Static method tidak hidup pada instance.
- Banyak aturan class bersifat lebih ketat daripada object literal biasa.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.7`
- `15.7.1`
- `15.7.2`
- `15.7.3`

Referensi chapter: `../../chapters/C13-class-definitions-static-semantics-bagian-1.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
