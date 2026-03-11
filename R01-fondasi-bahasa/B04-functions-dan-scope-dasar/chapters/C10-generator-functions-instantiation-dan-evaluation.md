# C10 - Generator Functions Instantiation dan Evaluation

## Tujuan

Bab ini bertujuan memahami instansiasi dan evaluasi generator function.

## Kenapa Bab Ini Penting

Setelah konsep dasar generator dipahami, langkah berikutnya adalah memahami kapan generator object dibuat, bagaimana state berpindah saat `next()`, dan bagaimana nilai masuk kembali ke generator.

## Konsep Inti

1. Instansiasi generator menghasilkan iterator object dengan state internal.
2. Setiap `next(value)` melanjutkan evaluasi dari titik `yield` terakhir.
3. Generator bisa selesai normal (`done: true`) atau selesai lebih awal (`return`/`throw`).

## Analogi Singkat

Bayangkan generator seperti permainan langkah demi langkah yang punya posisi terakhir tersimpan. Setiap kali pemain menekan tombol lanjut, permainan kembali berjalan dari posisi terakhir itu sambil membawa input baru kalau ada. Dalam JavaScript, state generator disimpan di antara `yield`, lalu diaktifkan lagi lewat `next(value)`.

Contoh alur state:

```js
function* flow() {
  const a = yield 'step-1';
  const b = yield a + 1;
  return b + 1;
}
```

## Praktik yang Direkomendasikan

- Uji transisi state generator langkah demi langkah menggunakan beberapa `next()`.
- Dokumentasikan nilai input/output tiap langkah saat debugging.
- Gunakan `for...of` untuk konsumsi sederhana, `next()` manual untuk kontrol detail.

## Kesalahan Umum

- Mengira parameter `next(value)` berlaku untuk `yield` yang sama, bukan berikutnya.
- Lupa memeriksa properti `done` saat mengonsumsi iterator manual.
- Menjalankan logika generator seolah-olah sinkron linear tanpa pause point.

## Checkpoint Cepat

1. Bagaimana `next(value)` mengirim nilai kembali ke generator?
2. Apa tanda bahwa generator sudah selesai?
3. Kapan memilih `for...of` vs kontrol manual `next()`?

## Ringkasan

- Instansiasi generator membentuk iterator dengan state eksekusi.
- Evaluation bergerak per langkah melalui `yield` dan `next()`.
- Memahami state transition membuat debugging generator jauh lebih mudah.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.5.3`
- `15.5.4`
- `15.5.5`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C10 Generator Functions Instantiation dan Evaluation Map](../assets/C10-generator-functions-instantiation-dan-evaluation-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C10-generator-functions-instantiation-dan-evaluation/example.js`
- Lihat contoh tambahan: `../examples/C10-generator-functions-instantiation-dan-evaluation/example-02.js`
- Lihat contoh tambahan: `../examples/C10-generator-functions-instantiation-dan-evaluation/example-03.js`
- Panduan: `../examples/C10-generator-functions-instantiation-dan-evaluation/README.md`
