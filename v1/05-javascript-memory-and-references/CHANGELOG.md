# Changelog - 05 JavaScript Memory and References

## 2026-03-08 - v0.3.0

### Added
- Menambahkan topik baru:
- `topics/09-weakref-dan-finalizationregistry-dasar.md`
- `topics/10-circular-references-dan-serialization-traps.md`
- `topics/11-memory-profiling-heap-snapshot-dan-retention-path.md`
- `topics/12-sharedarraybuffer-atomics-memory-model-dasar.md`

### Changed
- Menyelaraskan `README.md` buku 05 ke target kurasi 12 topik inti.
- Memperbarui `topics/README.md` untuk urutan topik `01` sampai `12`.
- Memperbarui `docs/learning-path.md` agar sinkron dengan rute belajar 12 topik.
- Menambahkan roadmap ekspansi 8 -> 12 topik di `README.md`.
- Memperdalam konten topik `09` sampai `12` agar setara struktur materi topik `01` sampai `08` (Big Picture, Small Picture, drill, debug story, checkpoint).

### Notes
- Topik `09-12` adalah perluasan advanced-menengah untuk melengkapi fondasi topik `01-08`.
- Pendekatan kurasi tetap bertahap: kualitas materi dijaga sebelum ekspansi lanjutan.
## 2026-03-06 - v0.2.0

### Added
- Menambahkan dokumen prasyarat aktif:
- `PRASYARAT-DAN-KAMUS-MINI.md`
- Menambahkan dokumen learning path:
- `docs/learning-path.md`
- Menambahkan topik baru:
- `topics/02-primitive-vs-reference-behavior.md`
- `topics/03-mutation-vs-immutability.md`
- `topics/04-referential-equality.md`
- `topics/05-memory-leak-patterns-dan-cleanup.md`
- `topics/06-copy-strategies-shallow-vs-deep.md`
- `topics/07-closure-retention-dan-memory-traps.md`
- `topics/08-weakmap-weakset-dan-ephemeral-cache.md`
- Menambahkan folder visualisasi:
- `assets/`
- Menambahkan aset SVG:
- `assets/memory-lifecycle-gc-map.svg`
- `assets/primitive-vs-reference-map.svg`
- `assets/mutation-vs-immutability-map.svg`
- `assets/referential-equality-map.svg`
- `assets/memory-leak-patterns-cleanup-map.svg`
- `assets/copy-strategies-shallow-vs-deep-map.svg`
- `assets/closure-retention-memory-traps-map.svg`
- `assets/weakmap-weakset-ephemeral-cache-map.svg`

### Changed
- Menormalkan `README.md` buku 05 agar `topics/` + `docs/` menjadi rute belajar utama.
- Menormalkan urutan topik aktif menjadi 8 topik dari memory lifecycle hingga WeakMap/WeakSet.
- Memperbarui referensi prasyarat/remedial/cross-buku pada topik `01` sampai `08`.
- Menambahkan referensi visual map pada topik `01` sampai `08`.
- Menyelaraskan index topik dan learning path agar konsisten dengan 8 topik aktif.

### Removed
- Menghapus artefak migrasi sementara:
- `migrated-from-02-first-principles/`

### Validation
- Link lokal area aktif buku 05 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.
- Seluruh aset SVG buku 05 telah divalidasi XML parse dan valid.

### Notes
- Buku 05 siap dipakai sebagai rute belajar memory/reference lengkap sebelum lanjut ke latihan lintas buku.


