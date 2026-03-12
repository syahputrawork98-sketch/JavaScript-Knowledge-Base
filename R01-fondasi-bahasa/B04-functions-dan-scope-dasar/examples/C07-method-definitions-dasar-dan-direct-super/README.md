# Example C07

Contoh runnable untuk bab **C07 - Method Definitions Dasar dan Direct Super**.

## Tujuan Example

Folder ini memperlihatkan method shorthand pada object dan pengantar `super` untuk delegasi ke prototype parent.

## Daftar File

- `example.js` menunjukkan method shorthand object literal.
- `example-02.js` menunjukkan delegasi `super` ke parent prototype.
- `example-03.js` menunjukkan bentuk valid dan tidak valid penggunaan `super`.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan method shorthand:

```js
const profile = {
  name: 'Syahputra',
  greet() {
    return `Hello, ${this.name}`;
  }
};
```

Ini membantu pembaca melihat bahwa method definition terasa lebih natural dibanding menulis function property biasa.

### `example-02.js`

Contoh ini memperkenalkan `super` pada object yang mewarisi prototype:

```js
return `${super.greet(name)}. Nice to meet you.`;
```

Poin pentingnya adalah `super` dipakai untuk meneruskan perilaku parent, bukan sekadar mengganti nama object.

### `example-03.js`

File ini membandingkan penggunaan `super` yang invalid di function biasa dan valid di method shorthand. Ini penting karena `super` bukan keyword bebas yang bisa dipakai di semua bentuk fungsi.

## Catatan Belajar

- Method shorthand lebih dari sekadar singkatan syntax; ada semantic tambahan seperti dukungan `super`.
- `super` paling mudah dipahami sebagai “delegasi ke parent”.
- Jika `super` dipakai di tempat yang salah, masalahnya muncul sejak parse atau evaluasi awal.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.4`
- `15.4.1`
- `15.4.2`

Referensi chapter: `../../chapters/C07-method-definitions-dasar-dan-direct-super.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
