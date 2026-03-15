# Example C12

Contoh runnable untuk bab **C12 - Checklist Debugging Error dan Modules Dasar**.

## Tujuan Example

Folder ini menyatukan pola debugging praktis untuk error handling dan modules, agar pembaca terbiasa memeriksa jenis error, jalur import, nama export, dan validasi input secara sistematis.

## Daftar File

- `example.js` menunjukkan checklist dasar saat membaca error parsing JSON.
- `example-02.js` menunjukkan checklist sederhana untuk memeriksa kecocokan import dan export.
- `example-03.js` menunjukkan alur validasi input dengan module validator dan penanganan error.
- `helpers.js` mengekspor function `add()` untuk contoh pemeriksaan import/export.
- `validator.js` mengekspor function `validateName()` untuk validasi input user.

## Penjelasan Per File

### `example.js`

Contoh checklist-nya:

```js
console.log('cek jenis ->', error.name);
console.log('cek pesan ->', error.message);
console.log('cek sumber -> input JSON yang diparse');
```

Alih-alih berhenti di "parse gagal", file ini menunjukkan urutan berpikir debugging yang lebih rapi: cek jenis error, baca pesan, lalu hubungkan ke sumber input.

### `example-02.js`

Poin pentingnya:

```js
import { add } from './helpers.js';
console.log('cek path -> ./helpers.js');
console.log('cek nama export -> add');
```

Contoh ini menekankan bahwa debugging module sering dimulai dari hal mendasar: path file dan nama export yang harus cocok.

### `example-03.js`

Alur utamanya:

```js
validateName(name);
return { name };
```

Jika validasi gagal, function menangkap error dan mengembalikan `null`. Ini menunjukkan pola debugging dan fallback sederhana saat module validator dipakai bersama alur pembuatan data.

### `helpers.js`

Isi file ini:

```js
export function add(a, b) {
  return a + b;
}
```

Fungsinya sengaja sederhana agar fokus pembaca tetap pada pemeriksaan jalur import dan nama export.

### `validator.js`

File ini memeriksa:

```js
if (typeof name !== 'string' || name.trim() === '') {
  throw new Error('name harus string non-kosong');
}
```

Validator terpisah membantu menunjukkan bahwa error handling dan modularisasi sering berjalan bersama di kode nyata.

## Catatan Belajar

- Checklist debugging membantu mengurangi tebakan saat error muncul.
- Pada module, dua pemeriksaan paling dasar adalah path import dan nama export.
- Pada validasi input, pesan error yang jelas sangat mempermudah langkah debugging berikutnya.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
