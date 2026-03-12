# Example C01

Contoh runnable untuk bab **C01 - Lexical Fundamentals**.

## Tujuan Example

Folder ini membantu pembaca melihat bentuk paling dasar dari cara JavaScript membaca source code:

- identifier peka terhadap huruf besar dan kecil
- kode ditulis sebagai rangkaian token
- baris sederhana tetap tersusun dari unit lexical yang berbeda

## Gambaran Singkat

Di level awal, JavaScript belum "memahami maksud bisnis" dari program. Engine lebih dulu membaca bentuk source code, memisahkan token, lalu memeriksa apakah susunannya valid menurut grammar.

Karena itu, contoh-contoh di sini sengaja dibuat kecil agar pembaca fokus ke bentuk lexical-nya, bukan ke logika program yang rumit.

## Daftar File

- `example.js` untuk menunjukkan bahwa `score` dan `Score` adalah identifier berbeda.
- `example-02.js` untuk memperkuat konsep case-sensitive dengan perbandingan dua nama variabel yang mirip.
- `example-03.js` untuk mengenalkan ide bahwa satu baris kode sebenarnya terdiri dari beberapa token.

## Penjelasan Per File

### `example.js`

File ini menunjukkan contoh paling dasar dari lexical fundamentals.

```js
const score = 10;
const Score = 20;
const message = 'Halo';
```

Poin pentingnya:

- `score` dan `Score` terlihat mirip, tetapi dibaca sebagai dua identifier yang berbeda.
- `const` adalah keyword.
- `10`, `20`, dan `'Halo'` adalah literal.

Saat dijalankan, output akan menegaskan bahwa setiap nama mengacu ke nilai yang berbeda:

```bash
score: 10
Score: 20
message: Halo
```

Insight utamanya: perubahan huruf besar-kecil bukan kosmetik. Dalam JavaScript, itu mengubah identitas nama.

### `example-02.js`

File ini adalah variasi pembanding untuk memperjelas bahwa kemiripan tulisan tidak berarti identifier-nya sama.

```js
const price = 100;
const Price = 200;
```

Baris berikut:

```js
console.log('Same identifier?', price === Price);
```

tidak sedang mengecek "apakah nama variabel sama", tetapi membandingkan **nilai** dari dua variabel yang memang berbeda. Hasilnya `false` karena `100` tidak sama dengan `200`.

Output yang diharapkan:

```bash
price: 100
Price: 200
Same identifier? false
```

Contoh ini bagus untuk pemula karena sering ada kebiasaan menganggap `price` dan `Price` hanya beda gaya penulisan. Di JavaScript, keduanya adalah nama yang berbeda.

### `example-03.js`

File ini mengajak pembaca melihat kode sebagai teks source yang dapat dipecah menjadi token.

```js
const line = "const total = 10;";
```

String di atas menyimpan representasi source code. Lalu contoh ini menampilkan ide tokenisasi:

```js
const | total | = | 10 | ;
```

Tujuannya bukan membuat tokenizer sungguhan, tetapi membantu pembaca membangun mental model bahwa satu statement sederhana pun terdiri dari beberapa bagian:

- `const` sebagai keyword
- `total` sebagai identifier
- `=` sebagai punctuator/operator assignment
- `10` sebagai numeric literal
- `;` sebagai penutup statement

Output yang diharapkan:

```bash
Source line: const total = 10;
Token idea: const | total | = | 10 | ;
```

## Kenapa Contoh-Contoh Ini Penting

Ketiga file ini saling melengkapi:

- file pertama mengenalkan bentuk nyata identifier dan literal
- file kedua memperkuat sifat case-sensitive
- file ketiga membantu pembaca mulai berpikir dalam unit token

Urutan ini bagus untuk pemula karena bergerak dari hal yang terlihat langsung ke cara engine "membaca" kode.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Catatan Belajar

- Jangan buru-buru menghafal istilah. Pastikan dulu paham bahwa JavaScript membaca bentuk kode dengan aturan yang ketat.
- Jika dua nama tampak mirip tetapi beda kapitalisasi, anggap itu dua identifier terpisah.
- Saat melihat satu baris kode, biasakan bertanya: keyword-nya apa, identifier-nya apa, literal-nya apa.
