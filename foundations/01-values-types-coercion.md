# Values, Types, and Coercion

## 0) Prasyarat dan Kamus Mini
Prasyarat:
- Sudah pernah pakai `let`, `const`, dan `console.log`.
- Sudah pernah lihat `if` sederhana.

Kamus mini:
- Nilai (value): isi yang disimpan variabel.
- Tipe data (type): jenis nilai, misalnya angka atau teks.
- Coercion: perubahan tipe data secara otomatis oleh JavaScript.
- Implicit: terjadi otomatis.
- Explicit: kita ubah sendiri secara sengaja.
- Primitive: nilai dasar yang disalin langsung nilainya.
- Reference: nilai yang menyimpan acuan/alamat ke data.

## 1) Big Picture
Topik ini menjelaskan fondasi nilai di JavaScript: semua variabel menyimpan nilai, tetapi cara nilai dibandingkan, diubah tipe-nya, dan dipindahkan antar variabel bisa berbeda dampaknya.

## 2) Small Picture
1. JavaScript punya tipe primitive (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) dan reference (`object`, `array`, `function`).
2. Coercion terjadi saat JS mengubah tipe secara otomatis (implicit) atau saat kita mengubah secara manual (explicit).
3. Perbandingan (`==` vs `===`) dan operasi matematika/string memicu coercion dengan aturan tertentu.

## 3) Wireframe
```text
[Value masuk] -> [Operator dipakai] -> [Coercion rule berjalan] -> [Perbandingan/operasi] -> [Output]
```

## 4) Analogi
Bayangkan tipe data seperti wadah barang:
- Primitive = barang kecil yang disalin per unit.
- Reference = alamat gudang; yang disalin alamatnya, bukan isi gudangnya.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: validasi input, perbandingan nilai, manipulasi data.
- Alasan pakai: mencegah bug logika dari coercion yang tidak disadari.
- Kapan tidak dipakai: hindari `==` jika kamu tidak benar-benar butuh coercion implisit.

## 6) Contoh Sederhana
```js
console.log('5' + 1);   // '51'  (number jadi string)
console.log('5' - 1);   // 4     (string jadi number)
console.log(0 == false);  // true
console.log(0 === false); // false
```

### Bedah Output (Langkah Demi Langkah)
1. `'5' + 1`
- Operator `+` jika ada string akan cenderung jadi gabung teks.
- `1` diubah jadi `'1'`.
- Hasil akhir: `'51'`.

2. `'5' - 1`
- Operator `-` butuh angka.
- `'5'` diubah jadi `5`.
- Hasil akhir: `4`.

3. `0 == false`
- `==` mengizinkan coercion.
- `false` diperlakukan sebagai `0`.
- Hasil akhir: `true`.

4. `0 === false`
- `===` tidak melakukan coercion.
- Tipe `0` adalah `number`, tipe `false` adalah `boolean`.
- Karena tipe beda, hasil langsung `false`.

## 7) Jebakan Umum
- Mengira `==` sama aman dengan `===`.
- Mengira `const` membuat object jadi immutable (yang immutable hanya binding variabelnya).
- Mengira salin object dengan `=` membuat object baru.

## 8) Prediksi Output Drill
```js
const a = '10';
const b = 2;
console.log(a * b);
console.log(a + b);
console.log(Boolean('0'));
```

### Kunci Jawaban Drill
- `a * b` -> `20` (string `'10'` diubah jadi number saat kali)
- `a + b` -> `'102'` (operator `+` dengan string jadi gabung teks)
- `Boolean('0')` -> `true` (string tidak kosong adalah truthy)

## 9) Debug Story
Kasus: kondisi `if (userInput == 0)` sering lolos walau input kosong.
Langkah debug:
1. Log tipe data: `typeof userInput`.
2. Cek sumber nilai apakah string kosong `''` atau `'0'`.
3. Ganti ke validasi eksplisit dan gunakan `===`.

## 10) Checkpoint
- [ ] Bisa jelaskan beda primitive vs reference tanpa lihat catatan.
- [ ] Bisa jelaskan kapan coercion terjadi pada operator umum.
- [ ] Bisa jelaskan alasan memilih `===` dibanding `==`.

## Jika Masih Bingung, Baca Ini Dulu
Urutan baca ulang cepat:
1. Fokus dulu ke bedanya `==` dan `===`.
2. Lanjut ke perilaku operator `+` vs `-` pada string angka.
3. Ulangi 3 soal prediksi output sampai konsisten benar.
4. Baru masuk lagi ke topik reference vs primitive.
