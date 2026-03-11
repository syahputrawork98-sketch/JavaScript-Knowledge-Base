# C02 - Object Mutation, Method, dan `delete` Dasar

## Tujuan

Bab ini bertujuan memahami cara mengubah isi object, menambahkan method sederhana, dan memakai `delete` dengan sadar.

## Kenapa Bab Ini Penting

Di program nyata, object jarang diam. Kita sering menambah property, memperbarui nilainya, atau memanggil method yang hidup di dalam object tersebut. Tanpa intuisi mutasi yang benar, bug state sangat mudah muncul.

## Konsep Inti

### 1. Property Bisa Ditambah atau Diubah Langsung

```js
const user = { name: 'Alya' };

user.age = 21;
user.name = 'Alya Putri';
```

Object yang dideklarasikan dengan `const` tetap bisa diubah isinya selama referensinya tidak diganti.

### 2. Method Adalah Function yang Disimpan sebagai Property

```js
const counter = {
  value: 0,
  increment() {
    this.value += 1;
  }
};
```

Method membantu menggabungkan data dan aksi yang terkait.

### 3. `delete` Menghapus Property, Bukan Mengosongkan Object

```js
delete user.age;
```

Setelah dihapus, property tersebut tidak lagi ada pada object.

## Praktik yang Direkomendasikan

- Gunakan method untuk aksi yang memang erat dengan data object.
- Pakai `delete` hanya saat benar-benar ingin menghilangkan property.
- Bedakan kebutuhan "nilai diubah" dengan "property dihapus".

## Kesalahan Umum

- Mengira `const` membuat isi object otomatis immutable.
- Memakai arrow function untuk method lalu bingung dengan nilai `this`.
- Menghapus property padahal sebenarnya hanya ingin memberi nilai `null` atau `false`.

## Checkpoint Cepat

1. Kenapa object `const` masih bisa diubah propertinya?
2. Apa bedanya property bernilai `undefined` dengan property yang dihapus?
3. Kapan method lebih baik daripada function terpisah?

## Analogi

- Intuisi Singkat: Mutasi object berarti isi rak berubah, bukan raknya diganti.
- Analogi: Seperti papan profil anggota; kita bisa menambah info, mengubah nomor kontak, atau mencabut satu kartu informasi tertentu.
- Batas Analogi: Di JavaScript, perubahan itu terjadi pada object yang sama, sehingga referensi lain ke object tersebut juga bisa melihat hasilnya.

## Ringkasan

- Isi object bisa ditambah, diubah, dan dihapus tanpa mengganti referensinya.
- Method adalah function yang hidup sebagai property object.
- `delete` sebaiknya dipakai sadar karena ia benar-benar menghilangkan property.

## Contoh Runnable

- Lihat contoh: `../examples/C02-object-mutation-method-dan-delete-dasar/example.js`
- Lihat contoh tambahan: `../examples/C02-object-mutation-method-dan-delete-dasar/example-02.js`
- Lihat contoh tambahan: `../examples/C02-object-mutation-method-dan-delete-dasar/example-03.js`
- Panduan: `../examples/C02-object-mutation-method-dan-delete-dasar/README.md`
