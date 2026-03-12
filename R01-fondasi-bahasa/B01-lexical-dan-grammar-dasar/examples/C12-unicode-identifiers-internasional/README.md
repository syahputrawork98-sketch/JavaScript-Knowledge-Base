# Example C12

Contoh runnable untuk bab **C12 - Unicode dan Identifiers Internasional**.

## Tujuan Example

Folder ini membantu pembaca melihat bahwa source code JavaScript dapat memuat karakter internasional, baik di string maupun lewat Unicode escape.

## Daftar File

- `example.js` menunjukkan string dengan beberapa bahasa dan teks biasa.
- `example-02.js` fokus pada dua string internasional yang ditulis dengan Unicode escape.
- `example-03.js` menunjukkan kata beraksen dan nama yang juga dibentuk dari Unicode escape.

## Penjelasan Per File

### `example.js`

Contoh utama ini berisi beberapa string Unicode:

```js
const greeting = '\u3053\u3093\u306B\u3061\u306F';
const arabic = '\u0645\u0631\u062D\u0628\u0627';
const cafe = 'kopi';
```

Saat dijalankan, output menampilkan teks Jepang, Arab, dan Latin biasa berdampingan. Ini membantu pembaca melihat bahwa JavaScript memang berbasis Unicode, bukan ASCII saja.

### `example-02.js`

File ini adalah versi lebih ringkas:

```js
const jp = '\u3053\u3093\u306B\u3061\u306F';
const ar = '\u0645\u0631\u062D\u0628\u0627';
```

Tujuannya untuk menekankan bahwa karakter internasional bisa ditulis tanpa harus mengetik langsung karakter aslinya.

### `example-03.js`

Contoh ini menunjukkan Unicode escape untuk kata beraksen dan nama:

```js
const cafe = '\u0063\u0061\u0066\u00E9';
const name = '\u0041\u0072\u0074\u0061';
```

Output yang diharapkan:

```bash
café Arta
```

Contoh ini berguna untuk membangun intuisi bahwa satu teks yang terlihat normal di layar bisa berasal dari representasi source yang berbeda.

## Catatan Belajar

- Unicode sangat berguna untuk data dan teks internasional.
- Untuk identifier, tetap pertimbangkan konsistensi tim dan keterbacaan tooling.
- Karakter yang tampak mirip belum tentu karakter yang sama, jadi hati-hati saat review kode.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
