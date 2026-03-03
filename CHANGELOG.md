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

### Changed
- Menambahkan penomoran versi rilis agar pencatatan changelog lebih rapi.

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
