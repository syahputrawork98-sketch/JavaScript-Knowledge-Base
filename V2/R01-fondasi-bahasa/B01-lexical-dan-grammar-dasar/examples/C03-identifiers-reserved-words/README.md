# Example C03

Contoh runnable untuk bab **C03 - Identifiers dan Reserved Words**.

## Tujuan Example

Folder ini membantu pembaca memahami bentuk nama yang valid di JavaScript dan cara menghindari penamaan yang berpotensi bentrok dengan keyword bahasa.

## Daftar File

- `example.js` menunjukkan beberapa identifier valid untuk variabel, object, dan function.
- `example-02.js` menegaskan karakter yang umum dipakai pada identifier seperti angka di belakang, `_`, dan `$`.
- `example-03.js` menunjukkan strategi aman saat ingin memakai nama yang dekat dengan reserved word.

## Penjelasan Per File

### `example.js`

Contoh utama ini menampilkan identifier yang valid dan cukup realistis:

```js
const userName = 'Arta';
const _internalId = 'A1';
const cache = { hit: true };
```

Lalu file ini juga memperlihatkan identifier pada function dan parameter:

```js
function greetUser(name) {
  return `Hello, ${name}`;
}
```

Output yang diharapkan:

```bash
Arta A1 true
Hello, Arta
```

Insight utamanya: identifier bukan hanya nama variabel. Nama function dan parameter juga harus mengikuti aturan lexical yang sama.

### `example-02.js`

File ini memperjelas beberapa pola identifier yang valid:

```js
const user2 = 'valid';
const _user = 'valid';
const $meta = 'valid';
```

Contoh ini penting karena pemula sering ragu apakah angka, underscore, atau dollar sign boleh dipakai. Jawabannya: boleh, selama tidak melanggar aturan dasar seperti diawali angka atau mengandung spasi.

Output yang diharapkan:

```bash
valid valid valid
```

### `example-03.js`

File ini menunjukkan pendekatan aman untuk nama yang "mirip" reserved word:

```js
const returnMessage = 'ok';
const forWeek = 7;
```

Daripada memakai `return` atau `for` secara langsung sebagai identifier, contoh ini memilih nama deskriptif yang tetap aman.

Output yang diharapkan:

```bash
ok 7
```

## Catatan Belajar

- Gunakan nama yang jelas dan deskriptif seperti `userName` atau `orderStatus`.
- Hindari penamaan yang terlalu dekat dengan keyword jika bisa dibuat lebih spesifik.
- Saat ragu, tanyakan dua hal: apakah namanya valid secara sintaks, dan apakah mudah dibaca manusia.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
