# Example C05

Contoh runnable untuk bab **C05 - `throw` Dasar untuk Validasi**.

## Tujuan Example

Folder ini menunjukkan kapan program lebih baik melempar error secara sengaja daripada membiarkan input yang salah terus diproses diam-diam.

## Daftar File

- `example.js` menunjukkan validasi pembagi sebelum pembagian dilakukan.
- `example-02.js` menunjukkan penangkapan error hasil `throw` dengan `try...catch`.
- `example-03.js` menunjukkan validasi tipe input string sebelum method string dipakai.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
if (b === 0) {
  throw new Error('Pembagi tidak boleh 0');
}
```

Validasi dilakukan sebelum operasi inti berjalan. Jika kondisi tidak aman terdeteksi, function langsung melempar error dan menghentikan alur normal.

### `example-02.js`

Pola pentingnya:

```js
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log('error.message ->', error.message);
}
```

Contoh ini memperlihatkan pasangan alami `throw` dan `try...catch`: satu sisi melempar sinyal kegagalan, sisi lain menangkap dan membacanya.

### `example-03.js`

Kasus validasinya:

```js
if (typeof text !== 'string') {
  throw new Error('text harus string');
}
```

Alih-alih menunggu method `toUpperCase()` gagal dengan error yang kurang terarah, function ini melempar pesan validasi yang lebih jelas dari awal.

## Catatan Belajar

- `throw` berguna saat input salah harus dianggap sebagai masalah serius.
- Pesan error buatan sendiri sering lebih ramah dibaca daripada error turunan yang muncul belakangan.
- Validasi eksplisit membantu menjaga batas aman sebelum operasi penting dijalankan.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
