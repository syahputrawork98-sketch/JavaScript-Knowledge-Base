# Learning Path JavaScript First Principles

Dokumen ini memetakan alur prasyarat per topik dan kamus istilah yang diperkenalkan secara bertahap.

## Foundations Flow
1. `01-values-types-coercion.md`
2. `02-scope-hoisting.md`
3. `03-function-closure-dasar.md`
4. `04-this-binding-dasar.md`
5. `05-object-prototype-dasar.md`
6. `06-async-javascript-dasar.md`

## Prasyarat Per Topik (Foundations)
- `01-values-types-coercion.md`
  - prasyarat: variabel dasar dan `console.log`
  - membuka jalan ke: scope, function, object
- `02-scope-hoisting.md`
  - prasyarat: topik 01
  - membuka jalan ke: closure dan `this`
- `03-function-closure-dasar.md`
  - prasyarat: topik 01-02
  - membuka jalan ke: advanced closure patterns
- `04-this-binding-dasar.md`
  - prasyarat: topik 02-03
  - membuka jalan ke: `this` lanjutan
- `05-object-prototype-dasar.md`
  - prasyarat: topik 01 dan 03
  - membuka jalan ke: prototype chain lanjutan
- `06-async-javascript-dasar.md`
  - prasyarat: topik 03
  - membuka jalan ke: promise/async-await lanjutan

## Kamus Bertahap (Pertama Muncul)
- `value`, `type`, `coercion`, `primitive`, `reference`: topik 01
- `scope`, `hoisting`, `TDZ`, `execution context`: topik 02
- `parameter`, `argument`, `closure`: topik 03
- `this`, `method call`, `explicit binding`: topik 04
- `property`, `method`, `prototype`, `prototype chain`: topik 05
- `call stack`, `task queue`, `microtask queue`, `event loop`: topik 06

## Aturan Penggunaan di Materi
- Setiap section `0) Prasyarat dan Kamus Mini` wajib menandai istilah dengan:
  - `[baru]` untuk istilah yang baru dikenalkan di topik itu
  - `[ulang]` untuk istilah review dari topik sebelumnya

## Dokumen Remedial Prasyarat
- [`prasyarat/console-dan-if-dasar.md`](./prasyarat/console-dan-if-dasar.md)
- [`prasyarat/variabel-dasar.md`](./prasyarat/variabel-dasar.md)
- [`prasyarat/function-dasar.md`](./prasyarat/function-dasar.md)
- [`prasyarat/object-dasar.md`](./prasyarat/object-dasar.md)
- [`prasyarat/promise-dasar.md`](./prasyarat/promise-dasar.md)
