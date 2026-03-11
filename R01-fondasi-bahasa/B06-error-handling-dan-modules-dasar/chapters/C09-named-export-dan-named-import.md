# C09 - Named `export` dan Named `import`

## Tujuan

Bab ini bertujuan memahami cara memakai named export untuk banyak nilai yang saling terkait.

## Kenapa Bab Ini Penting

Saat satu module perlu membagikan lebih dari satu nilai, named export biasanya menjadi pilihan yang jelas. Ini membantu pembaca melihat dengan eksplisit nilai mana yang tersedia dan nilai mana yang sedang dipakai oleh file lain.

## Konsep Inti

### 1. Satu Module Bisa Mengekspor Banyak Nilai Bernama

```js
export const appName = 'Belajar Modules';
export function formatName(name) {
  return name.toUpperCase();
}
```

Setiap nilai punya nama yang jelas dan bisa diambil secara spesifik.

### 2. Named `import` Mengambil Nilai dengan Nama yang Sama

```js
import { appName, formatName } from './helpers.js';
```

Tanda kurung kurawal menunjukkan bahwa kita sedang mengambil nama tertentu dari module tersebut.

### 3. Named Export Cocok Saat Module Punya Beberapa Hal Terkait

```js
// math-tools.js
export function add(a, b) {}
export function subtract(a, b) {}
```

Kalau module memang berisi sekumpulan utilitas terkait, named export membuat strukturnya lebih eksplisit.

## Praktik yang Direkomendasikan

- Gunakan named export saat module membagikan beberapa nilai yang setara.
- Pilih nama export yang jelas dan mudah ditebak.
- Import hanya nama yang memang dibutuhkan file tersebut.

## Kesalahan Umum

- Lupa memakai kurung kurawal pada named import.
- Membuat nama export terlalu umum sehingga cepat membingungkan.
- Mengimpor terlalu banyak nilai yang sebenarnya tidak dipakai.

## Checkpoint Cepat

1. Kapan named export terasa lebih cocok daripada default export?
2. Kenapa named import memakai kurung kurawal?
3. Apa manfaat mengimpor hanya nilai yang memang dipakai?

## Analogi

- Intuisi Singkat: Named export seperti daftar alat yang masing-masing punya label jelas.
- Analogi: Seperti kotak alat yang berisi obeng, palu, dan tang; kita bisa mengambil alat tertentu sesuai nama yang dibutuhkan.
- Batas Analogi: Di JavaScript, named export tetap mengikuti aturan file dan path module, jadi pengambilannya tidak bebas tanpa struktur.

## Ringkasan

- Named export cocok untuk membagikan beberapa nilai bernama dari satu module.
- Named import mengambil nilai itu secara eksplisit dengan kurung kurawal.
- Pola ini membantu hubungan antar file lebih jelas dibaca.

## Contoh Runnable

- Lihat contoh: `../examples/C09-named-export-dan-named-import/example.js`
- Lihat contoh tambahan: `../examples/C09-named-export-dan-named-import/example-02.js`
- Lihat contoh tambahan: `../examples/C09-named-export-dan-named-import/example-03.js`
- Panduan: `../examples/C09-named-export-dan-named-import/README.md`
