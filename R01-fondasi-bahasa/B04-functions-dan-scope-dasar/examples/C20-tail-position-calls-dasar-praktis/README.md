# Example C20

Contoh runnable untuk bab **C20 - Tail Position Calls Dasar Praktis**.

## Tujuan Example

Folder ini membantu pembaca mengenali call yang berada pada tail position dan membedakannya dari call yang bukan tail position.

## Daftar File

- `example.js` menunjukkan call pada tail position.
- `example-02.js` menunjukkan call yang bukan tail position.
- `example-03.js` menunjukkan bentuk rekursi tail-style sederhana.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan pola tail position yang paling sederhana:

```js
function forward(value) {
  return identity(value);
}
```

Call ke `identity(value)` langsung menjadi hasil return dari `forward`, sehingga ia berada pada tail position.

### `example-02.js`

Contoh ini membandingkan bentuk yang mirip, tetapi berbeda penting:

```js
return identity(value) + 1;
```

Karena masih ada operasi `+ 1` setelah call, maka call tersebut bukan tail position.

### `example-03.js`

File ini menunjukkan rekursi tail-style:

```js
return factorialTail(n - 1, n * acc);
```

Tujuannya bukan sekadar menghitung faktorial, tetapi membantu pembaca melihat bentuk fungsi rekursif yang “meneruskan hasil akhir langsung”.

## Catatan Belajar

- Tail position ditentukan oleh bentuk control flow, bukan hanya karena ada `return`.
- Jika masih ada operasi setelah call, maka posisinya bukan tail.
- Memahami pola ini berguna untuk membaca pembahasan optimisasi konseptual dan gaya rekursi tertentu.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.10`
- `15.10.1`
- `15.10.2`
- `15.10.3`

Referensi chapter: `../../chapters/C20-tail-position-calls-dasar-praktis.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
