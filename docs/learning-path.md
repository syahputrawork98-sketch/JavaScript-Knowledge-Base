# Learning Path JavaScript First Principles

Dokumen ini memetakan alur prasyarat per topik dan kamus istilah yang diperkenalkan secara bertahap.

## Foundations Flow
1. `01-values-types-coercion.md`
2. `02-scope-hoisting.md`
3. `03-function-closure-dasar.md`
4. `04-this-binding-dasar.md`
5. `05-object-prototype-dasar.md`
6. `06-async-javascript-dasar.md`

## Advanced Flow
1. `01-closure-patterns.md`
2. `02-this-binding-lanjutan.md`
3. `03-prototype-chain-lanjutan.md`
4. `04-promise-async-await.md`
5. `05-error-handling-defensive-coding.md`
6. `06-module-organization-esm.md`

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

## Prasyarat Per Topik (Advanced)
- `01-closure-patterns.md`
  - prasyarat: foundations topik 03
  - membuka jalan ke: pola stateful utility dan module
- `02-this-binding-lanjutan.md`
  - prasyarat: advanced topik 01 + foundations topik 04
  - membuka jalan ke: method borrowing dan callback context control
- `03-prototype-chain-lanjutan.md`
  - prasyarat: foundations topik 05
  - membuka jalan ke: desain inheritance berbasis delegasi yang aman
- `04-promise-async-await.md`
  - prasyarat: foundations topik 06
  - membuka jalan ke: orkestrasi async flow yang rapi dan efisien
- `05-error-handling-defensive-coding.md`
  - prasyarat: advanced topik 04
  - membuka jalan ke: desain alur error yang stabil dan mudah di-debug
- `06-module-organization-esm.md`
  - prasyarat: advanced topik 05
  - membuka jalan ke: transisi ke internals dengan boundary modul yang rapi

## Kamus Bertahap (Pertama Muncul)
- `value`, `type`, `coercion`, `primitive`, `reference`: topik 01
- `scope`, `hoisting`, `TDZ`, `execution context`: topik 02
- `parameter`, `argument`, `closure`: topik 03
- `this`, `method call`, `explicit binding`: topik 04
- `property`, `method`, `prototype`, `prototype chain`: topik 05
- `call stack`, `task queue`, `microtask queue`, `event loop`: topik 06

## Kamus Bertahap (Advanced - Mulai)
- `factory function`, `encapsulation`, `data privacy`, `stale closure`: advanced topik 01
- `hard binding`, `soft binding`, `callback context loss`, `method borrowing`: advanced topik 02
- `shadowing`, `delegation`, `mutation risk`, `prototype pollution`: advanced topik 03
- `promise chaining`, `sequential await`, `parallel await`, `fail-fast`: advanced topik 04
- `error boundary`, `defensive coding`, `guard clause`, `fallback value`: advanced topik 05
- `ESM`, `named export`, `default export`, `side-effect import`: advanced topik 06

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
