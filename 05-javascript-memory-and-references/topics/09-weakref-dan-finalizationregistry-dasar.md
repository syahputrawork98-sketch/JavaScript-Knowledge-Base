# WeakRef dan FinalizationRegistry Dasar

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`9` pada Buku 05.
- Prasyarat langsung: `08-weakmap-weakset-dan-ephemeral-cache.md`.
- Lanjut setelah ini: `10-circular-references-dan-serialization-traps.md`.

Prasyarat topik:
- Sudah paham reachability dan GC high-level.
- Sudah paham perbedaan Map vs WeakMap.

Referensi remedial:
- [`01-memory-lifecycle-garbage-collection.md`](./01-memory-lifecycle-garbage-collection.md)
- [`08-weakmap-weakset-dan-ephemeral-cache.md`](./08-weakmap-weakset-dan-ephemeral-cache.md)

Kamus mini topik:
- `[baru]` `WeakRef`: reference lemah ke object yang bisa hilang kapan saja.
- `[baru]` `FinalizationRegistry`: callback pasca-GC dengan timing tidak deterministik.
- `[ulang]` Reachability: status object masih dapat dijangkau dari root reference.

## Pengantar Singkat Topik
Topik ini mengenalkan `WeakRef` dan `FinalizationRegistry` sebagai fitur advanced untuk kasus khusus. Fokus utamanya adalah batasan dan kapan fitur ini tidak tepat dipakai.

## 1) Big Picture
`WeakRef` dan `FinalizationRegistry` sering disalahgunakan sebagai mekanisme lifecycle utama. Ini berbahaya karena waktu GC tidak bisa diprediksi. Untuk mayoritas aplikasi, cleanup eksplisit tetap jalur utama, sedangkan fitur weak reference dipakai untuk optimasi tambahan.

## 2) Small Picture
1. `WeakRef.deref()` dapat mengembalikan object atau `undefined`.
2. Hasil `deref()` bisa berubah antar waktu tanpa sinyal sinkron.
3. `FinalizationRegistry` callback bisa terlambat atau tidak cocok untuk logika penting.
4. Jangan andalkan GC timing untuk correctness aplikasi.
5. Gunakan cleanup eksplisit sebagai sumber kebenaran lifecycle.

## 3) Wireframe
```text
[buat object] -> [bungkus WeakRef] -> [object bisa jadi unreachable] -> [deref mungkin undefined]

[register FinalizationRegistry] -> [GC terjadi kapan saja] -> [callback mungkin jalan belakangan]
```

## 4) Analogi
`WeakRef` seperti catatan alamat rumah yang bisa sewaktu-waktu tidak valid. Kamu boleh cek alamatnya, tapi tidak boleh mengandalkan alamat itu selalu ada.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: cache metadata opportunistic, optimasi memori non-kritis.
- Alasan pakai: memberi peluang melepas data saat object utama sudah tidak relevan.
- Kapan tidak dipakai: flow bisnis utama, cleanup wajib, transaksi penting.

## 6) Contoh Sederhana
```js
let target = { id: 1 };
const ref = new WeakRef(target);

console.log(ref.deref()?.id); // 1

target = null;
// Hasil deref setelah ini tidak deterministik. Bisa object, bisa undefined.
console.log(ref.deref());
```

### Bedah Output (Langkah Demi Langkah)
1. `ref` tidak menjaga object tetap hidup secara kuat.
2. Saat `target = null`, jalur reference kuat dari variabel ini hilang.
3. GC boleh membersihkan object kapan saja.
4. Karena itu `ref.deref()` tidak boleh dipakai untuk logika deterministik.

## 7) Jebakan Umum
- Menjadikan `FinalizationRegistry` sebagai mekanisme release resource kritis.
- Menganggap callback finalizer pasti cepat.
- Menggunakan `WeakRef` untuk data yang wajib selalu tersedia.

## 8) Prediksi Output Drill
```js
let obj = { value: 10 };
const weak = new WeakRef(obj);

obj = null;
console.log(weak.deref() === undefined);
```

### Kunci Jawaban Drill
- Tidak ada output deterministik (`true` atau `false` bisa terjadi).
- Alasan: timing GC tidak dapat dipastikan secara sinkron.

## 9) Debug Story
Kasus: fitur cache kadang mengembalikan data, kadang kosong, padahal input sama.
Langkah debug:
1. Audit apakah cache memakai `WeakRef` untuk data yang seharusnya wajib.
2. Pisahkan data wajib (strong reference) vs data opsional (weak reference).
3. Tambahkan fallback load saat `deref()` mengembalikan `undefined`.

## 10) Checkpoint
- [ ] Bisa menjelaskan kenapa `WeakRef`/`FinalizationRegistry` bersifat advanced-only.
- [ ] Bisa menyebutkan kenapa timing GC tidak boleh jadi fondasi logika.
- [ ] Bisa menentukan satu use case yang cocok dan satu yang tidak cocok.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik 01 (reachability dan GC).
2. Ulangi topik 08 (Map vs WeakMap).
3. Latih pemisahan data kritis vs data opsional pada desain cache.
