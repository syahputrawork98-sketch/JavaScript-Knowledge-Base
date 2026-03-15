# Example C03

Contoh runnable untuk bab **C03 - `try...catch` Dasar**.

## Tujuan Example

Folder ini menunjukkan cara `try...catch` dipakai untuk menjaga program tetap terkendali saat operasi tertentu berisiko gagal.

## Daftar File

- `example.js` menunjukkan penangkapan error parsing JSON dengan respons sederhana.
- `example-02.js` menunjukkan pembacaan detail error di dalam `catch`.
- `example-03.js` menunjukkan pemberian fallback saat parsing gagal.

## Penjelasan Per File

### `example.js`

Pola dasarnya:

```js
try {
  JSON.parse('{invalid json}');
} catch (error) {
  console.log('parse gagal');
}
```

Contoh ini menunjukkan bentuk paling sederhana dari `try...catch`: operasi berisiko diletakkan di `try`, lalu kegagalannya direspons secara aman di `catch`.

### `example-02.js`

Bagian pentingnya:

```js
console.log('error.name ->', error.name);
console.log('error.message ->', error.message);
```

Di sini `catch` tidak hanya menandai bahwa parse gagal, tetapi juga membaca detail error agar diagnosa masalah lebih jelas.

### `example-03.js`

File ini memperlihatkan pola fallback:

```js
return fallbackUser;
```

Saat input valid, function mengembalikan hasil parse. Saat parse gagal, function tetap memberi nilai pengganti agar alur program tidak langsung berhenti.

## Catatan Belajar

- `try...catch` cocok dipakai di area yang memang berisiko error.
- `catch` bisa dipakai untuk logging, fallback, atau keputusan kontrol alur lain.
- Fallback yang jelas sering lebih baik daripada membiarkan seluruh alur program berhenti total.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
