# Example C06

Contoh runnable untuk bab **C06 - Exponentiation Operator**.

## Tujuan Example

Folder ini menunjukkan perilaku operator `**`, associativity-nya, dan pemakaian praktis dalam rumus.

## Daftar File

- `example.js` menunjukkan pangkat dasar, right-associativity, dan perbandingan dengan `Math.pow`.
- `example-02.js` fokus pada associativity `**`.
- `example-03.js` memakai exponentiation dalam formula pertumbuhan.

## Poin Penting

- `2 ** 3 ** 2` dibaca dari kanan.
- `-(2 ** 2)` berbeda dari ekspresi yang tampak mirip tanpa grouping tepat.
- Operator ini lebih ringkas daripada `Math.pow` untuk rumus sederhana.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
