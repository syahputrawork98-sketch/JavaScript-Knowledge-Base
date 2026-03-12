# Example C04

Contoh runnable untuk bab **C04 - Literals Dasar**.

## Tujuan Example

Folder ini membantu pembaca melihat bentuk literal dasar JavaScript secara langsung: number, string, boolean, `null`, dan pengantar template literal.

## Daftar File

- `example.js` memperkenalkan empat literal dasar dalam satu objek output.
- `example-02.js` mengulang pola yang sama dengan nama variabel berbeda agar konsepnya lebih melekat.
- `example-03.js` menunjukkan string dengan template literal untuk interpolasi sederhana.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan empat jenis literal dasar:

```js
const age = 21;
const firstName = 'Arta';
const isActive = true;
const selectedUser = null;
```

Output yang diharapkan:

```bash
{ age: 21, firstName: 'Arta', isActive: true, selectedUser: null }
```

Poin pentingnya: nilai ditulis langsung di source code, sehingga pembaca bisa melihat bentuk literalnya dengan jelas.

### `example-02.js`

Contoh ini mengulang ide yang sama dengan kombinasi nilai berbeda:

```js
const qty = 3;
const label = 'Notebook';
const available = false;
const selected = null;
```

Tujuannya bukan memberi konsep baru, tetapi memperkuat intuisi bahwa:

- angka bukan string
- `false` adalah boolean, bukan teks `'false'`
- `null` adalah nilai khusus, bukan string `'null'`

### `example-03.js`

File ini memberi jembatan ke bentuk string yang lebih fleksibel:

```js
const city = "Bandung";
const greeting = `Halo, ${city}`;
```

Output yang diharapkan:

```bash
Halo, Bandung
```

Contoh ini membantu pembaca melihat bahwa literal string bisa ditulis dengan gaya berbeda, dan backtick cocok saat ingin menyisipkan nilai lain.

## Catatan Belajar

- Bedakan nilai dengan representasi teksnya, misalnya `null` berbeda dengan `'null'`.
- Gunakan nama variabel yang membantu pembaca menebak isi nilainya.
- Untuk string yang butuh interpolasi, backtick biasanya paling nyaman.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
