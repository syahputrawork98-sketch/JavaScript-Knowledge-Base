# C15 - Class Definitions Static Runtime Bridge

## Tujuan

Bab ini bertujuan menjembatani static checks ke class element runtime behavior.

## Kenapa Bab Ini Penting

Sesudah memahami aturan statis pada class, kita perlu melihat momen ketika struktur yang sudah lolos validasi mulai dievaluasi di runtime. Bab ini penting karena memperlihatkan bahwa nama elemen terhitung, ekspresi `extends`, dan initializer class tidak sekadar "terdaftar", tetapi benar-benar dijalankan pada fase evaluasi.

## Konsep Inti

1. Static semantics memutuskan bentuk class valid atau tidak sebelum evaluasi runtime dilanjutkan.
2. Beberapa bagian class, seperti computed property names dan `extends`, dievaluasi saat class dibentuk.
3. Hasil evaluasi runtime itu lalu menentukan method, field, dan relasi pewarisan yang benar-benar dipasang pada class.

## Analogi Singkat

Bayangkan kita sedang merakit papan nama digital untuk sebuah toko. Sebelum dinyalakan, desainnya dicek dulu; setelah lolos, lampu, tulisan bergerak, dan sambungan listriknya mulai aktif satu per satu. Dalam JavaScript, static semantics memastikan bentuk class valid lebih dulu, lalu bagian runtime seperti computed names dan `extends` benar-benar dievaluasi saat class dibentuk.

Contoh singkat:

```js
const methodName = 'hello';

class Greeter {
  static label = 'greeter';

  [methodName]() {
    return 'Hi';
  }
}
```

## Praktik yang Direkomendasikan

- Gunakan log sederhana untuk melihat urutan evaluasi pada `extends`, computed names, dan static fields.
- Pisahkan contoh yang membahas validasi awal dari contoh yang membahas efek runtime setelah class terbentuk.
- Saat membaca class kompleks, tanyakan dua hal: mana yang hanya divalidasi, dan mana yang benar-benar dieksekusi.

## Kesalahan Umum

- Mengira computed property name baru dihitung saat method dipanggil.
- Lupa bahwa ekspresi `extends` dievaluasi saat class definition diproses.
- Mengira nama internal class expression selalu bisa diakses dari scope luar.

## Checkpoint Cepat

1. Kapan computed property name pada class dievaluasi?
2. Apa yang terjadi lebih dulu: validasi bentuk class atau inisialisasi elemennya?
3. Kenapa nama internal class expression berguna, tetapi tidak bocor ke scope luar?

## Ringkasan

- Bab ini menjadi jembatan dari aturan statis menuju perilaku runtime class.
- Evaluasi class dapat memicu efek runtime pada `extends`, computed names, dan initializers.
- Memahami transisi ini memudahkan pembacaan pipeline runtime class pada bab berikutnya.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.7.8`
- `15.7.9`
- `15.7.10`
- `15.7.11`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C15 Class Definitions Static Runtime Bridge Map](../assets/C15-class-definitions-static-runtime-bridge-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C15-class-definitions-static-runtime-bridge/example.js`
- Lihat contoh tambahan: `../examples/C15-class-definitions-static-runtime-bridge/example-02.js`
- Lihat contoh tambahan: `../examples/C15-class-definitions-static-runtime-bridge/example-03.js`
- Panduan: `../examples/C15-class-definitions-static-runtime-bridge/README.md`
