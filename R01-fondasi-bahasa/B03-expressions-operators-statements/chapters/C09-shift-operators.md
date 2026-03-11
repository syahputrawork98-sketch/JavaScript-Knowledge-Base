# C09 - [13.9] Shift Operators

## Tujuan

Bab ini bertujuan memahami operator bit shift (`<<`, `>>`, `>>>`) pada level praktis pemula.

## Kenapa Bab Ini Penting

Walau jarang dipakai harian, shift operators sering muncul pada kode utilitas, encoding sederhana, dan operasi performa tertentu.

## Konsep Inti

### 1. Left Shift (`<<`)

```js
5 << 1; // 10
```

Secara sederhana mirip mengalikan 2 untuk integer 32-bit.

### 2. Right Shift Signed (`>>`)

```js
8 >> 1; // 4
```

Mempertahankan tanda bilangan (signed).

### 3. Right Shift Unsigned (`>>>`)

```js
-1 >>> 1; // 2147483647
```

Mengisi bit kiri dengan nol (unsigned behavior).

### 4. Operand Dicoerce ke 32-bit Integer

Hasil shift tidak cocok untuk seluruh skenario number floating besar.

## Praktik yang Direkomendasikan

- Pakai shift operator hanya saat memang butuh operasi bit-level.
- Tambahkan komentar intent saat memakai `>>>` atau mask bit.
- Untuk aritmetika biasa, tetap prioritaskan operator numerik umum.

## Kesalahan Umum

- Menggunakan shift untuk kasus yang lebih jelas dengan aritmetika biasa.
- Lupa bahwa number dicoerce ke 32-bit signed/unsigned.
- Salah membaca hasil pada bilangan negatif.

## Checkpoint Cepat

1. Apa beda utama `>>` dan `>>>`?
2. Kenapa `5 << 1` menghasilkan `10`?
3. Kapan shift operator sebaiknya dihindari?

## Ringkasan

- Shift operator memanipulasi representasi bit 32-bit.
- `>>` signed, `>>>` unsigned.
- Gunakan hanya saat kebutuhan bitwise benar-benar jelas.

## Visual Map

![C09 - [13.9] Shift Operators Map](../assets/C09-shift-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C09-shift-operators/example.js
- Panduan: ../examples/C09-shift-operators/README.md

