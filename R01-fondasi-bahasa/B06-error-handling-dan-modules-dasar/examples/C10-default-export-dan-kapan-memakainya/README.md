# Example C10

Contoh runnable untuk bab **C10 - Default Export dan Kapan Memakainya**.

## Tujuan Example

Folder ini membantu pembaca membedakan default export dari named export, sekaligus melihat kapan default export terasa cocok untuk "nilai utama" dari suatu module.

## Daftar File

- `example.js` menunjukkan import default function `greet` dari `greet.js`.
- `example-02.js` menunjukkan import default object konfigurasi dari `config.js`.
- `example-03.js` menunjukkan penggunaan default export berdampingan dengan named export.
- `greet.js` mengekspor function utama sebagai default export.
- `config.js` mengekspor object konfigurasi sebagai default export.
- `named-tools.js` mengekspor helper `formatName()` sebagai named export.

## Penjelasan Per File

### `example.js`

Contoh dasarnya:

```js
import greet from './greet.js';
```

Karena `greet.js` punya default export, file pemanggil bebas memilih nama lokal saat mengimpor nilai tersebut.

### `example-02.js`

Kasus object utamanya:

```js
import appConfig from './config.js';
```

Default export terasa pas saat satu file memang terutama mewakili satu nilai utama, misalnya object konfigurasi aplikasi.

### `example-03.js`

Perbandingan pentingnya:

```js
import greetUser from './greet.js';
import { formatName } from './named-tools.js';
```

File ini menunjukkan bahwa default export dan named export dapat dipakai berdampingan. Perbedaannya terutama ada pada cara nilai itu dideklarasikan dan diimpor.

### `greet.js`

File ini berisi:

```js
export default function greet(name) {
  return `Halo, ${name}`;
}
```

Contoh ini menegaskan pola default export untuk satu function utama.

### `config.js`

File pendukung ini memakai:

```js
export default config;
```

Dengan begitu satu object konfigurasi dapat dianggap sebagai isi utama module.

### `named-tools.js`

File ini tetap memakai:

```js
export function formatName(name) {
  return name.toUpperCase();
}
```

Kehadirannya membantu pembaca membandingkan named export dengan default export secara langsung di satu folder yang sama.

## Catatan Belajar

- Default export cocok saat satu module punya satu nilai utama yang ingin dibuka keluar.
- Nama lokal saat import default lebih fleksibel dibanding named import.
- Saat module punya beberapa API yang setara penting, named export sering terasa lebih jelas.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
