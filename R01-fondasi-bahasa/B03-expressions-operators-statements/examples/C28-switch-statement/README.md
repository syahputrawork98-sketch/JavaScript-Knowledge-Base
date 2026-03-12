# Example C28

Contoh runnable untuk bab **C28 - switch Statement**.

## Tujuan Example

Folder ini menunjukkan percabangan `switch`, pentingnya `break`, dan contoh fallthrough yang disengaja.

## Daftar File

- `example.js` menunjukkan `switch` dasar dengan beberapa `case`.
- `example-02.js` menunjukkan fallthrough yang disengaja.
- `example-03.js` menunjukkan `default` pada kode yang tidak cocok.

## Poin Penting

- `switch` cocok saat membandingkan satu nilai terhadap banyak cabang tetap.
- Tanpa `break`, eksekusi bisa jatuh ke `case` berikutnya.
- Fallthrough valid, tetapi harus jelas agar tidak membingungkan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
