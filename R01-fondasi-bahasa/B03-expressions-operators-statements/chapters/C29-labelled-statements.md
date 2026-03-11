# C29 - [14.13] Labelled Statements

## Tujuan

Bab ini bertujuan memahami label pada statement dan penggunaan terbatasnya untuk kontrol flow.

## Kenapa Bab Ini Penting

Label jarang dipakai, tetapi kadang muncul di nested loop legacy untuk `break`/`continue` bertarget.

## Konsep Inti

### 1. Label Menamai Statement

```js
outer: for (...) {
  ...
}
```

### 2. `break label` Keluar dari Statement Bertarget

Berguna untuk keluar dari nested loop tertentu.

### 3. `continue label` Lanjut Iterasi Loop Bertarget

Hanya valid untuk iteration statement bertanda label.

### 4. Keterbacaan Harus Jadi Prioritas

Label bisa efektif tapi mudah membuat flow sulit dipahami.

## Praktik yang Direkomendasikan

- Gunakan label hanya jika alternatif lebih buruk.
- Beri nama label yang deskriptif (`outerLoop`, bukan `x`).
- Pertimbangkan refactor fungsi untuk mengganti label kompleks.

## Kesalahan Umum

- Menggunakan label untuk flow sederhana yang tidak butuh.
- Nama label tidak bermakna.
- Membuat jalur `break/continue` sulit ditelusuri reviewer.

## Checkpoint Cepat

1. Kapan `break label` berguna?
2. Apa beda `break label` dan `continue label`?
3. Kenapa label sebaiknya dipakai terbatas?

## Analogi

- Intuisi Singkat: Labelled statement memberi target bernama untuk break/continue.
- Analogi: Seperti penanda lantai agar perpindahan titik bisa eksplisit.
- Batas Analogi: Terlalu banyak label membuat alur sulit dibaca.

## Ringkasan

- Label adalah fitur kontrol flow tingkat lanjut di statement.
- Berguna terutama untuk nested loop bertarget.
- Gunakan seperlunya demi keterbacaan jangka panjang.

## Visual Map

![C29 - [14.13] Labelled Statements Map](../assets/C29-labelled-statements-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C29-labelled-statements/example.js
- Panduan: ../examples/C29-labelled-statements/README.md
