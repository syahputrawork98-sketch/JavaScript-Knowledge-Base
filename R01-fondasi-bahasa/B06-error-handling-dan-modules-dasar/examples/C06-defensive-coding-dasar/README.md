# Example C06

Contoh runnable untuk bab **C06 - Defensive Coding Dasar**.

## Tujuan Example

Folder ini menunjukkan pola guard sederhana untuk melindungi function dari input yang tidak sesuai, baik dengan fallback aman maupun dengan error eksplisit.

## Daftar File

- `example.js` menunjukkan guard sederhana untuk memastikan input adalah string.
- `example-02.js` menunjukkan fallback aman saat array tidak valid atau kosong.
- `example-03.js` menunjukkan kombinasi defensive check dan `throw` untuk input yang lebih penting.

## Penjelasan Per File

### `example.js`

Pola dasarnya:

```js
if (typeof name !== 'string') {
  return 'Nama tidak valid';
}
```

Function tidak memaksa semua input benar. Untuk kasus ringan, ia mengembalikan fallback yang aman dan mudah dibaca.

### `example-02.js`

Kasus pentingnya:

```js
if (!Array.isArray(items) || items.length === 0) {
  return undefined;
}
```

Contoh ini menunjukkan defensive coding yang sangat umum: cek bentuk data lebih dulu sebelum membaca elemen pertamanya.

### `example-03.js`

Perbandingan utamanya:

```js
if (typeof text !== 'string') {
  throw new Error('text harus string');
}
```

Tidak semua defensive coding berakhir pada fallback. Untuk input yang dianggap wajib benar, function bisa memilih melempar error agar kesalahan lebih cepat terlihat.

## Catatan Belajar

- Defensive coding dimulai dari asumsi bahwa input bisa saja salah.
- Pilihan antara fallback dan `throw` bergantung pada seberapa penting keabsahan input itu.
- Guard sederhana di awal function sering mencegah bug yang lebih membingungkan di bagian bawah alur.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
