# Changelog

Semua perubahan penting pada repo ini akan dicatat di file ini.

Format mengikuti prinsip [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) dan Semantic Versioning.

## Aturan Versi
- Gunakan format versi: `MAJOR.MINOR.PATCH` (contoh: `1.2.0`).
- Setiap rilis wajib memakai tanggal format `YYYY-MM-DD`.
- Perubahan baru dicatat dulu di `Unreleased`, lalu dipindah saat rilis.

## Aturan Batas Baris
- `CHANGELOG.md` maksimal **200 baris**.
- Jika lebih dari 200 baris, pindahkan entri paling lama ke `CHANGELOG-ARCHIVE.md`.
- Pertahankan entri terbaru di `CHANGELOG.md` (termasuk `Unreleased`).
- Saat memindahkan, urutan kronologis wajib tetap konsisten.

## Prosedur Rotasi
1. Cek jumlah baris `CHANGELOG.md`.
2. Jika jumlah baris `<= 200`, tidak ada rotasi.
3. Jika jumlah baris `> 200`, pindahkan entri versi paling lama (bukan `Unreleased`) ke `CHANGELOG-ARCHIVE.md`.
4. Pastikan format section versi tetap sama di dua file.
5. Simpan `Unreleased` dan entri terbaru tetap di `CHANGELOG.md`.
6. Catat aksi rotasi di section `Unreleased` bagian `Changed`.

## [Unreleased]

### Added
- Belum ada.

### Changed
- Belum ada.

## [0.2.0] - 2026-03-03

### Added
- Menambahkan file rujukan global `PRASYARAT-DAN-KAMUS-MINI.md` untuk penguatan ulang istilah dasar dan prasyarat antar level.
- Menambahkan `docs/learning-path.md` untuk memetakan alur prasyarat dan kamus bertahap per topik.
- Menambahkan paket dokumen remedial prasyarat di `docs/prasyarat/` (console/if, variabel, function, object, promise) dengan contoh dan checklist.
- Menambahkan section `Cara Pakai Repo` dan `Format Commit (Saran)` di `README.md`.
- Menambahkan `Aturan Lulus Advanced` dan `Aturan Lulus Internals` pada README masing-masing level.
- Menambahkan materi lengkap `foundations/03-function-closure-dasar.md`.
- Menambahkan materi lengkap `foundations/04-this-binding-dasar.md`.
- Menambahkan materi lengkap `foundations/05-object-prototype-dasar.md`.
- Menambahkan materi lengkap `foundations/06-async-javascript-dasar.md`.

### Changed
- Menambahkan penomoran versi rilis agar pencatatan changelog lebih rapi.
- Menyinkronkan `README.md` agar format wajib materi mengikuti template terbaru (termasuk prasyarat, bedah output, kunci drill, dan jalur baca ulang).
- Menstandarkan section `0) Prasyarat dan Kamus Mini` di semua materi Foundations dengan format alur topik + tag istilah `[baru]/[ulang]`.
- Memperbarui `templates/topic-template.md` agar mengikuti format alur prasyarat dan kamus bertahap.
- Menambahkan `Referensi remedial` di section prasyarat pada seluruh materi Foundations.
- Memperbarui `README.md` dan `docs/learning-path.md` agar menampilkan jalur penggunaan dokumen remedial prasyarat.
- Merapikan semua file draft skeleton: judul dibuat lebih manusiawi dan referensi template diperbaiki ke `templates/topic-template.md`.
- Menambahkan rujukan cepat ke `PRASYARAT-DAN-KAMUS-MINI.md` pada template dan materi foundations yang sudah tersedia.
- Memperbaiki akurasi penjelasan strict mode pada `foundations/04-this-binding-dasar.md` (kasus function call langsung).
- Memperjelas alur `setTimeout` pada `foundations/06-async-javascript-dasar.md` (timer/Web API -> queue -> call stack).

## [0.1.0] - 2026-03-03

### Added
- Menambahkan kurikulum utama JavaScript First Principles di `README.md`.
- Menambahkan roadmap belajar: Foundations -> Advanced -> Internals.
- Menambahkan template standar untuk setiap materi (big picture, small picture, wireframe, analogi, use-case, alasan, pitfalls, drill, debug story, checkpoint).
- Menambahkan file `CHANGELOG.md` untuk mencatat semua perubahan penting.
- Menambahkan struktur folder materi: `foundations/`, `advanced/`, dan `internals/`.
- Menambahkan materi baseline: `foundations/01-values-types-coercion.md`.
- Menambahkan template baku materi di `templates/topic-template.md`.
- Menambahkan index per level: `foundations/README.md`, `advanced/README.md`, `internals/README.md`.
- Menambahkan skeleton file topik untuk semua level sesuai roadmap.
- Menambahkan materi baru `foundations/02-scope-hoisting.md`.

### Changed
- Memperluas section `Hasil Akhir yang Ditargetkan` dengan target memory, runtime, performa, dan event loop.
- Menambahkan section `Struktur Repo` dan `Graduation Criteria` di `README.md`.
- Menambahkan section `Prosedur Rotasi` agar batas 200 baris changelog operasional.
- Merevisi `foundations/01-values-types-coercion.md` agar lebih ramah pemula dengan prasyarat, kamus mini, bedah output langkah demi langkah, kunci drill, dan jalur baca ulang.
