# Example C30

Contoh runnable untuk bab **C30 - throw Statement**.

## Tujuan Example

Folder ini menunjukkan cara melempar error untuk menandai kondisi tidak valid secara eksplisit.

## Daftar File

- `example.js` menunjukkan `throw` pada validasi pembagian.
- `example-02.js` menunjukkan `throw` untuk validasi angka positif.
- `example-03.js` menunjukkan custom error class sederhana.

## Poin Penting

- `throw` menghentikan alur normal dan memindahkan kontrol ke `catch` terdekat.
- Validasi input adalah tempat yang umum untuk `throw`.
- Custom error class membantu membedakan jenis kegagalan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
