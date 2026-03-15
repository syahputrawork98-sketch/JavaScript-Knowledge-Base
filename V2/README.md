# JavaScript Learning Hub

Repository ini memakai analogi **perpustakaan**:

- root repository = perpustakaan
- folder level atas = rak
- folder di dalam rak = buku
- file materi di dalam buku = bab

Tujuan utamanya adalah membangun pemahaman JavaScript yang kuat, bukan sekadar kumpulan snippet.

Repository ini dibuat sebagai cara belajar yang lebih manusiawi untuk menghadapi JavaScript yang luas, dokumentasinya yang besar, dan detail teknis yang sering terasa melelahkan bila dibaca mentah-mentah. Alih-alih membaca sumber besar itu secara langsung tanpa struktur belajar yang nyaman, repository ini menyusunnya kembali menjadi perpustakaan belajar yang bertahap, terarah, dan lebih mudah dinavigasi.

## Visi Repository

JavaScript Learning Hub diposisikan sebagai **perpustakaan pembelajaran JavaScript**, bukan sekadar arsip catatan.

- Repository ini merangkum domain JavaScript besar menjadi rak, buku, dan bab yang lebih mudah dipelajari bertahap.
- Struktur ini dibuat agar pembaca bisa membangun mental model dengan urutan yang jelas, bukan tersesat di dokumentasi besar sejak awal.
- Setiap rak dan buku diharapkan membantu menjembatani dunia JavaScript yang formal dan luas menjadi materi yang lebih operasional, runnable, dan ramah dipelajari.

## Cara Membaca Struktur

- `README.md` root menjelaskan perpustakaan secara keseluruhan.
- Folder `Rxx-*` adalah rak berdasarkan domain besar JavaScript.
- Folder `Bxx-*` di dalam rak adalah buku yang membahas satu area belajar secara fokus.
- Folder `chapters/` berisi bab materi utama.
- Folder `examples/` berisi contoh runnable yang mendukung bab.
- Folder `assets/` berisi visual yang menjelaskan konsep.
- Folder `docs/` berisi aturan, batas scope, atau panduan editorial sesuai levelnya.

## Prinsip Dasar

- Materi disusun untuk membantu pembaca memahami JavaScript secara bertahap.
- Struktur harus tetap nyaman dibaca oleh manusia maupun AI yang membantu pengembangan repository.
- Setiap tambahan konten sebaiknya menjaga konsistensi kurikulum, analogi perpustakaan, dan jalur belajar yang sudah dibangun.

## Status Saat Ini

- Seluruh konten versi lama dipindahkan ke folder [`v1/`](./v1).
- Versi baru (`v2`) dibangun bertahap langsung dari root repository.
- Aturan operasional `v2` diletakkan di folder [`docs/`](./docs).

## Aturan Inti Struktur

- Root boleh punya `docs/` untuk aturan global perpustakaan.
- Setiap rak boleh punya `docs/` untuk aturan tingkat rak.
- Setiap buku boleh punya `docs/` untuk aturan tingkat buku.
- **Log perubahan hanya ada di level buku** (`CHANGELOG.md` di folder buku).

## Dokumen Global v2

- [`docs/AGENTS.md`](./docs/AGENTS.md)
- [`docs/repository-structure.md`](./docs/repository-structure.md)
- [`docs/writing-rules.md`](./docs/writing-rules.md)
- [`docs/contribution-rules.md`](./docs/contribution-rules.md)
- [`docs/README.md`](./docs/README.md)
- [`docs/track-map.md`](./docs/track-map.md)

## Daftar Rak v2

- `R01` Fondasi Bahasa (`R01-fondasi-bahasa/`)
- `R02` Runtime Dasar (`R02-runtime-dasar/`)
- `R03` Asynchronous (`R03-asynchronous/`)
- `R04` Object Model (`R04-object-model/`)
- `R05` Memory & References (`R05-memory-references/`)
- `R06` Modules & Program Structure (`R06-modules-program-structure/`)
- `R07` Engine & Performance (`R07-engine-performance/`)
- `R08` Spec Companion (`R08-spec-companion/`)
- `R09` Exercises & Case Study (`R09-exercises-case-study/`)


