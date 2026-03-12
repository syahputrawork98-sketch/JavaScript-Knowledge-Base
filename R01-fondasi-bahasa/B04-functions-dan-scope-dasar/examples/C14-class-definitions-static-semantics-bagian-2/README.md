# Example C14

Contoh runnable untuk bab **C14 - Class Definitions Static Semantics Bagian 2**.

## Tujuan Example

Folder ini memperlihatkan pemisahan elemen static dan instance, serta validasi private identifier dasar.

## Daftar File

- `example.js` menunjukkan elemen static vs instance.
- `example-02.js` menunjukkan validasi private identifier.
- `example-03.js` menunjukkan error saat static method dipanggil dari instance.

## Penjelasan Per File

### `example.js`

Contoh utama ini membandingkan:

- `Counter.description` sebagai static field
- `counter.value` sebagai state instance

Dengan begitu, pembaca bisa melihat bahwa class punya “ruang sendiri” yang berbeda dari object hasil `new`.

### `example-02.js`

File ini memperlihatkan validasi private identifier melalui parse simulation, misalnya saat field private dipakai tanpa deklarasi yang sah. Ini penting karena private field punya aturan yang jauh lebih ketat daripada property biasa.

### `example-03.js`

Contoh ini menunjukkan kesalahan umum:

```js
user.create('Nabila')
```

Padahal `create` adalah static method. Ini membantu pembaca membedakan “dipanggil dari class” dan “dipanggil dari instance”.

## Catatan Belajar

- Static dan instance hidup di tempat yang berbeda.
- Private identifier bukan sekadar gaya penamaan; ia bagian dari grammar class yang ketat.
- Banyak error class muncul karena salah memetakan apakah anggota itu static atau instance.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.7.4`
- `15.7.5`
- `15.7.6`
- `15.7.7`

Referensi chapter: `../../chapters/C14-class-definitions-static-semantics-bagian-2.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
