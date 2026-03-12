# Example C01

Contoh runnable untuk bab **C01 - Mengapa Error Terjadi dan Cara Membacanya**.

## Tujuan Example

Folder ini membantu pembaca melihat bahwa error bukan sekadar "program gagal", tetapi sinyal yang bisa dibaca lewat nama error, pesan error, dan konteks operasi yang sedang dijalankan.

## Daftar File

- `example.js` menunjukkan pembacaan error sederhana saat variabel yang dipakai belum ada.
- `example-02.js` menunjukkan cara mengambil bagian penting dari object error dengan helper function.
- `example-03.js` menunjukkan pembacaan nama error, pesan, dan petunjuk sumber masalah saat parsing JSON gagal.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
console.log(userName);
```

Nama `userName` belum pernah dideklarasikan, sehingga runtime melempar error. `catch` lalu dipakai untuk membaca `error.name` dan `error.message` secara langsung.

### `example-02.js`

Pola pentingnya:

```js
function printErrorInfo(error) {
  console.log('name ->', error.name);
  console.log('message ->', error.message);
}
```

File ini menunjukkan bahwa object error bisa diperlakukan sebagai data biasa. Informasi pentingnya dapat dipindahkan ke helper agar pembacaan error lebih konsisten.

### `example-03.js`

Kasus yang ditunjukkan:

```js
JSON.parse('{invalid json}');
```

Saat parsing gagal, error yang muncul tidak hanya dibaca dari jenis dan pesannya, tetapi juga dihubungkan ke dugaan sumber masalah, yaitu input JSON yang sedang diparse.

## Catatan Belajar

- Error yang baik dibaca sebagai informasi, bukan hanya sebagai kegagalan.
- `error.name` membantu mengenali kategori masalah, sedangkan `error.message` memberi petunjuk lebih spesifik.
- Menambahkan konteks manual seperti "cek input yang diparse" sering sangat membantu saat debugging.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
