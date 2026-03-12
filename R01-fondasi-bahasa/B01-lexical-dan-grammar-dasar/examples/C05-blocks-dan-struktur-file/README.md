# Example C05

Contoh runnable untuk bab **C05 - Blocks dan Struktur File**.

## Tujuan Example

Folder ini menunjukkan bagaimana block `{}` dan susunan file sederhana membantu kode lebih rapi dan mudah diikuti.

## Daftar File

- `example.js` menampilkan struktur file kecil yang punya konfigurasi, function, dan eksekusi.
- `example-02.js` memperlihatkan block pada `if`.
- `example-03.js` menguatkan pola struktur file sederhana yang konsisten.

## Penjelasan Per File

### `example.js`

File ini memakai urutan yang sehat untuk file kecil:

```js
const APP_NAME = 'Task App';

function printTitle() {
  if (APP_NAME) {
    console.log('App:', APP_NAME);
  }
}

printTitle();
```

Di sini pembaca bisa melihat:

- deklarasi konstanta ada di atas
- function didefinisikan sebelum dipakai
- block `if` membungkus logika terkait

Output yang diharapkan:

```bash
App: Task App
```

### `example-02.js`

Contoh ini lebih kecil dan fokus ke block:

```js
const isReady = true;

if (isReady) {
  console.log('System ready');
}
```

Meski isi kondisinya hanya satu baris, block tetap membuat struktur lebih jelas dan aman jika nanti logika bertambah.

### `example-03.js`

File ini mengulang pola struktur file yang rapi:

```js
const APP_VERSION = '1.0.0';

function printVersion() {
  console.log('Version:', APP_VERSION);
}

printVersion();
```

Output yang diharapkan:

```bash
Version: 1.0.0
```

## Catatan Belajar

- Biasakan melihat file sebagai susunan: data awal, definisi logic, lalu eksekusi.
- Block yang konsisten membuat kode lebih siap dikembangkan.
- Untuk pemula, struktur rapi jauh lebih penting daripada menulis kode sependek mungkin.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
