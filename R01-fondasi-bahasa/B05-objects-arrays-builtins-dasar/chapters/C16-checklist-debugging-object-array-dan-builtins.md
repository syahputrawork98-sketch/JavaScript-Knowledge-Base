# C16 - Checklist Debugging Object, Array, dan Built-ins

## Tujuan

Bab ini bertujuan menyusun checklist praktis untuk mencari sumber bug pada object, array, dan built-ins dasar.

## Kenapa Bab Ini Penting

Setelah banyak konsep dasar dipelajari, pembaca butuh cara merapikan proses berpikir saat program tidak berjalan sesuai harapan. Checklist membantu mempersempit masalah tanpa panik dan tanpa langsung menebak-nebak.

## Konsep Inti

### 1. Cek Bentuk Datanya Dulu

Tanyakan:

- Apakah data ini object, array, string JSON, atau nilai lain?
- Apakah saya sedang membaca key object atau index array?
- Apakah nilai yang saya pegang benar-benar ada?

### 2. Cek Apakah Operasinya Mutable atau Tidak

Tanyakan:

- Apakah method yang dipakai mengubah data asli?
- Apakah function ini seharusnya hanya membaca, tetapi ternyata memutasi?
- Apakah ada referensi lain yang ikut melihat perubahan yang sama?

### 3. Cek Tipe Hasil Built-in

Tanyakan:

- Apakah hasilnya array, string, boolean, atau object?
- Apakah saya memperlakukan hasil `JSON.stringify()` seperti object?
- Apakah saya memperlakukan hasil `join()` atau `includes()` seperti array?

### 4. Cek Input dan Output dengan Logging Kecil

```js
console.log('before ->', data);
console.log('after ->', result);
```

Logging singkat sering cukup untuk menunjukkan titik perubahan data.

## Praktik yang Direkomendasikan

- Debug dari bentuk data, lalu ke operasi, lalu ke hasil akhir.
- Kurangi kode menjadi contoh kecil saat bug sulit dilihat.
- Gunakan logging yang fokus pada satu perubahan penting setiap kali.

## Kesalahan Umum

- Langsung menyalahkan syntax padahal masalahnya ada di bentuk data.
- Tidak sadar bahwa hasil built-in berbeda tipe dari yang diasumsikan.
- Melewatkan pengecekan sebelum/sesudah mutasi.

## Checkpoint Cepat

1. Saat data terasa aneh, apa yang paling dulu perlu dicek?
2. Kenapa mengetahui apakah sebuah method mutable itu penting saat debugging?
3. Bagaimana logging kecil bisa mempercepat pencarian bug?

## Analogi Singkat

Checklist debugging seperti daftar pemeriksaan teknisi: cek jenis komponennya, cek alat yang dipakai, lalu cek perubahan sebelum dan sesudah tindakan.

## Ringkasan

- Debugging lebih mudah jika dimulai dari bentuk data dan tipe hasil.
- Banyak bug dasar muncul karena asumsi salah tentang mutasi atau tipe output built-in.
- Checklist sederhana membantu menjaga proses pikir tetap rapi.

## Contoh Runnable

- Lihat contoh: `../examples/C16-checklist-debugging-object-array-dan-builtins/example.js`
- Lihat contoh tambahan: `../examples/C16-checklist-debugging-object-array-dan-builtins/example-02.js`
- Lihat contoh tambahan: `../examples/C16-checklist-debugging-object-array-dan-builtins/example-03.js`
- Panduan: `../examples/C16-checklist-debugging-object-array-dan-builtins/README.md`
