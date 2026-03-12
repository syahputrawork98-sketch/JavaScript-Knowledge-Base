# Example C07

Contoh runnable untuk bab **C07 - Multiplicative Operators**.

## Tujuan Example

Folder ini memperlihatkan `*`, `/`, `%`, coercion numerik dasar, dan edge case hasil pembagian.

## Daftar File

- `example.js` menunjukkan perkalian, pembagian, modulus, coercion string-number, `Infinity`, dan `NaN`.
- `example-02.js` memakai modulus untuk pola genap-ganjil.
- `example-03.js` memeriksa hasil pembagian dengan `Number.isFinite`.

## Poin Penting

- Operator multiplicative sering memaksa coercion ke number.
- `%` berguna untuk pola siklus dan genap-ganjil.
- Hasil `/` tidak selalu finite, jadi validasi kadang diperlukan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
