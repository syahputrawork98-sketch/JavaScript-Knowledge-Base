# C13 - [13.13] Binary Logical Operators

## Tujuan

Bab ini bertujuan memahami operator logika biner (`&&`, `||`, `??`) dan short-circuit evaluation.

## Kenapa Bab Ini Penting

Operator ini adalah tulang punggung pengambilan keputusan singkat di JavaScript.

## Konsep Inti

### 1. `&&` Mengembalikan Operand Pertama yang Falsy atau Operand Terakhir

```js
'A' && 'B'; // 'B'
'' && 'B';  // ''
```

### 2. `||` Mengembalikan Operand Pertama yang Truthy

```js
'' || 'fallback'; // 'fallback'
'ok' || 'x';      // 'ok'
```

### 3. `??` Khusus Nullish (`null` atau `undefined`)

```js
0 ?? 10;          // 0
null ?? 'empty';  // 'empty'
```

### 4. Pilihan Operator Menentukan Makna Bisnis

`||` cocok untuk fallback falsy luas, `??` cocok untuk fallback nullish.

## Praktik yang Direkomendasikan

- Gunakan `??` saat `0`, `false`, atau `''` masih valid.
- Gunakan `||` saat semua falsy memang harus fallback.
- Hindari chain panjang tanpa grouping.

## Kesalahan Umum

- Mengira `||` dan `??` identik.
- Menganggap `&&`/`||` selalu mengembalikan boolean.
- Menulis expression logika padat tanpa variabel antara.

## Checkpoint Cepat

1. Kapan `??` lebih tepat dari `||`?
2. Kenapa `&&` bisa mengembalikan string?
3. Apa risiko chain logika panjang tanpa grouping?

## Ringkasan

- Logical binary operator menggunakan short-circuit.
- Hasil operator bisa berupa operand asli, bukan boolean murni.
- Pilih operator sesuai makna default yang diinginkan.

## Visual Map

![C13 - [13.13] Binary Logical Operators Map](../assets/C13-binary-logical-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C13-binary-logical-operators/example.js
- Panduan: ../examples/C13-binary-logical-operators/README.md

