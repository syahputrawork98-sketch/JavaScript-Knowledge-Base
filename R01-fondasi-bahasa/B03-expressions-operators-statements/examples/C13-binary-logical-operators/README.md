# Example C13

Contoh runnable untuk bab **C13 - Binary Logical Operators**.

## Tujuan Example

Folder ini menunjukkan hasil operand dari `&&`, `||`, dan `??`, serta pola guard sederhana.

## Daftar File

- `example.js` membandingkan `&&`, `||`, dan `??`.
- `example-02.js` fokus pada `||` vs `??`.
- `example-03.js` menunjukkan pola guard lama dengan `&&`.

## Poin Penting

- Operator logika JavaScript sering mengembalikan operand, bukan boolean murni.
- `||` berbasis truthiness, sedangkan `??` berbasis nullish.
- Guard chain lama dengan `&&` masih penting dipahami walau kini ada optional chaining.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
