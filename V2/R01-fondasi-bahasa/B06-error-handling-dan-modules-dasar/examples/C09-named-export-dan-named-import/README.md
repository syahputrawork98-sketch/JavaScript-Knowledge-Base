# Example C09

Contoh runnable untuk bab **C09 - Named Export dan Named Import**.

## Tujuan Example

Folder ini menunjukkan bagaimana named export dipakai untuk membuka beberapa nilai dengan nama yang eksplisit, lalu diambil secara selektif dari file lain.

## Daftar File

- `example.js` menunjukkan import `appName` dan `formatName()` dari `profile.js`.
- `example-02.js` menunjukkan import selektif `subtract()` dari `math-tools.js`.
- `example-03.js` menunjukkan import `prefix` dan `formatMessage()` dari `message-tools.js`.
- `profile.js` mengekspor konstanta nama aplikasi dan function formatting nama.
- `math-tools.js` mengekspor dua function matematika sederhana.
- `message-tools.js` mengekspor prefix log dan function pembuat pesan.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
import { appName, formatName } from './profile.js';
```

Named import memungkinkan entry file mengambil beberapa nilai yang memang tersedia dari module lain, lalu langsung memakainya dengan nama yang konsisten.

### `example-02.js`

Poin pentingnya:

```js
import { subtract } from './math-tools.js';
```

Walaupun `math-tools.js` juga mengekspor `add`, file ini hanya mengambil `subtract`. Ini menegaskan bahwa named import bersifat selektif.

### `example-03.js`

Kasus gabungannya:

```js
import { formatMessage, prefix } from './message-tools.js';
```

Contoh ini menunjukkan bahwa konstanta dan function bisa diambil bersamaan selama namanya memang diekspor oleh module sumber.

### `profile.js`

File pendukung ini berisi:

```js
export const appName = 'Profile App';
export function formatName(name) { ... }
```

Tujuannya adalah memperlihatkan satu module yang menyediakan dua named export yang saling terkait.

### `math-tools.js`

File ini mengekspor:

```js
export function add(a, b) { ... }
export function subtract(a, b) { ... }
```

Pembaca bisa melihat bahwa module utility sering menyimpan beberapa function sekaligus, lalu caller memilih mana yang diperlukan.

### `message-tools.js`

Contoh ini menggabungkan:

```js
export const prefix = '[INFO]';
export function formatMessage(text) { ... }
```

Ini menegaskan bahwa named export tidak terbatas pada function saja.

## Catatan Belajar

- Named export membuat nama API module terlihat eksplisit.
- Caller hanya perlu mengimpor nilai yang memang dipakai.
- Kecocokan nama antara export dan import sangat penting pada pola ini.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
