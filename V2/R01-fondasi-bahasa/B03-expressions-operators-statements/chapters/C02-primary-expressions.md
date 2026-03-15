# C02 - [13.2] Primary Expressions

## Tujuan

Bab ini bertujuan memahami bentuk expression paling dasar yang menjadi fondasi operator lanjutan.

## Kenapa Bab Ini Penting

Hampir semua expression kompleks dibangun dari primary expression.

Kalau fondasi ini belum jelas, pembaca akan sulit membaca call chain, grouping, dan hasil evaluasi operator.

## Konsep Inti

### 1. Literal adalah Primary Expression

Contoh literal yang langsung menghasilkan nilai:

```js
42;
'hello';
true;
null;
[1, 2, 3];
({ id: 1 });
```

### 2. Identifier Reference Juga Primary Expression

```js
const total = 10;
total;
```

Nama variabel yang valid dapat dievaluasi menjadi nilai terkait.

### 3. Grouping Expression dengan Tanda Kurung

```js
(1 + 2) * 3;
```

Tanda kurung membantu memperjelas urutan evaluasi.

### 4. `this` Termasuk Primary Expression

Nilai `this` bergantung pada context eksekusi.

## Praktik yang Direkomendasikan

- Gunakan grouping saat ekspresi mulai padat.
- Pisahkan literal object di expression statement dengan tanda kurung saat perlu.
- Tulis expression pendek dan eksplisit sebelum menggabungkannya.

## Kesalahan Umum

- Menganggap object literal selalu aman sebagai expression statement tanpa kurung.
- Menumpuk terlalu banyak operasi dalam satu baris.
- Salah asumsi nilai `this` tanpa melihat call-site.

## Checkpoint Cepat

1. Apa saja bentuk primary expression yang paling sering dipakai?
2. Kenapa `(1 + 2) * 3` beda dengan `1 + 2 * 3`?
3. Kapan object literal perlu dibungkus `(...)`?

## Analogi

- Intuisi Singkat: Primary expression adalah unit paling dasar pembentuk ekspresi lain.
- Analogi: Seperti bahan baku dapur yang jadi pondasi semua menu berikutnya.
- Batas Analogi: Ia hanya unit sintaks dasar, bukan keseluruhan alur evaluasi program.

## Ringkasan

- Primary expression adalah unit ekspresi paling dasar.
- Literal, identifier, `this`, dan grouping membentuk fondasi expression lain.
- Keterbacaan expression meningkat saat grouping dipakai secara sadar.

## Visual Map

![C02 - [13.2] Primary Expressions Map](../assets/C02-primary-expressions-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C02-primary-expressions/example.js
- Panduan: ../examples/C02-primary-expressions/README.md
