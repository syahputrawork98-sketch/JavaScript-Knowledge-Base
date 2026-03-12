# Example C08

Contoh runnable untuk bab **C08 - String Literals dan Escape Sequences**.

## Tujuan Example

Folder ini membantu pembaca memahami cara menulis string yang mengandung karakter khusus seperti quote, backslash, newline, tab, dan Unicode.

## Daftar File

- `example.js` memperlihatkan beberapa escape sequence yang paling sering dipakai.
- `example-02.js` fokus pada quote dan path Windows.
- `example-03.js` memperlihatkan template literal multi-baris dan Unicode escape.

## Penjelasan Per File

### `example.js`

File utama ini mengumpulkan empat kasus penting:

```js
const quote = 'It\'s fine';
const path = 'C:\\Users\\Arta';
const lines = 'Baris 1\nBaris 2';
const tabbed = 'Nama:\tArta';
```

Saat dijalankan, pembaca bisa melihat bahwa escape sequence mengubah hasil tampilan string:

- `\'` menjaga quote tetap valid
- `\\` menghasilkan backslash literal
- `\n` membuat baris baru
- `\t` membuat tab

### `example-02.js`

Contoh ini memperkuat dua kasus yang sangat umum:

```js
const quote = "He said: \"Hello\"";
const path = 'D:\\Projects\\js';
```

Output yang diharapkan:

```bash
He said: "Hello"
D:\Projects\js
```

### `example-03.js`

File ini menunjukkan dua pendekatan berbeda:

```js
const multiline = `Line 1
Line 2`;
const unicodeHeart = '\u2764';
```

Template literal membuat string multi-baris jauh lebih nyaman, sedangkan Unicode escape membantu menulis karakter tertentu secara eksplisit.

Output yang diharapkan:

```bash
Line 1
Line 2
❤
```

## Catatan Belajar

- Jika quote pembungkus bentrok dengan isi string, escape atau ganti pembungkusnya.
- Path Windows hampir selalu perlu backslash ganda di string biasa.
- Untuk string multi-baris, template literal biasanya paling mudah dibaca.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
