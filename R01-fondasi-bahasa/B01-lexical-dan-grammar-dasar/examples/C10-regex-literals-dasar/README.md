# Example C10

Contoh runnable untuk bab **C10 - Regex Literals Dasar**.

## Tujuan Example

Folder ini membantu pembaca melihat regex literal sebagai pola yang ditulis langsung di source code, lalu dipakai untuk `match()` dan `test()`.

## Daftar File

- `example.js` memperkenalkan `match()` dan `test()` sekaligus.
- `example-02.js` menunjukkan pola validasi sederhana.
- `example-03.js` menunjukkan regex dengan word boundary.

## Penjelasan Per File

### `example.js`

Contoh utama ini memuat dua regex:

```js
const out = text.match(/[a-z]at/g);
const re = /js/i;
```

Regex pertama mencari kata tiga huruf yang berakhiran `at`, sedangkan regex kedua mengecek apakah teks mengandung `js` tanpa peduli huruf besar-kecil.

Output yang diharapkan:

```bash
match: [ 'cat', 'bat', 'rat' ]
test JavaScript: true
test Python: false
```

### `example-02.js`

File ini lebih fokus dan terasa seperti kasus validasi:

```js
const input = 'abc-123';
const re = /^[a-z]+-\d+$/;
```

Pola ini berarti:

- mulai dari awal string
- satu atau lebih huruf kecil
- diikuti tanda `-`
- lalu satu atau lebih digit
- sampai akhir string

Hasilnya `true` untuk input yang diberikan.

### `example-03.js`

Contoh ini memperkenalkan `\b`:

```js
const result = items.match(/\b[a-z]at\b/g);
```

Word boundary membantu regex mencari kata utuh seperti `cat` dan `bat`, bukan potongan karakter di tengah kata lain.

## Catatan Belajar

- Regex literal cocok untuk pola statis yang ditulis langsung di kode.
- Mulailah dari regex pendek yang bisa dijelaskan, jangan langsung kompleks.
- Jika regex mulai sulit dibaca, pertimbangkan komentar singkat atau pecah konteksnya.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
