# Example C02

Contoh runnable untuk bab **C02 - Whitespace, Line Terminator, dan Comments**.

## Tujuan Example

Folder ini membantu pembaca melihat bahwa elemen yang tampak "tidak menjalankan logika" tetap penting dalam JavaScript:

- whitespace membantu keterbacaan
- pemisahan baris membantu struktur program
- komentar membantu memberi konteks

Konsep ini terlihat sederhana, tetapi sangat memengaruhi kualitas kode yang ditulis sehari-hari.

## Gambaran Singkat

JavaScript tidak hanya dibangun dari variabel dan operator. Cara kita memberi spasi, memecah baris, dan menulis komentar juga memengaruhi bagaimana kode dipindai manusia dan, pada kondisi tertentu, bagaimana parser membacanya.

Contoh di folder ini sengaja fokus pada kasus yang dekat dengan praktik harian, bukan teori abstrak.

## Daftar File

- `example.js` untuk membandingkan penulisan dengan spasi yang rapi dan penulisan yang rapat.
- `example-02.js` untuk menunjukkan bahwa dua expression dengan gaya whitespace berbeda tetap bisa menghasilkan nilai yang sama.
- `example-03.js` untuk menekankan fungsi komentar yang baik: menjelaskan niat, bukan mengulang hal yang sudah jelas.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan bahwa whitespace biasanya tidak mengubah hasil perhitungan sederhana, tetapi sangat memengaruhi keterbacaan.

```js
const total = 5 + 7;
const compact = 5+7;
```

Kedua baris di atas menghasilkan nilai yang sama, yaitu `12`. Perbedaannya ada pada kenyamanan membaca:

- `5 + 7` lebih mudah dipindai
- `5+7` tetap valid, tetapi lebih rapat dan kurang nyaman untuk mata

Bagian berikut:

```js
const a = 1;
const b = 2;
console.log({ total, compact, sum: a + b });
```

menunjukkan bahwa penulisan yang rapi membuat pemisahan antar statement juga lebih jelas.

Output yang diharapkan:

```bash
{ total: 12, compact: 12, sum: 3 }
```

Insight utamanya: whitespace sering tidak mengubah hasil, tetapi sangat membantu manusia memahami maksud kode.

### `example-02.js`

File ini adalah versi yang lebih ringkas untuk mempertegas ide yang sama.

```js
const readable = 1 + 2 + 3;
const compact = 1+2+3;
```

Tujuan contoh ini bukan mencari hasil perhitungan baru, tetapi menunjukkan bahwa:

- parser tetap bisa membaca keduanya
- manusia lebih mudah membaca versi yang diberi spasi

Output yang diharapkan:

```bash
{ readable: 6, compact: 6 }
```

Contoh ini penting karena pemula sering mengira "selama jalan, berarti sama bagusnya". Padahal kualitas penulisan tidak hanya soal valid atau tidak valid, tetapi juga soal keterbacaan.

### `example-03.js`

File ini mengalihkan fokus dari whitespace ke komentar.

```js
// Comment should explain intent, not restate obvious code.
const amount = 5000;
const tax = amount * 0.11;
```

Komentar di sini memberi tahu **niat penulisan komentar yang baik**. Ia tidak menjelaskan ulang sesuatu yang sudah sangat jelas seperti:

```js
// set amount to 5000
const amount = 5000;
```

Komentar yang baik membantu pembaca memahami alasan, konteks, atau keputusan, bukan hanya mengulang isi baris kode.

Output yang diharapkan:

```bash
amount: 5000 tax: 550
```

Insight utamanya: komentar dipakai untuk membantu pemahaman, bukan menambah kebisingan.

## Kaitan Dengan Materi Bab

Tiga contoh ini membangun pemahaman secara bertahap:

- `example.js` memperkenalkan peran whitespace dalam keterbacaan
- `example-02.js` menguatkan bahwa bentuk penulisan memengaruhi kenyamanan baca meski hasil sama
- `example-03.js` menutup dengan praktik komentar yang sehat

Jadi pembaca tidak hanya belajar "apa itu whitespace dan comment", tetapi juga bagaimana menggunakannya secara praktis.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Catatan Belajar

- Jangan ukur kualitas kode hanya dari apakah program bisa jalan.
- Spasi yang konsisten membantu tim membaca kode lebih cepat.
- Komentar paling berguna ketika menjelaskan niat, alasan, atau konteks yang tidak langsung terlihat dari kodenya.
- Untuk topik line terminator dan ASI yang lebih sensitif, pembahasan lanjutnya ada di bab `C11`.
