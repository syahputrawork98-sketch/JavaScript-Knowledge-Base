# Example C17

Contoh runnable untuk bab **C17 - Async Function Definitions Syntax dan Instantiation**.

## Tujuan Example

Folder ini memperlihatkan bahwa async function selalu menghasilkan Promise, baik dalam bentuk declaration, expression, maupun method.

## Daftar File

- `example.js` menunjukkan async function mengembalikan Promise.
- `example-02.js` menunjukkan async declaration tetap menghasilkan Promise.
- `example-03.js` menunjukkan async method pada object.

## Penjelasan Per File

### `example.js`

Contoh utama ini memperlihatkan kontrak dasar async function:

```js
async function getLabel() {
  return 'async-ready';
}
```

Walaupun mengembalikan string, hasil pemanggilannya tetap berupa Promise.

### `example-02.js`

File ini memperkuat ide yang sama pada declaration lain:

```js
const result = loadUser('after');
console.log(result instanceof Promise);
```

Tujuannya agar pembaca tidak menganggap contoh sebelumnya hanya kebetulan.

### `example-03.js`

Contoh ini membawa konsep ke object method:

```js
const service = {
  async fetchId() { ... }
};
```

Jadi pembaca melihat bahwa async bukan hanya milik function declaration biasa.

## Catatan Belajar

- Async function selalu berbicara dengan Promise di permukaan luarnya.
- Bentuk definisinya bisa berbeda, tetapi kontrak runtime dasarnya sama.
- Saat membaca async function, biasakan bertanya: “nilai ini resolve ke apa?”

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.8`
- `15.8.1`
- `15.8.2`

Referensi chapter: `../../chapters/C17-async-function-definitions-syntax-dan-instantiation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
