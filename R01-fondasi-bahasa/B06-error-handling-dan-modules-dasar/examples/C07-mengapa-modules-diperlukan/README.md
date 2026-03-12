# Example C07

Contoh runnable untuk bab **C07 - Mengapa Modules Diperlukan**.

## Tujuan Example

Folder ini membantu pembaca melihat transisi dari kode satu file ke kode modular, sehingga alasan pemisahan tanggung jawab terasa konkret, bukan sekadar teori.

## Daftar File

- `example.js` menunjukkan satu file kecil yang menampung state dan function terkait sekaligus.
- `example-02.js` menunjukkan versi modular dengan logic penyimpanan user dipindah ke `user-store.js`.
- `example-03.js` menunjukkan reuse function formatting dari `format-user.js`.
- `user-store.js` menyediakan `addUser()` dan `getUsers()` sebagai module penyimpanan sederhana.
- `format-user.js` menyediakan `formatUser()` untuk mengubah tampilan nama user.

## Penjelasan Per File

### `example.js`

Struktur utamanya:

```js
const users = [];
function addUser(name) { ... }
function printUsers() { ... }
```

Semua tanggung jawab masih berada di satu file. Untuk kasus kecil ini masih aman, tetapi contoh ini menjadi titik pembanding sebelum logic dipisahkan ke module.

### `example-02.js`

Perubahan pentingnya:

```js
import { addUser, getUsers } from './user-store.js';
```

State `users` dan function terkait dipindahkan ke file lain. Entry file cukup fokus pada alur pakai, bukan detail penyimpanan data.

### `example-03.js`

Contoh reuse-nya:

```js
import { formatUser } from './format-user.js';
```

Module kecil seperti formatter membuat logic yang sama mudah dipakai ulang dari beberapa tempat tanpa disalin manual.

### `user-store.js`

File pendukung ini menyimpan:

```js
const users = [];
```

Lalu mengekspor function untuk menambah dan membaca data. Tujuannya adalah memusatkan state dan API sederhana dalam satu module.

### `format-user.js`

File ini hanya berisi:

```js
export function formatUser(name) {
  return `User: ${name}`;
}
```

Contoh ini sengaja kecil agar pembaca melihat bahwa module tidak harus besar; bahkan satu function reusable pun layak dipisahkan jika membuat struktur kode lebih jelas.

## Catatan Belajar

- Modules membantu memisahkan tanggung jawab antarfile.
- Entry file menjadi lebih fokus pada alur penggunaan saat detail logic dipindah ke module lain.
- Reuse function kecil adalah salah satu manfaat paling cepat terasa dari modularisasi.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
