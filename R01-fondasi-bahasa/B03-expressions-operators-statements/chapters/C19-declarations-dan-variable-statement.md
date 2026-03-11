# C19 - [14.3] Declarations dan Variable Statement

## Tujuan

Bab ini bertujuan memahami declaration statement (`let`, `const`, `var`) dalam konteks flow statement.

## Kenapa Bab Ini Penting

Pilihan declaration memengaruhi scope, re-assignment, dan prediktabilitas alur program.

## Konsep Inti

### 1. `let` dan `const` untuk Scope Modern

```js
let count = 0;
const LIMIT = 10;
```

### 2. `var` Bersifat Function-Scoped

```js
if (true) {
  var legacy = 'visible outside block';
}
```

### 3. `const` Wajib Inisialisasi

`const` tidak bisa dideklarasi tanpa nilai awal.

### 4. Declaration adalah Statement

Declaration mengikat nama ke environment saat eksekusi mencapai titik tersebut.

## Praktik yang Direkomendasikan

- Gunakan `const` sebagai default.
- Pakai `let` hanya jika memang akan diubah.
- Hindari `var` kecuali harus membaca kode legacy.

## Kesalahan Umum

- Mengira `const` membuat object jadi immutable total.
- Menggunakan `var` lalu bingung leak scope.
- Redeclare nama yang sama tanpa sadar di scope berdekatan.

## Checkpoint Cepat

1. Kapan pilih `let` dibanding `const`?
2. Kenapa `var` bisa muncul di luar block?
3. Apa risiko utama jika `var` dipakai sembarangan?

## Ringkasan

- Declaration statement memengaruhi stabilitas state program.
- `const/let` lebih aman untuk code modern.
- Scope yang tepat memperkecil bug flow.

## Visual Map

![C19 - [14.3] Declarations dan Variable Statement Map](../assets/C19-declarations-dan-variable-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C19-declarations-dan-variable-statement/example.js
- Panduan: ../examples/C19-declarations-dan-variable-statement/README.md

