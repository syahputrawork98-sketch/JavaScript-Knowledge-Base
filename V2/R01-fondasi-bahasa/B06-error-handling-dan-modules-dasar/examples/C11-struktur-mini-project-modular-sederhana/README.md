# Example C11

Contoh runnable untuk bab **C11 - Struktur Mini Project Modular Sederhana**.

## Tujuan Example

Folder ini menunjukkan bagaimana beberapa module kecil bisa bekerja bersama membentuk mini project sederhana, sehingga pembaca melihat modularisasi sebagai struktur kerja, bukan hanya sintaks `import/export`.

## Daftar File

- `example.js` menunjukkan entry point yang memakai `task-store.js` untuk menyimpan task.
- `example-02.js` menunjukkan penambahan layer formatting lewat `task-format.js`.
- `example-03.js` menunjukkan integrasi store, formatter, dan validator dalam alur yang lebih realistis.
- `task-store.js` menyimpan state task dan menyediakan API `addTask()` serta `getTasks()`.
- `task-format.js` menyediakan formatter output task.
- `task-validator.js` menyediakan validasi input task sebelum data ditambahkan.

## Penjelasan Per File

### `example.js`

Struktur utamanya:

```js
import { addTask, getTasks } from './task-store.js';
```

Entry file ini fokus pada pemakaian store: menambah data lalu membacanya kembali. Ini memberi gambaran dasar mini project modular yang masih sederhana.

### `example-02.js`

Perubahan pentingnya:

```js
import { formatTask } from './task-format.js';
console.log(getTasks().map(formatTask));
```

Setelah formatter dipisah ke file lain, tanggung jawab presentasi tidak lagi bercampur dengan penyimpanan data.

### `example-03.js`

Contoh lengkapnya menambahkan:

```js
import { validateTask } from './task-validator.js';
```

Function `safeAddTask()` memadukan validasi, penyimpanan, dan penanganan error sederhana. Ini membuat mini project terasa lebih dekat ke alur aplikasi sungguhan.

### `task-store.js`

File ini menyimpan:

```js
const tasks = [];
```

Lalu mengekspor API kecil untuk menambah dan membaca task. Store sederhana ini menjadi pusat data mini project.

### `task-format.js`

Isi utamanya:

```js
export function formatTask(task) {
  return `- ${task}`;
}
```

Formatter terpisah membuat tampilan output bisa diubah tanpa mengubah logic penyimpanan.

### `task-validator.js`

File ini memeriksa:

```js
if (typeof task !== 'string' || task.trim() === '') {
  throw new Error('task harus string non-kosong');
}
```

Validasi ditempatkan di module sendiri agar aturan input tidak tersebar ke banyak file.

## Catatan Belajar

- Mini project modular membantu melihat batas tanggung jawab antarfile dengan lebih nyata.
- Store, formatter, dan validator adalah contoh pembagian concern yang mudah dipahami pemula.
- Error handling menjadi lebih berguna saat dipakai di struktur modular, bukan hanya di contoh satu function kecil.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
