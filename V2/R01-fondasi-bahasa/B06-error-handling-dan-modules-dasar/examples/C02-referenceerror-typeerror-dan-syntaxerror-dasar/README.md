# Example C02

Contoh runnable untuk bab **C02 - `ReferenceError`, `TypeError`, dan `SyntaxError` Dasar**.

## Tujuan Example

Folder ini menunjukkan tiga jenis error yang sangat umum di fase belajar JavaScript, supaya pembaca bisa membedakan masalah nama, masalah tipe pemakaian nilai, dan masalah bentuk kode.

## Daftar File

- `example.js` menunjukkan `ReferenceError` saat nama yang dipakai tidak tersedia.
- `example-02.js` menunjukkan `TypeError` saat nilai `null` dipakai seolah-olah object.
- `example-03.js` menunjukkan `SyntaxError` lewat evaluasi string kode yang bentuknya salah.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
console.log(totalPrice);
```

Karena `totalPrice` tidak pernah dideklarasikan, runtime tidak bisa menemukan binding yang dimaksud. Hasilnya adalah `ReferenceError`.

### `example-02.js`

Kasus pentingnya:

```js
const user = null;
console.log(user.name);
```

Di sini nama variabel ada, tetapi nilainya tidak cocok untuk akses property. Itulah mengapa error-nya menjadi `TypeError`, bukan `ReferenceError`.

### `example-03.js`

File ini memakai:

```js
eval("if (true { console.log('jalan'); }");
```

String kode yang tidak valid dipaksa dievaluasi dengan `eval`, sehingga kesalahan syntax bisa ditangkap di runtime dan dibaca lewat `catch`.

## Catatan Belajar

- `ReferenceError` biasanya terkait nama yang hilang atau scope yang salah.
- `TypeError` biasanya muncul saat nilai dipakai dengan cara yang tidak sesuai.
- `SyntaxError` berarti bentuk kodenya sendiri bermasalah sebelum logika program sempat berjalan normal.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
