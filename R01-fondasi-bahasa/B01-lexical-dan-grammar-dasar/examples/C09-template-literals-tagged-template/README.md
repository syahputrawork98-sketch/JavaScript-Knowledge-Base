# Example C09

Contoh runnable untuk bab **C09 - Template Literals dan Tagged Template Dasar**.

## Tujuan Example

Folder ini membantu pembaca memahami interpolasi string dengan backtick dan mengenal bentuk awal tagged template.

## Daftar File

- `example.js` menunjukkan template literal biasa dan tagged template dalam satu file.
- `example-02.js` menampilkan interpolasi sederhana untuk kasus produk dan harga.
- `example-03.js` memperlihatkan tagged template untuk formatting currency.

## Penjelasan Per File

### `example.js`

Bagian pertama file ini adalah template literal biasa:

```js
const name = 'Arta';
const message = `Halo, ${name}!`;
```

Lalu bagian berikut mengenalkan fungsi tag:

```js
function tag(strings, value) {
  return `${strings[0]}[${value}]`;
}

const tagged = tag`User: ${name}`;
```

Output yang diharapkan:

```bash
Halo, Arta!
User: [Arta]
```

Contoh ini membantu pembaca melihat perbedaan antara template literal biasa dan template yang diproses fungsi khusus.

### `example-02.js`

Contoh ini sengaja sederhana:

```js
const product = 'Book';
const price = 75000;

console.log(`Produk: ${product}, Harga: ${price}`);
```

Kelebihannya langsung terasa dibanding string concatenation, terutama saat isi pesan punya beberapa variabel.

### `example-03.js`

File ini memperlihatkan tagged template yang sedikit lebih praktis:

```js
function currency(strings, value) {
  return `${strings[0]}Rp${value.toLocaleString('id-ID')}`;
}
```

Saat dipakai:

```js
console.log(currency`Total: ${amount}`);
```

output yang diharapkan menjadi:

```bash
Total: Rp120.000
```

Ini memberi gambaran konkret bahwa tagged template bisa dipakai untuk formatting yang reusable.

## Catatan Belajar

- Interpolasi hanya bekerja pada backtick, bukan single atau double quote.
- Jangan menaruh expression yang terlalu rumit di dalam `${...}`.
- Tagged template berguna saat kita ingin mengontrol hasil akhir string secara khusus.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
