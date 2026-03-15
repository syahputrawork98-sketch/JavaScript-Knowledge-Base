# Example C11

Contoh runnable untuk bab **C11 - Automatic Semicolon Insertion (ASI)**.

## Tujuan Example

Folder ini membantu pembaca melihat pola penulisan yang aman di area yang sering terkena efek ASI, terutama `return`, IIFE, dan baris yang diawali `[` .

## Daftar File

- `example.js` menunjukkan pola aman untuk `return` object literal dan IIFE.
- `example-02.js` fokus pada bentuk `return` yang aman.
- `example-03.js` menunjukkan alasan semicolon di awal baris kadang sengaja ditulis.

## Penjelasan Per File

### `example.js`

Bagian pertama file ini menunjukkan pola `return` yang benar:

```js
function safeReturn() {
  return {
    name: 'Arta'
  };
}
```

Object literal ditempatkan di baris yang sama dengan `return`, sehingga parser tidak menyisipkan semicolon di tengah.

Bagian berikut:

```js
const x = 10;
(function () {
  console.log('IIFE aman setelah semicolon');
})();
```

menunjukkan bahwa semicolon eksplisit membuat batas statement jelas sebelum IIFE dimulai.

### `example-02.js`

Contoh ini lebih fokus:

```js
function goodReturn() {
  return {
    ok: true
  };
}
```

Output yang diharapkan:

```bash
{ ok: true }
```

Ini adalah versi aman yang sebaiknya dibiasakan pembaca sejak awal.

### `example-03.js`

File ini memakai semicolon di awal baris:

```js
const value = 10;
;[1, 2, 3].forEach((n) => {
  console.log(n + value);
});
```

Tujuannya adalah memutus kemungkinan parser menganggap array di baris baru sebagai kelanjutan expression sebelumnya.

Output yang diharapkan:

```bash
11
12
13
```

## Catatan Belajar

- Untuk tahap belajar, semicolon eksplisit adalah pilihan paling aman.
- Hindari meletakkan object literal di baris baru setelah `return`.
- Hati-hati jika baris baru dimulai dengan `(`, `[`, atau template tag.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
