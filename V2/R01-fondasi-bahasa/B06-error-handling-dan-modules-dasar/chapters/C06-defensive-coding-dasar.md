# C06 - Defensive Coding Dasar

## Tujuan

Bab ini bertujuan membangun kebiasaan mencegah error dengan pengecekan input dan asumsi yang lebih aman.

## Kenapa Bab Ini Penting

Setelah belajar membaca error, menangkap error, dan melempar error, langkah berikutnya adalah mengurangi kemungkinan error sejak awal. Defensive coding membantu kita menulis kode yang tidak terlalu mudah pecah saat menerima input yang tidak sesuai harapan.

## Konsep Inti

### 1. Jangan Langsung Mengasumsikan Input Selalu Benar

```js
function greet(name) {
  if (typeof name !== 'string') {
    return 'Nama tidak valid';
  }

  return `Halo, ${name}`;
}
```

Asumsi yang terlalu optimistis sering menjadi sumber error dasar.

### 2. Validasi Sederhana Bisa Mencegah Error Lebih Cepat

```js
function getFirstItem(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return undefined;
  }

  return items[0];
}
```

Pengecekan kecil di awal sering lebih murah daripada memperbaiki error yang muncul belakangan.

### 3. Defensive Coding Bukan Berarti Kode Harus Penuh Ketakutan

```js
function printUpper(text) {
  if (typeof text !== 'string') {
    throw new Error('text harus string');
  }

  return text.toUpperCase();
}
```

Tujuannya adalah menjaga asumsi penting tetap jelas, bukan membuat kode terlalu rumit.

## Praktik yang Direkomendasikan

- Cek input penting di awal fungsi.
- Gunakan guard sederhana untuk kondisi yang paling sering gagal.
- Pilih respons yang sesuai: fallback, `return`, atau `throw`, tergantung kebutuhan.

## Kesalahan Umum

- Mengasumsikan semua caller selalu mengirim data yang benar.
- Menambahkan pengecekan berlebihan pada semua hal sampai kode sulit dibaca.
- Tidak konsisten antara kapan memakai fallback dan kapan harus melempar error.

## Checkpoint Cepat

1. Kenapa defensive coding membantu sebelum error benar-benar muncul?
2. Apa beda guard sederhana dengan penanganan error setelah kegagalan terjadi?
3. Kapan fallback lebih masuk akal daripada `throw`?

## Analogi

- Intuisi Singkat: Defensive coding adalah kebiasaan menyiapkan pagar pengaman kecil di titik rawan.
- Analogi: Seperti memeriksa tiket sebelum orang masuk ruangan; pemeriksaan itu mencegah masalah lebih besar di dalam.
- Batas Analogi: Di JavaScript, kita tetap perlu menyeimbangkan keamanan dan keterbacaan, jadi defensive coding tidak berarti semua pintu harus dijaga berlapis-lapis.

## Ringkasan

- Defensive coding membantu mencegah error lebih awal.
- Pengecekan input dan guard sederhana membuat asumsi fungsi lebih aman.
- Tujuannya adalah menjaga alur tetap waras, bukan menambah kerumitan tanpa alasan.

## Contoh Runnable

- Lihat contoh: `../examples/C06-defensive-coding-dasar/example.js`
- Lihat contoh tambahan: `../examples/C06-defensive-coding-dasar/example-02.js`
- Lihat contoh tambahan: `../examples/C06-defensive-coding-dasar/example-03.js`
- Panduan: `../examples/C06-defensive-coding-dasar/README.md`
