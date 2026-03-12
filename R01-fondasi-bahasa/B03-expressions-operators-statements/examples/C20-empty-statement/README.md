# Example C20

Contoh runnable untuk bab **C20 - Empty Statement**.

## Tujuan Example

Folder ini menunjukkan bagaimana tanda `;` yang tampak sepele bisa menjadi empty statement dan memicu bug flow yang membingungkan.

## Daftar File

- `example.js` menunjukkan bug `if (...) ;` dan loop dengan body kosong.
- `example-02.js` memperkuat contoh accidental empty statement.
- `example-03.js` menunjukkan empty loop body yang disengaja.

## Poin Penting

- `if (cond);` berarti `if` punya body kosong.
- Block setelahnya bisa tetap jalan walau tampak seolah bagian dari `if`.
- Empty statement bisa disengaja, tetapi harus sangat jelas agar tidak menyesatkan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
