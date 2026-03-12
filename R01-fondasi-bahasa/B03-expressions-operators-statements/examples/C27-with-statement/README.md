# Example C27

Contoh runnable untuk bab **C27 - with Statement**.

## Tujuan Example

Folder ini menjelaskan mengapa `with` dihindari pada code modern dan alternatif eksplisit yang lebih aman.

## Daftar File

- `example.js` menunjukkan alternatif aman melalui destructuring dan access eksplisit.
- `example-02.js` menunjukkan safe alternative lain tanpa `with`.
- `example-03.js` memperkuat kebiasaan access object yang eksplisit.

## Poin Penting

- `with` membuat name resolution membingungkan dan sulit dioptimalkan.
- Destructuring sering menjadi alternatif yang lebih jelas.
- Access eksplisit membantu pembaca dan tooling memahami asal nilai.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
