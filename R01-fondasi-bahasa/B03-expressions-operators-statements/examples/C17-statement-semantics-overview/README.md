# Example C17

Contoh runnable untuk bab **C17 - Statement Semantics Overview**.

## Tujuan Example

Folder ini memperlihatkan perbedaan alur normal, `return`, dan `throw` sebagai bagian dari semantic flow statement.

## Daftar File

- `example.js` menunjukkan flow normal, `return`, dan `throw` dalam satu fungsi.
- `example-02.js` membandingkan normal completion dan abrupt completion.
- `example-03.js` memperlihatkan tracing flow path sederhana.

## Poin Penting

- Statement tidak hanya "jalan", tetapi juga bisa menghentikan atau memindahkan alur.
- `return` dan `throw` termasuk abrupt flow.
- Memahami ini penting sebelum masuk `break`, `continue`, `try`, dan `throw`.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
