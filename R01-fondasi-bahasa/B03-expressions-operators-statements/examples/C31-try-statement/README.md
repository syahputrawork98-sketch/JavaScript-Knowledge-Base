# Example C31

Contoh runnable untuk bab **C31 - try Statement**.

## Tujuan Example

Folder ini memperlihatkan `try`, `catch`, `finally`, dan pola rethrow yang dasar.

## Daftar File

- `example.js` menunjukkan `try/catch/finally` pada parsing JSON.
- `example-02.js` memperkuat urutan flow `try/catch/finally`.
- `example-03.js` menunjukkan pola logging lalu rethrow.

## Poin Penting

- `catch` menangani error yang dilempar di `try`.
- `finally` tetap jalan baik ada error maupun tidak.
- Rethrow berguna saat kita ingin logging lokal tetapi tetap meneruskan error.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
