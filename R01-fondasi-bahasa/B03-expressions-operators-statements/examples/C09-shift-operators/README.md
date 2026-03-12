# Example C09

Contoh runnable untuk bab **C09 - Shift Operators**.

## Tujuan Example

Folder ini memperlihatkan pergeseran bit kiri/kanan, beda signed vs unsigned right shift, dan efek truncation cepat.

## Daftar File

- `example.js` menunjukkan `<<`, `>>`, dan `>>>`.
- `example-02.js` fokus pada signed vs unsigned right shift untuk bilangan negatif.
- `example-03.js` menunjukkan truncation cepat memakai shift.

## Poin Penting

- Shift bekerja pada representasi bit integer 32-bit.
- `>>>` berbeda penting saat operand bernilai negatif.
- Teknik `>> 0` bisa memangkas pecahan, tetapi bacaabilitasnya perlu dijaga.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
