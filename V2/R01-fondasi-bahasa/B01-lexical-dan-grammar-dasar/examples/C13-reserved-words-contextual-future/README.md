# Example C13

Contoh runnable untuk bab **C13 - Reserved Words Contextual dan Future**.

## Tujuan Example

Folder ini membantu pembaca melihat strategi penamaan yang aman saat berhadapan dengan kata-kata yang punya makna khusus di JavaScript modern.

## Daftar File

- `example.js` memperlihatkan nama domain yang aman dan penggunaan `get` dalam konteks getter.
- `example-02.js` menunjukkan nama seperti `moduleName` dan `userStatus` yang tetap jelas tanpa bentrok.
- `example-03.js` menguatkan pentingnya nama yang deskriptif dan aman untuk jangka panjang.

## Penjelasan Per File

### `example.js`

File ini menarik karena memperlihatkan dua sisi sekaligus:

```js
const userRole = 'admin';
const orderStatus = 'paid';
```

Nama variabelnya deskriptif dan aman. Lalu ada object dengan getter:

```js
const mapping = {
  get value() {
    return `${userRole}:${orderStatus}`;
  }
};
```

Di sini kata `get` punya makna khusus karena muncul pada konteks object literal sebagai getter, bukan sebagai nama variabel biasa.

### `example-02.js`

Contoh ini sederhana tetapi berguna:

```js
const moduleName = 'user';
const userStatus = 'active';
```

Nama-nama ini dekat dengan istilah yang sering muncul dalam ekosistem JavaScript, tetapi tetap aman dan mudah dipahami.

### `example-03.js`

File ini memperlihatkan pola penamaan domain:

```js
const accountRole = 'editor';
const accountLevel = 2;
```

Alih-alih memakai nama singkat yang rawan bentrok, contoh ini memilih nama yang langsung menjelaskan konteks datanya.

## Catatan Belajar

- Pilih nama yang spesifik terhadap domain, bukan nama umum yang terlalu dekat dengan keyword bahasa.
- Beberapa kata punya arti khusus hanya di konteks grammar tertentu.
- Penamaan aman hari ini akan mengurangi masalah saat kode tumbuh atau toolchain berubah.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
