# Example C15

Contoh runnable untuk bab **C15 - Class Definitions Static Runtime Bridge**.

## Tujuan Example

Folder ini menunjukkan jembatan antara bentuk class secara statis dan evaluasi runtime-nya, seperti computed name, static field initializer, dan `extends`.

## Daftar File

- `example.js` menunjukkan computed method name dan static field initializer.
- `example-02.js` menunjukkan nama internal class expression.
- `example-03.js` menunjukkan evaluasi ekspresi `extends`.

## Penjelasan Per File

### `example.js`

File utama ini sengaja menaruh efek log di sekitar pembentukan class:

```js
const methodName = mark('compute method name') && 'hello';
static label = mark('run static field initializer');
```

Tujuannya agar pembaca melihat bahwa beberapa bagian class benar-benar dievaluasi saat class dibentuk, bukan nanti saat instance dipakai.

### `example-02.js`

Contoh ini memperlihatkan nama internal class expression:

```js
const Widget = class InternalWidget { ... };
```

Nama `InternalWidget` berguna di dalam body class, tetapi tidak otomatis menjadi binding umum di outer scope.

### `example-03.js`

File ini menunjukkan bahwa `extends` juga adalah expression:

```js
class Child extends chooseBase('service') { ... }
```

Saat class dibentuk, ekspresi `chooseBase(...)` benar-benar dievaluasi.

## Catatan Belajar

- Class bukan hanya bentuk deklaratif; sebagian bagiannya punya efek runtime nyata.
- Computed name, field initializer, dan `extends` layak dibaca sebagai expression aktif.
- Ini adalah area penting untuk memahami kapan class “dibangun”, bukan hanya kapan dipakai.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.7.8`
- `15.7.9`
- `15.7.10`
- `15.7.11`

Referensi chapter: `../../chapters/C15-class-definitions-static-runtime-bridge.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
