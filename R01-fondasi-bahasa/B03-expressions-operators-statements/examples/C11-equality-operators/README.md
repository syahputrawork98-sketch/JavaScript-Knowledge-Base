# Example C11

Contoh runnable untuk bab **C11 - Equality Operators**.

## Tujuan Example

Folder ini membantu pembaca membedakan `==`, `===`, idiom nullish dengan `== null`, dan edge case yang lebih tepat dicek memakai `Object.is`.

## Daftar File

- `example.js` membandingkan strict dan loose equality serta kasus `NaN`.
- `example-02.js` menunjukkan idiom `value == null`.
- `example-03.js` menunjukkan `Object.is` untuk comparison edge case.

## Poin Penting

- `===` adalah pilihan default yang paling aman.
- `== null` kadang dipakai sengaja untuk menangkap `null` dan `undefined`.
- `NaN` dan `-0` punya perilaku perbandingan khusus.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
