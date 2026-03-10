# Memory Profiling: Heap Snapshot, Allocation, dan Retention Path

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`11` pada Buku 05.
- Prasyarat langsung: `10-circular-references-dan-serialization-traps.md`.
- Lanjut setelah ini: `12-sharedarraybuffer-atomics-memory-model-dasar.md`.

Prasyarat topik:
- Sudah paham memory leak patterns.
- Sudah paham konsep reachability.

Referensi remedial:
- [`01-memory-lifecycle-garbage-collection.md`](./01-memory-lifecycle-garbage-collection.md)
- [`05-memory-leak-patterns-dan-cleanup.md`](./05-memory-leak-patterns-dan-cleanup.md)

Kamus mini topik:
- `[baru]` Heap snapshot: potret state heap pada waktu tertentu.
- `[baru]` Allocation timeline: jejak alokasi object dari waktu ke waktu.
- `[baru]` Retention path: jalur reference yang menahan object tetap hidup.
- `[ulang]` Leak candidate: object yang terus bertambah tanpa lifecycle jelas.

## Pengantar Singkat Topik
Topik ini memberi workflow diagnosis memory leak yang sistematis. Tujuannya menghindari perbaikan spekulatif tanpa bukti profiling.

## 1) Big Picture
Tanpa workflow profiling, leak sering ditangani dengan trial-and-error. Heap snapshot dan retention path memberi bukti objektif object mana yang menumpuk dan siapa yang menahannya.

## 2) Small Picture
1. Ambil baseline snapshot pada kondisi awal stabil.
2. Jalankan skenario yang dicurigai memicu leak secara berulang.
3. Ambil snapshot kedua/ketiga dan bandingkan growth object.
4. Telusuri retention path object yang meningkat terus.
5. Perbaiki sumber retention, lalu verifikasi dengan snapshot ulang.

## 3) Wireframe
```text
[baseline snapshot] -> [ulang skenario] -> [snapshot pembanding] -> [analisis growth + retention path]

[fix cleanup] -> [snapshot ulang] -> [growth turun/stabil]
```

## 4) Analogi
Seperti audit gudang berkala: bukan menebak barang hilang/menumpuk, tapi membandingkan stok nyata antar periode dan melacak siapa pemegang barangnya.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: investigasi memory leak di aplikasi long-running.
- Alasan pakai: keputusan perbaikan berdasarkan bukti, bukan asumsi.
- Kapan tidak dipakai: issue kecil sekali yang tidak berdampak dan belum reproducible.

## 6) Contoh Sederhana
```js
function mount(items) {
  const id = setInterval(() => {
    // closure menahan items
    if (items.length > 1000) {
      // no-op
    }
  }, 1000);

  return () => clearInterval(id);
}
```

### Bedah Output (Langkah Demi Langkah)
1. `items` tertangkap closure callback interval.
2. Selama interval hidup, `items` tetap reachable.
3. Jika `clearInterval` tidak dipanggil, retention path tetap ada.
4. Snapshot biasanya menunjukkan object terkait tetap bertahan.

## 7) Jebakan Umum
- Hanya melihat angka total memory tanpa cek retention path.
- Profiling pada skenario yang tidak reproducible.
- Memperbaiki symptom, bukan sumber reference penahan object.

## 8) Prediksi Output Drill
```text
Snapshot A: setelah load awal.
Snapshot B: setelah buka-tutup modal 50x.
Hasil: jumlah Detached DOM Nodes naik konsisten.
```

### Kunci Jawaban Drill
- Indikasi kuat ada leak lifecycle UI.
- Prioritas audit: listener, timer, closure, dan referensi node yang tidak dilepas.

## 9) Debug Story
Kasus: tab dashboard naik dari 180MB ke 600MB setelah 45 menit.
Langkah debug:
1. Rekam langkah reproduksi yang konsisten.
2. Ambil A/B snapshot dan bandingkan constructor dominan yang naik.
3. Buka retention path object dominan untuk menemukan owner reference.
4. Perbaiki cleanup di owner tersebut.
5. Ulangi profiling untuk memastikan trend growth berhenti.

## 10) Checkpoint
- [ ] Bisa menjelaskan fungsi snapshot, allocation timeline, dan retention path.
- [ ] Bisa menyusun alur investigasi leak end-to-end.
- [ ] Bisa menentukan kapan fix dianggap tervalidasi.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik 01 dan 05.
2. Praktikkan satu skenario leak kecil lalu snapshot sebelum/sesudah.
3. Catat retention path dalam bahasa sendiri.
