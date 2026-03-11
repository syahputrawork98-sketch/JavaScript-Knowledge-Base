# C08 - [13.8] Additive Operators

## Tujuan

Bab ini bertujuan memahami operator `+` dan `-`, termasuk beda perilaku numerik vs string concatenation.

## Kenapa Bab Ini Penting

`+` adalah operator yang paling sering memicu kebingungan karena dapat berarti penjumlahan atau penggabungan string.

## Konsep Inti

### 1. Penjumlahan Numerik

```js
10 + 5; // 15
10 - 5; // 5
```

### 2. Konkatenasi String

```js
'10' + 5; // '105'
```

Jika salah satu operand string, hasil cenderung string.

### 3. Operator `-` Memaksa Coercion Number

```js
'10' - 5; // 5
```

### 4. Urutan Evaluasi Mempengaruhi Hasil

```js
1 + 2 + '3'; // '33'
'1' + 2 + 3; // '123'
```

## Praktik yang Direkomendasikan

- Gunakan template literal untuk formatting output.
- Pisahkan operasi numerik dari operasi string.
- Lakukan coercion eksplisit pada input campuran.

## Kesalahan Umum

- Mengira `+` selalu operasi matematika.
- Menulis expression campuran tanpa tanda kurung.
- Tidak memverifikasi tipe operand dari input eksternal.

## Checkpoint Cepat

1. Kenapa `'10' + 5` beda dengan `'10' - 5`?
2. Apa hasil `1 + 2 + '3'` dan kenapa?
3. Kapan template literal lebih aman dari `+` berantai?

## Ringkasan

- `+` bisa berarti penjumlahan atau konkatenasi.
- `-` fokus pada operasi numerik dengan coercion.
- Kejelasan tipe operand adalah kunci mencegah bug hasil hitung.

## Visual Map

![C08 - [13.8] Additive Operators Map](../assets/C08-additive-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C08-additive-operators/example.js
- Panduan: ../examples/C08-additive-operators/README.md

