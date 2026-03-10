# SharedArrayBuffer, Atomics, dan Memory Model Dasar

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`12` pada Buku 05.
- Prasyarat langsung: `11-memory-profiling-heap-snapshot-dan-retention-path.md`.
- Lanjut setelah ini: lanjut latihan lintas buku.

Prasyarat topik:
- Sudah paham async dasar dan worker concept.
- Sudah paham race condition pada level konsep.

Referensi remedial:
- [`../../03-asynchronous-javascript-model/topics/05-concurrency-patterns.md`](../../03-asynchronous-javascript-model/topics/05-concurrency-patterns.md)
- [`../../03-asynchronous-javascript-model/topics/09-bounded-concurrency-dan-pool-pattern.md`](../../03-asynchronous-javascript-model/topics/09-bounded-concurrency-dan-pool-pattern.md)

Kamus mini topik:
- `[baru]` `SharedArrayBuffer`: buffer memori yang bisa diakses lintas worker.
- `[baru]` `Atomics`: operasi sinkronisasi aman untuk data bersama.
- `[baru]` Data race: konflik baca/tulis bersamaan tanpa sinkronisasi.
- `[ulang]` Deterministic update: hasil konsisten walau ada konkurensi.

## Pengantar Singkat Topik
Topik penutup ini memperkenalkan shared memory lintas worker. Fokusnya pemahaman model, bukan optimasi level rendah.

## 1) Big Picture
Saat beberapa worker berbagi data yang sama, assignment biasa tidak cukup aman. `SharedArrayBuffer` menyediakan ruang data bersama, dan `Atomics` menjaga operasi kritis tetap konsisten.

## 2) Small Picture
1. Buat `SharedArrayBuffer` lalu akses melalui typed array view.
2. Worker berbeda dapat membaca/menulis view yang sama.
3. Operasi kritis pakai `Atomics` (`load/store/add/compareExchange`).
4. Tanpa `Atomics`, hasil bisa race dan tidak deterministik.
5. Gunakan pola ini hanya jika benar-benar butuh shared memory.

## 3) Wireframe
```text
[shared buffer] -> [worker A tulis] + [worker B baca/tulis] -> [sinkronisasi via Atomics] -> [hasil konsisten]
```

## 4) Analogi
Seperti papan skor bersama yang bisa diakses banyak petugas. Tanpa aturan giliran tulis, angka bisa kacau.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: koordinasi counter, signaling sederhana lintas worker.
- Alasan pakai: menghindari overhead salin pesan besar berulang.
- Kapan tidak dipakai: mayoritas aplikasi UI/backend biasa yang cukup dengan message passing.

## 6) Contoh Sederhana
```js
const buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
const view = new Int32Array(buffer);

Atomics.store(view, 0, 1);
Atomics.add(view, 0, 2);

console.log(Atomics.load(view, 0)); // 3
```

### Bedah Output (Langkah Demi Langkah)
1. Buffer bersama dibuat 1 slot `Int32`.
2. `Atomics.store` menulis nilai awal secara sinkron.
3. `Atomics.add` menambah nilai secara atomik.
4. `Atomics.load` membaca nilai konsisten akhir.

## 7) Jebakan Umum
- Menulis ke shared view tanpa operasi atomik saat ada writer jamak.
- Menggunakan shared memory saat message passing sebenarnya cukup.
- Tidak mendokumentasikan protokol sinkronisasi antar worker.

## 8) Prediksi Output Drill
```js
const buf = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
const v = new Int32Array(buf);

Atomics.store(v, 0, 0);
Atomics.add(v, 0, 1);
Atomics.add(v, 0, 1);
console.log(Atomics.load(v, 0));
```

### Kunci Jawaban Drill
- Output: `2`
- Alasan: dua operasi add atomik dijalankan terhadap slot yang sama.

## 9) Debug Story
Kasus: nilai counter lintas worker kadang lompat/mundur.
Langkah debug:
1. Audit jalur update apakah ada write non-atomic.
2. Satukan operasi kritis ke `Atomics`.
3. Dokumentasikan protokol update (siapa menulis, kapan membaca).
4. Uji ulang dengan beban concurrency tinggi.

## 10) Checkpoint
- [ ] Bisa menjelaskan kapan `SharedArrayBuffer` relevan.
- [ ] Bisa menjelaskan kenapa `Atomics` dibutuhkan untuk shared write.
- [ ] Bisa menyebutkan satu skenario yang sebaiknya tetap pakai message passing.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik concurrency di buku 03.
2. Coba eksperimen slot counter tunggal dengan `Atomics`.
3. Buat catatan perbandingan shared memory vs message passing.
