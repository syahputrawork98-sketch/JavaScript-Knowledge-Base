# C04 - Pemeriksaan Property dan Iterasi Object Dasar

## Tujuan

Bab ini bertujuan memahami cara mengecek keberadaan property dan membaca isi object dengan aman.

## Kenapa Bab Ini Penting

Setelah pembaca bisa membuat dan mengubah object, langkah berikutnya adalah memastikan data yang dicari memang ada. Di tahap ini pembaca juga mulai perlu membaca object secara sistematis, bukan hanya mengakses satu property secara acak.

## Konsep Inti

### 1. Mengecek Property dengan Aman

```js
const user = { name: 'Alya', age: 21 };

console.log('name' in user);
console.log(Object.hasOwn(user, 'age'));
```

Kita perlu membedakan antara property yang benar-benar ada dan nilai yang kebetulan `undefined`.

### 2. Mengecek Property Tetap Perlu Dibedakan dari Membaca Nilainya

```js
console.log(user.age);
console.log(user.nickname);
```

Membaca nilai property adalah langkah yang berbeda dari memastikan property itu memang ada.

### 3. Iterasi Sederhana atas Isi Object

```js
for (const key in user) {
  console.log(key, user[key]);
}
```

Untuk tahap awal, pola ini cukup membantu agar pembaca melihat bahwa object bisa dibaca satu property demi satu property.

## Praktik yang Direkomendasikan

- Pakai pengecekan property saat membaca data yang bisa berubah-ubah.
- Saat iterasi object masih baru, fokus dulu pada hubungan key dan value yang sedang dibaca.
- Bedakan kasus "property tidak ada" dari "property ada tetapi nilainya kosong".

## Kesalahan Umum

- Mengira nilai `undefined` selalu berarti property tersebut tidak ada.
- Langsung mengiterasi object tanpa memahami key mana yang sedang dibaca.
- Menggunakan dot notation saat key sebenarnya berasal dari hasil iterasi.

## Checkpoint Cepat

1. Apa beda property yang tidak ada dengan property bernilai `undefined`?
2. Kenapa membaca `user.nickname` berbeda dari mengecek `'nickname' in user`?
3. Kenapa `user[key]` dipakai saat key berasal dari iterasi?

## Analogi Singkat

Object seperti lemari arsip. Sebelum mengambil dokumen, kita perlu memastikan label lacinya ada, lalu membaca daftar label itu satu per satu agar tidak salah ambil.

## Ringkasan

- Pengecekan property membantu mencegah asumsi data yang salah.
- Membaca nilai property dan mengecek keberadaannya adalah dua hal yang berbeda.
- Iterasi object dasar membantu pembaca melihat hubungan key dan value dengan lebih sistematis.

## Contoh Runnable

- Lihat contoh: `../examples/C04-pemeriksaan-property-dan-iterasi-object-dasar/example.js`
- Lihat contoh tambahan: `../examples/C04-pemeriksaan-property-dan-iterasi-object-dasar/example-02.js`
- Lihat contoh tambahan: `../examples/C04-pemeriksaan-property-dan-iterasi-object-dasar/example-03.js`
- Panduan: `../examples/C04-pemeriksaan-property-dan-iterasi-object-dasar/README.md`
