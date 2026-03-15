# C12 - [13.12] Binary Bitwise Operators

## Tujuan

Bab ini bertujuan memahami operator bitwise biner (`&`, `|`, `^`) dan konteks penggunaannya.

## Kenapa Bab Ini Penting

Bitwise operator muncul pada masking flags, utilitas low-level, dan optimasi tertentu.

Meski jarang untuk pemula, pemahaman dasar mencegah kebingungan saat membaca codebase real.

## Konsep Inti

### 1. Bitwise AND (`&`)

```js
5 & 3; // 1
```

### 2. Bitwise OR (`|`)

```js
5 | 3; // 7
```

### 3. Bitwise XOR (`^`)

```js
5 ^ 3; // 6
```

### 4. Semua Operand Dicoerce ke 32-bit Integer

Hasil bisa berbeda dari ekspektasi number biasa (floating/angka besar).

## Praktik yang Direkomendasikan

- Gunakan bitwise hanya jika intent bit-level benar-benar dibutuhkan.
- Tambahkan komentar singkat untuk menjelaskan mask/flag.
- Hindari bitwise untuk business logic umum.

## Kesalahan Umum

- Memakai bitwise untuk kondisi boolean biasa.
- Lupa coercion ke 32-bit integer.
- Sulit membaca kode karena tidak ada penjelasan mask.

## Checkpoint Cepat

1. Apa beda `&` dan `&&`?
2. Kenapa bitwise bisa membingungkan pada number besar?
3. Kapan bitwise layak dipakai?

## Analogi

- Intuisi Singkat: Bitwise operator memanipulasi data per bit.
- Analogi: Seperti panel saklar ON/OFF yang diatur satu per satu.
- Batas Analogi: Nilai diproyeksikan ke 32-bit signed integer saat operasi.

## Ringkasan

- Bitwise binary operator bekerja di level bit 32-bit.
- Operator ini berbeda fungsi dari logical operator.
- Gunakan secukupnya dan prioritaskan keterbacaan.

## Visual Map

![C12 - [13.12] Binary Bitwise Operators Map](../assets/C12-binary-bitwise-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C12-binary-bitwise-operators/example.js
- Panduan: ../examples/C12-binary-bitwise-operators/README.md
