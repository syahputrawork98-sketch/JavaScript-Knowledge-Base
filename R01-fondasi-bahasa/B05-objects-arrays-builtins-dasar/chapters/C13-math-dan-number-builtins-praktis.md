# C13 - Math dan Number Built-ins Praktis

## Tujuan

Bab ini bertujuan memakai built-in numerik dasar yang paling sering muncul pada latihan dan program pemula.

## Kenapa Bab Ini Penting

Saat program mulai berurusan dengan angka, kita sering perlu membulatkan nilai, mencari angka terbesar, atau memeriksa apakah sebuah nilai valid untuk logika tertentu. Built-in `Math` dan `Number` membantu menangani kebutuhan itu tanpa harus menulis fungsi utilitas sendiri.

## Konsep Inti

### 1. `Math.floor()`, `Math.ceil()`, dan `Math.round()` untuk Pembulatan

```js
console.log(Math.floor(4.8));
console.log(Math.ceil(4.2));
console.log(Math.round(4.5));
```

- `floor()` membulatkan ke bawah.
- `ceil()` membulatkan ke atas.
- `round()` membulatkan ke bilangan bulat terdekat.

### 2. `Math.max()` dan `Math.min()` untuk Membandingkan Angka

```js
console.log(Math.max(10, 4, 18));
console.log(Math.min(10, 4, 18));
```

Method ini berguna saat kita perlu memilih nilai terbesar atau terkecil.

### 3. `Math.random()` untuk Nilai Acak Sederhana

```js
console.log(Math.random());
```

Hasilnya adalah angka acak antara `0` dan kurang dari `1`.

### 4. `Number.isNaN()` dan `Number.isInteger()` untuk Validasi Dasar

```js
console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10));
```

Keduanya membantu saat kita ingin memastikan hasil operasi angka tetap masuk akal.

## Praktik yang Direkomendasikan

- Gunakan fungsi pembulatan sesuai kebutuhan nyata, bukan sekadar menebak.
- Pakai `Math.max()` dan `Math.min()` untuk perbandingan numerik singkat yang eksplisit.
- Gunakan `Number.isNaN()` dan `Number.isInteger()` saat validasi angka mulai penting.

## Kesalahan Umum

- Mengira `Math.random()` bisa langsung dipakai sebagai bilangan bulat tanpa langkah tambahan.
- Salah memilih `floor()` padahal kebutuhan sebenarnya `round()` atau `ceil()`.
- Mengandalkan pengecekan angka tanpa membedakan `NaN`, pecahan, dan integer.

## Checkpoint Cepat

1. Apa beda `Math.floor()`, `Math.ceil()`, dan `Math.round()`?
2. Kenapa hasil `Math.random()` belum cocok langsung untuk banyak kasus praktis?
3. Kapan `Number.isInteger()` lebih berguna daripada sekadar melihat output angka?

## Analogi

- Intuisi Singkat: Built-in numerik ini adalah kotak alat cepat untuk operasi angka umum.
- Analogi: Seperti alat ukur di meja kerja; ada yang khusus untuk pembulatan, mencari nilai paling besar, atau memeriksa apakah hasil ukur masih valid.
- Batas Analogi: Di JavaScript, tiap alat punya aturan hasil yang spesifik, jadi penting memilih method yang memang sesuai kebutuhan logika.

## Ringkasan

- `Math` membantu pembulatan, perbandingan, dan angka acak sederhana.
- `Number` membantu validasi numerik dasar seperti `NaN` dan integer.
- Built-in ini membuat operasi angka lebih singkat dan lebih jelas dibaca.

## Contoh Runnable

- Lihat contoh: `../examples/C13-math-dan-number-builtins-praktis/example.js`
- Lihat contoh tambahan: `../examples/C13-math-dan-number-builtins-praktis/example-02.js`
- Lihat contoh tambahan: `../examples/C13-math-dan-number-builtins-praktis/example-03.js`
- Panduan: `../examples/C13-math-dan-number-builtins-praktis/README.md`
