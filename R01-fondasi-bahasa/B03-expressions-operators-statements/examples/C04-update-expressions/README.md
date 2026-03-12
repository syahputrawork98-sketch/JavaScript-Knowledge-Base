# Example C04

Contoh runnable untuk bab **C04 - Update Expressions**.

## Tujuan Example

Folder ini membantu pembaca memahami perbedaan prefix dan postfix `++`/`--`, terutama saat dipakai di dalam expression.

## Daftar File

- `example.js` membandingkan hasil prefix dan postfix serta update sederhana.
- `example-02.js` menunjukkan beda hasil saat operator update dipakai di expression.
- `example-03.js` menunjukkan update expression di loop.

## Poin Penting

- Prefix mengembalikan nilai setelah update.
- Postfix mengembalikan nilai lama lalu baru meng-update variabel.
- Di loop, `i++` biasanya dipakai karena alur bacanya natural.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
