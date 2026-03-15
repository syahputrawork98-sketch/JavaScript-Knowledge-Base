# Example C14

Contoh runnable untuk bab **C14 - Hashbang dan Host Text Conventions**.

## Tujuan Example

Folder ini membantu pembaca melihat bahwa beberapa hal penting dalam file JavaScript bukan hanya soal logika program, tetapi juga cara file dibaca oleh host environment.

## Daftar File

- `example.js` menunjukkan hashbang pada script CLI.
- `example-02.js` menegaskan pentingnya encoding dan line ending yang konsisten.
- `example-03.js` menghubungkan contoh ke konteks host tempat program berjalan.

## Penjelasan Per File

### `example.js`

Baris pertama file ini adalah hashbang:

```js
#!/usr/bin/env node
```

Baris ini berguna saat file dieksekusi langsung sebagai script CLI pada environment yang mendukungnya. Lalu script mencetak:

```bash
CLI script with hashbang example
```

Pesan utamanya: hashbang bukan logika JavaScript biasa, tetapi petunjuk penting untuk host tertentu.

### `example-02.js`

Contoh ini tidak punya hashbang, tetapi isi pesannya menyorot dua hal yang sering terlupakan:

```js
console.log('Use UTF-8 and consistent line endings.');
```

Ini relevan karena file JavaScript bisa tampak sama di editor, tetapi berperilaku berbeda di tooling jika encoding atau line ending tidak konsisten.

### `example-03.js`

File ini mengikat pembahasan ke konteks host:

```js
const env = 'cli';
console.log(`Running in ${env} host context`);
```

Maksudnya adalah mengingatkan pembaca bahwa file JavaScript selalu berjalan di suatu lingkungan tertentu, dan beberapa konvensi teks bergantung pada lingkungan itu.

## Catatan Belajar

- Gunakan hashbang hanya jika file memang ditujukan sebagai executable script.
- Jaga file tetap konsisten dalam UTF-8 dan line ending yang disepakati repo.
- Error lintas mesin kadang bukan berasal dari logic, tetapi dari text conventions yang tidak konsisten.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
