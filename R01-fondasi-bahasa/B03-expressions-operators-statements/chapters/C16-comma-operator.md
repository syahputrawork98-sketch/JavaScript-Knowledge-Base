# C16 - [13.16] Comma Operator

## Tujuan

Bab ini bertujuan memahami comma operator dan batas penggunaannya di kode praktik.

## Kenapa Bab Ini Penting

Comma operator jarang dipakai, tetapi kadang muncul pada legacy code atau ekspresi ringkas.

Tanpa pemahaman dasar, pembaca bisa salah menafsir hasil expression.

## Konsep Inti

### 1. Comma Operator Mengevaluasi Kiri ke Kanan, Mengembalikan Operand Terakhir

```js
const result = (1, 2, 3);
// result = 3
```

### 2. Bisa Dipakai untuk Side Effect Berurutan

```js
let x = 0;
const y = (x += 1, x += 2, x);
```

### 3. Beda dengan Comma di Daftar Parameter/Argumen

Comma sebagai separator bukan comma operator.

### 4. Keterbacaan Sering Menurun

Pada kebanyakan kasus, menulis statement terpisah lebih jelas.

## Praktik yang Direkomendasikan

- Hindari comma operator kecuali ada alasan kuat.
- Jika dipakai, bungkus dalam tanda kurung dan beri komentar intent.
- Prioritaskan ekspresi yang mudah dibaca tim.

## Kesalahan Umum

- Mengira semua comma adalah comma operator.
- Menyembunyikan side effect dalam expression padat.
- Membuat debug flow jadi sulit ditelusuri.

## Checkpoint Cepat

1. Apa nilai `const r = (10, 20, 30);`?
2. Kenapa comma operator jarang direkomendasikan?
3. Apa beda comma operator dan comma separator?

## Ringkasan

- Comma operator mengembalikan operand terakhir.
- Operator ini valid tapi berisiko menurunkan keterbacaan.
- Gunakan secara terbatas dan eksplisit.

## Visual Map

![C16 - [13.16] Comma Operator Map](../assets/C16-comma-operator-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C16-comma-operator/example.js
- Panduan: ../examples/C16-comma-operator/README.md

