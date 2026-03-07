# Circular References dan Serialization Traps

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`10` pada Buku 05.
- Prasyarat langsung: `09-weakref-dan-finalizationregistry-dasar.md`.
- Lanjut setelah ini: `11-memory-profiling-heap-snapshot-dan-retention-path.md`.

Prasyarat topik:
- Sudah paham shallow vs deep copy.
- Sudah paham bentuk data object nested.

Referensi remedial:
- [`06-copy-strategies-shallow-vs-deep.md`](./06-copy-strategies-shallow-vs-deep.md)
- [`04-referential-equality.md`](./04-referential-equality.md)

Kamus mini topik:
- `[baru]` Circular reference: object saling mereferensikan membentuk siklus.
- `[baru]` Serialization trap: kegagalan serialisasi karena bentuk data tidak kompatibel.
- `[ulang]` Structured data: data yang bisa diproses oleh clone/serialize tertentu.

## Pengantar Singkat Topik
Topik ini membahas jebakan saat data runtime kompleks dipaksa menjadi format serialisasi tertentu. Fokusnya memilih strategi serialisasi yang tepat untuk kebutuhan nyata.

## 1) Big Picture
Banyak bug API, logging, dan persistence muncul bukan karena data salah, tetapi karena serializer tidak cocok. `JSON.stringify` cepat untuk interoperabilitas, tetapi punya batasan penting. `structuredClone` lebih kaya untuk clone runtime, tetapi tidak menggantikan semua kebutuhan serialisasi antar sistem.

## 2) Small Picture
1. `JSON.stringify` gagal pada circular reference.
2. `JSON.stringify` juga mengubah atau menghilangkan tipe tertentu (`Date`, `undefined`, function, `Map`, dsb).
3. `structuredClone` mendukung circular reference untuk banyak tipe terstruktur.
4. Pemilihan strategi harus berdasarkan tujuan: interoperabilitas atau clone internal runtime.

## 3) Wireframe
```text
[data runtime] -> [pilih serializer] -> [berhasil/gagal sesuai dukungan tipe]

[circular reference + JSON.stringify] -> [TypeError]
[circular reference + structuredClone] -> [clone berhasil pada data terdukung]
```

## 4) Analogi
JSON seperti formulir standar lintas instansi: formatnya stabil, tapi banyak detail khusus tidak ikut terbawa.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: desain contract API, penyimpanan, logging aman.
- Alasan pakai: mencegah crash serialisasi dan kehilangan data penting.
- Kapan tidak dipakai: jangan pakai JSON sebagai deep clone universal untuk semua tipe runtime.

## 6) Contoh Sederhana
```js
const a = { name: 'A' };
a.self = a;

try {
  JSON.stringify(a);
} catch (err) {
  console.log(err.name); // TypeError
}

const cloned = structuredClone(a);
console.log(cloned.self === cloned); // true
```

### Bedah Output (Langkah Demi Langkah)
1. `a.self = a` membentuk siklus reference.
2. `JSON.stringify` tidak mendukung siklus -> melempar TypeError.
3. `structuredClone` dapat menyalin graph data siklik pada kasus ini.
4. Hasil clone mempertahankan hubungan `self` ke object clone.

## 7) Jebakan Umum
- Menganggap JSON cocok untuk semua bentuk data runtime.
- Menangkap error serialisasi tanpa logging context.
- Menyimpan object besar mentah ke log tanpa sanitasi.

## 8) Prediksi Output Drill
```js
const obj = {
  createdAt: new Date('2026-01-01T00:00:00.000Z'),
  x: undefined,
};

const json = JSON.stringify(obj);
console.log(json);
```

### Kunci Jawaban Drill
- Properti `x` hilang dari hasil JSON.
- `createdAt` menjadi string ISO.
- Alasan: aturan serialisasi JSON untuk tipe data tersebut.

## 9) Debug Story
Kasus: payload audit log gagal dikirim saat object kompleks masuk logger.
Langkah debug:
1. Reproduce dengan payload minimal yang menyebabkan gagal.
2. Cek apakah ada circular reference atau tipe tidak kompatibel.
3. Tambahkan serializer aman atau transformasi payload sebelum logging.
4. Verifikasi output log tetap terbaca tanpa kehilangan konteks penting.

## 10) Checkpoint
- [ ] Bisa membedakan use case `JSON.stringify` vs `structuredClone`.
- [ ] Bisa mendeteksi circular reference sebelum serialisasi.
- [ ] Bisa menjelaskan konsekuensi kehilangan tipe pada JSON.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik 06 (copy strategies).
2. Coba eksperimen tipe data berbeda lalu serialize ke JSON.
3. Uji satu object circular kecil dengan `try/catch`.
