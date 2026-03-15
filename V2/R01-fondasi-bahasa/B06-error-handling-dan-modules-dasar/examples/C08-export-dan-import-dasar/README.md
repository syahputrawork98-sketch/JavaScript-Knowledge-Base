# Example C08

Contoh runnable untuk bab **C08 - `export` dan `import` Dasar**.

## Tujuan Example

Folder ini menunjukkan bentuk paling dasar dari pertukaran nilai antar-module: mengekspor konstanta atau function dari satu file lalu mengimpornya di file lain.

## Daftar File

- `example.js` menunjukkan import konstanta `appName` dari `config.js`.
- `example-02.js` menunjukkan import function `add()` dari `math.js`.
- `example-03.js` menunjukkan import beberapa nilai dari `helpers.js`.
- `config.js` mengekspor konstanta `appName`.
- `math.js` mengekspor function penjumlahan sederhana.
- `helpers.js` mengekspor konstanta versi aplikasi dan function sapaan.

## Penjelasan Per File

### `example.js`

Contoh paling sederhananya:

```js
import { appName } from './config.js';
```

File ini menunjukkan bahwa module lain bisa menyediakan satu nilai sederhana yang langsung dipakai tanpa perlu menulis ulang isinya di entry file.

### `example-02.js`

Pola pentingnya:

```js
import { add } from './math.js';
```

Selain konstanta, module juga bisa mengekspor function. Entry file cukup memanggil function itu seperti function biasa setelah berhasil diimport.

### `example-03.js`

Kasus gabungannya:

```js
import { appVersion, greet } from './helpers.js';
```

Satu module dapat mengekspor lebih dari satu nilai. Import named seperti ini memungkinkan kita mengambil beberapa hal sekaligus dengan nama yang sama persis.

### `config.js`

File ini hanya berisi:

```js
export const appName = 'Belajar Modules';
```

Tujuannya untuk menunjukkan bentuk export konstanta yang paling ringkas.

### `math.js`

File pendukung ini memakai:

```js
export function add(a, b) {
  return a + b;
}
```

Contoh ini membantu pembaca melihat bahwa function utility kecil sangat cocok dijadikan module.

### `helpers.js`

File ini menggabungkan:

```js
export const appVersion = '1.0.0';
export function greet(name) { ... }
```

Dengan begitu pembaca bisa melihat satu module yang menyediakan beberapa nilai relevan sekaligus.

## Catatan Belajar

- `export` menentukan nilai apa yang dibuka keluar dari suatu module.
- `import` dipakai untuk mengambil nilai itu di file lain.
- Named import harus cocok dengan nama export yang tersedia.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
