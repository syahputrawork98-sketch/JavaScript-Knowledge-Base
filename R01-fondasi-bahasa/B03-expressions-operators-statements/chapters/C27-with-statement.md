# C27 - [14.11] with Statement

## Tujuan

Bab ini bertujuan memahami `with` statement secara konseptual dan alasan kuat mengapa hampir selalu dihindari.

## Kenapa Bab Ini Penting

`with` termasuk bagian bahasa, namun dikenal berisiko tinggi terhadap keterbacaan, performa, dan prediktabilitas scope.

## Konsep Inti

### 1. `with` Memodifikasi Cara Lookup Identifier

`with` menambahkan object ke rantai pencarian nama sementara.

### 2. Membuat Binding Menjadi Ambigu

Sulit menentukan apakah identifier mengacu ke object `with` atau scope luar.

### 3. Dilarang di Strict Mode

`with` tidak diizinkan dalam strict mode.

### 4. Alternatif Modern Lebih Aman

Gunakan destructuring atau alias object eksplisit.

## Praktik yang Direkomendasikan

- Hindari `with` pada kode modern.
- Refactor code legacy `with` ke akses properti eksplisit.
- Aktifkan strict mode/lint rule untuk mencegah penggunaan ulang.

## Kesalahan Umum

- Menggunakan `with` untuk menyingkat penulisan properti.
- Sulit debug karena sumber identifier tidak jelas.
- Mengabaikan larangan strict mode.

## Checkpoint Cepat

1. Kenapa `with` membuat kode ambigu?
2. Kenapa strict mode menolak `with`?
3. Alternatif modern yang aman apa?

## Ringkasan

- `with` adalah fitur legacy yang sebaiknya dihindari.
- Ambiguitas scope adalah risiko utamanya.
- Praktik modern memilih akses properti eksplisit.

## Visual Map

![C27 - [14.11] with Statement Map](../assets/C27-with-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C27-with-statement/example.js
- Panduan: ../examples/C27-with-statement/README.md

