# C03 - Method Dasar dan `this` Awal

## Tujuan

Bab ini bertujuan memahami method sebagai function yang disimpan di dalam object dan mengenal peran awal `this`.

## Kenapa Bab Ini Penting

Begitu object tidak hanya menyimpan data tetapi juga aksi, pembaca akan bertemu method. Di titik ini miskonsepsi tentang `this` sering mulai muncul, jadi lebih baik kita bangun intuitinya sejak awal dengan contoh yang kecil dan konkret.

## Konsep Inti

### 1. Method Adalah Function di Dalam Object

```js
const counter = {
  value: 0,
  increment() {
    this.value += 1;
  }
};
```

Method dipakai ketika aksi tersebut memang terkait langsung dengan data di object itu.

### 2. `this` Biasanya Mengarah ke Object Saat Method Dipanggil Lewat Object Tersebut

```js
counter.increment();
console.log(counter.value);
```

Pada pola dasar ini, `this.value` membaca dan mengubah property milik `counter`.

### 3. Bentuk Pemanggilan Memengaruhi Nilai `this`

```js
const fn = counter.increment;
```

Jika method dilepas dari object lalu dipanggil terpisah, perilaku `this` tidak lagi sesederhana saat dipanggil lewat `counter.increment()`.

## Praktik yang Direkomendasikan

- Gunakan method saat aksi memang milik data object tersebut.
- Bangun intuisi dulu dengan pola `obj.method()` sebelum membahas kasus yang lebih kompleks.
- Simpan contoh `this` tetap kecil agar pembaca fokus pada hubungan call-site dan object.

## Kesalahan Umum

- Mengira semua function di dalam object otomatis selalu aman memakai `this`.
- Melepas method ke variabel lain lalu heran kenapa perilakunya berubah.
- Mencampur terlalu banyak logika di method awal sehingga tujuan konsep kabur.

## Checkpoint Cepat

1. Apa beda property biasa dan method?
2. Kenapa `counter.increment()` lebih mudah dipahami daripada memanggil function yang sudah dilepas?
3. Dalam contoh dasar ini, `this.value` merujuk ke mana?

## Analogi Singkat

Method seperti tombol khusus yang menempel pada satu mesin. Selama tombol itu ditekan dari mesin yang benar, aksinya bekerja pada mesin tersebut.

## Ringkasan

- Method adalah function yang disimpan sebagai property object.
- Dalam pola dasar `obj.method()`, `this` membantu method mengakses data object itu sendiri.
- Bentuk pemanggilan penting karena ia memengaruhi bagaimana `this` dibaca.

## Contoh Runnable

- Lihat contoh: `../examples/C03-method-dasar-dan-this-awal/example.js`
- Lihat contoh tambahan: `../examples/C03-method-dasar-dan-this-awal/example-02.js`
- Lihat contoh tambahan: `../examples/C03-method-dasar-dan-this-awal/example-03.js`
- Panduan: `../examples/C03-method-dasar-dan-this-awal/README.md`
