# Example C11

Contoh runnable untuk bab **C11 - Async Generator Functions Dasar**.

## Tujuan Example

Folder ini memperlihatkan dasar async generator: `yield` bertahap dalam konteks async dan konsumsi dengan `for await...of`.

## Daftar File

- `example.js` menunjukkan async generator dasar dengan `for await...of`.
- `example-02.js` menunjukkan kombinasi `await` dan `yield`.
- `example-03.js` membandingkan async function dengan async generator.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan async generator yang menghasilkan nilai bertahap:

```js
async function* ids() {
  yield 101;
  yield 102;
  yield 103;
}
```

Lalu dikonsumsi dengan `for await...of`, sehingga pembaca melihat bentuk paling natural untuk membaca stream async bertahap.

### `example-02.js`

Contoh ini penting karena menaruh `await` di antara `yield`:

```js
await wait(10);
yield 'first';
```

Jadi pembaca bisa melihat bahwa async generator tidak hanya “generator yang async”, tetapi benar-benar dapat menunggu pekerjaan asynchronous di antara nilai-nilai yang dihasilkan.

### `example-03.js`

File ini membandingkan:

- async function yang mengembalikan seluruh data sekaligus
- async generator yang menyalurkan data satu per satu

Perbandingan ini penting untuk membantu pembaca memilih mental model yang tepat.

## Catatan Belajar

- Async generator cocok saat hasil datang bertahap, bukan sekaligus.
- `for await...of` adalah pasangan alami untuk membaca async generator.
- Bandingkan selalu dengan async function biasa agar perannya tidak tercampur.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.6`
- `15.6.1`
- `15.6.2`

Referensi chapter: `../../chapters/C11-async-generator-functions-dasar.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
