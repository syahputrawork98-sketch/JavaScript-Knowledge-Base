# Example C08

Contoh runnable untuk bab **C08 - Method Definitions Runtime dan Evaluasi**.

## Tujuan Example

Folder ini membantu pembaca memahami bahwa call-site menentukan `this` pada method biasa, dan bahwa detached method bisa kehilangan context-nya.

## Daftar File

- `example.js` menunjukkan `this` berdasarkan call-site method.
- `example-02.js` membandingkan detached method vs bound method.
- `example-03.js` menunjukkan method pada object factory.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan pola method biasa:

```js
counter.inc()
```

Nilai `this` diambil dari object pemanggil saat method tersebut dipanggil.

### `example-02.js`

Contoh ini sangat penting secara praktis:

```js
const detached = service.log;
const bound = service.log.bind(service);
```

Ketika method dilepas dari object, `this` bisa hilang. Binding eksplisit membantu mengembalikan context yang diinginkan.

### `example-03.js`

File ini membawa contoh ke object factory:

```js
function createAccount(owner) {
  return {
    owner,
    describe() {
      return `Account owner: ${this.owner}`;
    }
  };
}
```

Tujuannya agar pembaca melihat method definition dalam pola pembuatan object yang lebih nyata.

## Catatan Belajar

- `this` pada method biasa sangat tergantung pada cara method itu dipanggil.
- Detached method adalah sumber bug yang sangat umum.
- `bind` adalah alat penting ketika method harus diteruskan keluar sebagai callback.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.4.3`
- `15.4.4`
- `15.4.5`

Referensi chapter: `../../chapters/C08-method-definitions-runtime-dan-evaluasi.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
