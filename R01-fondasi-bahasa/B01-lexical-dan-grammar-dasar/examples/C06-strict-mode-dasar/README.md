# Example C06

Contoh runnable untuk bab **C06 - Strict Mode Dasar**.

## Tujuan Example

Folder ini membantu pembaca membiasakan diri dengan file yang berjalan dalam strict mode, sehingga pola deklarasi dan validasi dasar terlihat lebih disiplin.

## Daftar File

- `example.js` menunjukkan strict mode pada file sederhana.
- `example-02.js` menunjukkan function yang menghitung nilai dengan deklarasi yang rapi.
- `example-03.js` menunjukkan strict mode tetap cocok dipadukan dengan validasi input dasar.

## Penjelasan Per File

### `example.js`

Baris pertama mengaktifkan strict mode:

```js
'use strict';
```

Lalu file berjalan normal dengan deklarasi yang jelas:

```js
function run() {
  const totalPrice = 100;
  console.log('totalPrice:', totalPrice);
}
```

Output yang diharapkan:

```bash
totalPrice: 100
```

Pesan utamanya: strict mode bukan sesuatu yang menakutkan. Untuk kode yang rapi, semuanya tetap berjalan normal.

### `example-02.js`

Contoh ini menunjukkan function sederhana dalam strict mode:

```js
function createTotal(price, qty) {
  const total = price * qty;
  return total;
}
```

Output yang diharapkan:

```bash
300
```

Poin pentingnya adalah kebiasaan baik: semua nilai dideklarasikan dengan jelas dan alur return mudah diikuti.

### `example-03.js`

File ini menambahkan validasi input:

```js
function parseInput(value) {
  if (!value) {
    throw new Error('value is required');
  }
  return value.trim();
}
```

Output yang diharapkan untuk input yang diberikan:

```bash
ok
```

Contoh ini membantu pembaca melihat bahwa strict mode tidak hanya soal aturan parser, tetapi juga cocok dipakai bersama kebiasaan coding yang lebih aman.

## Catatan Belajar

- Letakkan `'use strict';` di awal file bila ingin menjadikannya baseline belajar.
- Strict mode paling terasa manfaatnya saat mencegah pola yang terlalu longgar.
- Meskipun contoh di sini tidak memicu error strict mode, bentuk filenya sudah membangun kebiasaan yang benar.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
