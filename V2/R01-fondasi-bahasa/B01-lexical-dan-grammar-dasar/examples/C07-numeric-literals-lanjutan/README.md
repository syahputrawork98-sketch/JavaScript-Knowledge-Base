# Example C07

Contoh runnable untuk bab **C07 - Numeric Literals Lanjutan**.

## Tujuan Example

Folder ini membantu pembaca melihat berbagai bentuk penulisan angka di JavaScript: decimal, binary, octal, hexadecimal, numeric separator, dan BigInt.

## Daftar File

- `example.js` memperkenalkan beberapa format numeric literal sekaligus.
- `example-02.js` fokus pada separator di binary dan hexadecimal.
- `example-03.js` fokus pada operasi dasar dengan BigInt.

## Penjelasan Per File

### `example.js`

File utama ini berisi enam bentuk penting:

```js
const dec = 42;
const bin = 0b1010;
const oct = 0o52;
const hex = 0x2a;
const budget = 1_500_000;
const huge = 9_007_199_254_740_991n;
```

Output yang diharapkan:

```bash
{ dec: 42, bin: 10, oct: 42, hex: 42, budget: 1500000, huge: '9007199254740991' }
```

Contoh ini menekankan bahwa bentuk tulisan boleh berbeda, tetapi JavaScript tetap membaca nilainya sesuai aturan masing-masing.

### `example-02.js`

Contoh ini memperlihatkan separator pada literal yang lebih teknis:

```js
const binaryMask = 0b1010_0001;
const hexColor = 0xff_ee_cc;
```

Tujuannya agar pembaca melihat bahwa `_` dipakai untuk keterbacaan, bukan untuk mengubah nilai runtime.

### `example-03.js`

File ini fokus ke BigInt:

```js
const bigA = 10n;
const bigB = 20n;

console.log('big sum:', (bigA + bigB).toString());
```

Output yang diharapkan:

```bash
big sum: 30
```

Konversi ke string dipakai agar output lebih nyaman dibaca dan konsisten saat ditampilkan.

## Catatan Belajar

- Pakai decimal untuk kasus umum.
- Gunakan binary, octal, atau hex saat konteksnya memang teknis.
- Numeric separator sangat membantu untuk angka panjang.
- BigInt cocok untuk integer besar, tetapi jangan langsung dicampur dengan `Number`.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
