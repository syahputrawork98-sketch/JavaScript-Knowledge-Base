# Example C19

Contoh runnable untuk bab **C19 - Declarations dan Variable Statement**.

## Tujuan Example

Folder ini membantu pembaca membedakan `const`, `let`, dan `var`, termasuk jebakan scope `var`.

## Daftar File

- `example.js` menunjukkan `const`, `let`, dan kebocoran scope `var`.
- `example-02.js` fokus pada pitfall `var`.
- `example-03.js` menunjukkan bahwa `const` pada object tidak berarti object-nya immutable total.

## Poin Penting

- `var` tidak block-scoped seperti `let` dan `const`.
- `const` mencegah reassignment binding, bukan mutasi isi object.
- Untuk code modern, `let` dan `const` lebih aman dibiasakan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
