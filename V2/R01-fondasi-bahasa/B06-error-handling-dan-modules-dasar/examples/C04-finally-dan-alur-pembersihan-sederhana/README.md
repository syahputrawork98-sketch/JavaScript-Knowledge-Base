# Example C04

Contoh runnable untuk bab **C04 - `finally` dan Alur Pembersihan Sederhana**.

## Tujuan Example

Folder ini menunjukkan fungsi `finally` sebagai tempat untuk menjalankan langkah penutup yang harus tetap terjadi, baik proses utama berhasil maupun gagal.

## Daftar File

- `example.js` menunjukkan bahwa `finally` tetap berjalan saat tidak ada error.
- `example-02.js` menunjukkan bahwa `finally` juga tetap berjalan setelah error ditangkap.
- `example-03.js` menunjukkan pembersihan state sederhana dengan `finally`.

## Penjelasan Per File

### `example.js`

Struktur utamanya:

```js
try {
  console.log('proses utama berhasil');
} finally {
  console.log('langkah penutup tetap berjalan');
}
```

Walaupun tidak ada error, blok `finally` tetap dijalankan. Ini menegaskan bahwa `finally` bukan blok khusus kegagalan, tetapi blok penutup.

### `example-02.js`

Kasus pembandingnya:

```js
} catch (error) {
  console.log('error ditangkap ->', error.name);
} finally {
  console.log('finally tetap berjalan');
}
```

Setelah error diproses di `catch`, kontrol tetap masuk ke `finally`. Ini membuat `finally` cocok untuk cleanup yang tidak boleh terlewat.

### `example-03.js`

File ini menyorot pola:

```js
let isLoading = true;
...
isLoading = false;
```

State `isLoading` dinyalakan sebelum proses dan dimatikan di `finally`, sehingga cleanup state tetap konsisten meskipun proses utama suatu saat berkembang menjadi lebih kompleks.

## Catatan Belajar

- `finally` cocok untuk cleanup, reset state, atau penutupan langkah sementara.
- Jangan tempatkan logika bisnis utama di `finally`; fokuskan pada langkah penutup.
- Pola `isLoading` ini sangat umum di aplikasi nyata, termasuk UI dan request handling sederhana.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
