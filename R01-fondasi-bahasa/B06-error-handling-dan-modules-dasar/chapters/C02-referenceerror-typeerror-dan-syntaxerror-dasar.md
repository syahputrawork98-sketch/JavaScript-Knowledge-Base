# C02 - `ReferenceError`, `TypeError`, dan `SyntaxError` Dasar

## Tujuan

Bab ini bertujuan mengenali tiga jenis error yang paling sering ditemui pemula.

## Kenapa Bab Ini Penting

Tidak semua error berarti hal yang sama. Ada error karena nama variabel tidak ada, ada error karena nilai dipakai dengan cara yang salah, dan ada error karena bentuk kode sudah tidak valid sejak awal. Mengenali perbedaan ini membantu pembaca mempercepat proses debugging.

## Konsep Inti

### 1. `ReferenceError` Muncul Saat Nama yang Dipakai Tidak Tersedia

```js
console.log(userName);
```

Jika JavaScript tidak menemukan binding yang sedang dipanggil, salah satu error yang umum muncul adalah `ReferenceError`.

### 2. `TypeError` Muncul Saat Nilai Dipakai dengan Cara yang Tidak Cocok

```js
const user = null;

console.log(user.name);
```

Di sini masalahnya bukan nama `user` hilang, tetapi nilainya tidak mendukung operasi yang diminta.

### 3. `SyntaxError` Muncul Saat Bentuk Kode Tidak Valid

```js
if (true {
  console.log('jalan');
}
```

Jika bentuk sintaks tidak valid, program bahkan bisa gagal sebelum logika utamanya berjalan.

## Praktik yang Direkomendasikan

- Gunakan jenis error sebagai petunjuk kategori masalah.
- Cek nama variabel untuk `ReferenceError`.
- Cek bentuk nilai dan operasi yang dilakukan untuk `TypeError`.
- Cek struktur sintaks untuk `SyntaxError`.

## Kesalahan Umum

- Menganggap semua error runtime sama saja.
- Memperbaiki lokasi yang salah karena tidak membedakan nama, nilai, dan sintaks.
- Mengira `TypeError` selalu berarti tipe data formal yang rumit, padahal sering muncul dari kasus sederhana seperti `null` atau method yang tidak ada.

## Checkpoint Cepat

1. Apa beda masalah inti antara `ReferenceError` dan `TypeError`?
2. Kenapa `SyntaxError` sering menghentikan program lebih awal?
3. Saat melihat `user.name` gagal, apa yang perlu dicek lebih dulu?

## Analogi

- Intuisi Singkat: Tiga error ini mewakili tiga sumber masalah yang berbeda: nama, nilai, dan bentuk kode.
- Analogi: Seperti bekerja dengan formulir; bisa gagal karena nama kolomnya tidak ada, isi kolomnya tidak cocok, atau format formulirnya sendiri salah.
- Batas Analogi: Di JavaScript, detail perilaku tetap bergantung pada konteks kode, jadi jenis error membantu mengarahkan pemeriksaan awal, bukan otomatis memberi seluruh solusi.

## Ringkasan

- `ReferenceError` berkaitan dengan nama yang tidak tersedia.
- `TypeError` berkaitan dengan nilai yang dipakai dengan cara yang tidak cocok.
- `SyntaxError` berkaitan dengan bentuk kode yang tidak valid.

## Contoh Runnable

- Lihat contoh: `../examples/C02-referenceerror-typeerror-dan-syntaxerror-dasar/example.js`
- Lihat contoh tambahan: `../examples/C02-referenceerror-typeerror-dan-syntaxerror-dasar/example-02.js`
- Lihat contoh tambahan: `../examples/C02-referenceerror-typeerror-dan-syntaxerror-dasar/example-03.js`
- Panduan: `../examples/C02-referenceerror-typeerror-dan-syntaxerror-dasar/README.md`
