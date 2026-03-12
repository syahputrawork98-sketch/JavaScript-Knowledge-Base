# Example C06

Contoh runnable untuk bab **C06 - Arrow Function Runtime dan Evaluation**.

## Tujuan Example

Folder ini menunjukkan perilaku runtime arrow function, terutama lexical `this` dan lexical `arguments`.

## Daftar File

- `example.js` menunjukkan lexical `this`.
- `example-02.js` membandingkan `this` pada normal function dan arrow.
- `example-03.js` menunjukkan lexical `arguments`.

## Penjelasan Per File

### `example.js`

File utama ini menaruh arrow di dalam method object:

```js
const run = () => `user id is ${this.id}`;
```

Poin pentingnya: arrow mengambil `this` dari lingkungan lexical, bukan dari cara ia dipanggil kemudian.

### `example-02.js`

Contoh ini membandingkan:

```js
normal.call(context)
arrowFromGlobal.call(context)
```

Normal function bisa menerima `this` baru lewat `call`, sedangkan arrow tidak benar-benar mengganti `this` dengan cara yang sama.

### `example-03.js`

File ini menunjukkan bahwa arrow tidak punya `arguments` sendiri:

```js
const arrow = () => arguments.length;
```

Nilai `arguments` yang dibaca berasal dari fungsi luar, bukan dari arrow itu sendiri.

## Catatan Belajar

- Arrow function tidak membuat `this` baru.
- `call`, `apply`, dan `bind` tidak memengaruhi `this` arrow seperti pada function biasa.
- Lexical behavior ini adalah salah satu alasan arrow sangat berguna, sekaligus salah satu sumber kebingungan pemula.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.3.3`
- `15.3.4`
- `15.3.5`

Referensi chapter: `../../chapters/C06-arrow-function-runtime-dan-evaluation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
