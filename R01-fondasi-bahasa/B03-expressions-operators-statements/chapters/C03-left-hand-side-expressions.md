# C03 - [13.3] Left-Hand-Side Expressions

## Tujuan

Bab ini bertujuan memahami expression yang boleh berada di sisi kiri assignment atau menjadi target akses/call.

## Kenapa Bab Ini Penting

Banyak bug syntax dan runtime muncul saat pembaca salah membedakan value biasa dengan target yang bisa di-update.

## Konsep Inti

### 1. Property Access Termasuk Left-Hand-Side

```js
user.name;
user['name'];
```

### 2. Call Expression Dibangun dari Left-Hand-Side

```js
getUser().name;
Math.max(1, 2);
```

### 3. Tidak Semua Expression Bisa Jadi Target Assignment

```js
let a = 1;
a = 2; // valid

// (a + 1) = 3; // invalid
```

### 4. Optional Chaining Bersifat Aman untuk Akses

```js
config.api?.timeout;
```

## Praktik yang Direkomendasikan

- Gunakan dot notation untuk properti statis.
- Gunakan bracket notation saat key dinamis.
- Validasi object nullish sebelum chain panjang (atau pakai `?.`).

## Kesalahan Umum

- Mencoba assign ke expression hasil operasi.
- Mengakses properti nested tanpa null-check.
- Menganggap semua hasil call dapat di-mutasi tanpa verifikasi tipe.

## Checkpoint Cepat

1. Kenapa `(a + 1) = 2` invalid?
2. Kapan bracket notation wajib dipakai?
3. Apa manfaat optional chaining di access chain panjang?

## Ringkasan

- Left-hand-side expression adalah target akses/call/assignment.
- Assignment valid hanya pada target yang memang dapat direferensikan.
- Optional chaining membantu akses aman pada object bertingkat.

## Visual Map

![C03 - [13.3] Left-Hand-Side Expressions Map](../assets/C03-left-hand-side-expressions-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C03-left-hand-side-expressions/example.js
- Panduan: ../examples/C03-left-hand-side-expressions/README.md

