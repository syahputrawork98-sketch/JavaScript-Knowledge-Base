# Changelog

Semua perubahan materi buku dicatat di file ini.

## [Unreleased]

- Memperluas blueprint buku dari `C01-C12` menjadi `C01-C16` agar pemisahan topik object, array, built-ins, dan reference behavior lebih rapi.
- Memperbarui `README.md` dan `chapters/README.md` agar selaras dengan struktur 16 chapter.
- Menyelaraskan urutan chapter yang sudah ditulis dengan blueprint final: materi array dasar dipindah ke slot `C05`.
- Menambahkan draft awal `C03-C04` agar blok fondasi object mulai terbentuk sebelum masuk ke array.
- Menambahkan examples runnable untuk `C03-C04` agar batch fondasi object `C01-C04` langsung bisa dipraktikkan.
- Menambahkan chapter `C06` beserta examples runnable untuk iterasi array dasar dengan loop dan `forEach()`.
- Menambahkan chapter `C07` beserta examples runnable untuk operasi mutable array `push()`, `pop()`, `shift()`, dan `unshift()`.
- Menambahkan chapter `C08` beserta examples runnable untuk `map()`, `filter()`, dan `find()` level pemula.
- Menambahkan chapter `C09` beserta examples runnable untuk membedakan operasi mutable dan non-mutable dasar pada array.
- Menambahkan chapter `C10` beserta examples runnable untuk built-in `Object.keys()`, `Object.values()`, dan `Object.entries()`.
- Menambahkan chapter `C11` beserta examples runnable untuk built-in array `slice()`, `concat()`, dan `join()`.
- Menambahkan chapter `C12` beserta examples runnable untuk built-in array `includes()`, `some()`, dan `every()`.
- Menambahkan chapter `C13` beserta examples runnable untuk built-in `Math` dan `Number` yang paling praktis untuk pemula.
- Menambahkan chapter `C14` beserta examples runnable untuk `JSON.stringify()` dan `JSON.parse()` pada data sederhana.
- Menambahkan chapter `C15` beserta examples runnable untuk reference behavior object/array saat melewati function.
- Menambahkan chapter `C16` beserta examples runnable untuk checklist debugging bug data structure dasar.
- Merapikan dokumen status B05 agar mencerminkan bahwa chapter dan examples `C01-C16` kini sudah tersedia penuh.
- Mengurangi overlap materi antara `C04` dan `C10`, serta memperjelas bahwa contoh salinan di `C15` adalah shallow copy untuk kasus dasar.
- Menambahkan batch awal visual map SVG untuk `C01`, `C05`, dan `C09`, lalu menghubungkannya ke chapter terkait.
- Menambahkan batch kedua visual map SVG untuk `C08`, `C14`, dan `C15`, lalu menghubungkannya ke chapter terkait.
- Menambahkan batch ketiga visual map SVG untuk `C10` dan `C12`, lalu menghubungkannya ke chapter terkait.

## [v1.0.0] - 2026-03-12

Kode versi: `JVS-R01-B05-v1.0.0`

- Merapikan dokumen inti B05 dari placeholder template ke struktur final.
- Menetapkan blueprint awal chapter `C01-C12` pada `chapters/README.md`.
- Menyusun ulang `README.md` agar status, cakupan, dan struktur B05 akurat.
- Memperbaiki referensi folder pada `docs/README.md`.
- Menambahkan chapter awal `C01-C03` untuk fondasi object dan array.
- Menambahkan folder `examples/` beserta contoh runnable untuk `C01-C03`.
- Menambahkan `examples/README.md` dan `assets/README.md` sebagai pedoman awal folder pendukung.
