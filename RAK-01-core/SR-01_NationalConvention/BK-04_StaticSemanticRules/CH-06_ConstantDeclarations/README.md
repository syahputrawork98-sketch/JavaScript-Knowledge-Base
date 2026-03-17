# CH-06: Constant Declarations

*Pemetaan ECMA-262: Clause 14.3.1.1 (Static Semantics: Early Errors)*

Keyword `const` sering dianggap hanya sebagai "variabel yang tidak bisa diubah". Namun di mata spesifikasi, ada mekanisme **Immutable Binding** yang menjaga integritas `const` sejak tahap persiapan.

## Mental Model: "Segel Permanen pada Laci"
Saat Anda mendeklarasikan variabel dengan `var` atau `let`, Anda membuat sebuah laci yang kuncinya bisa diberikan ke siapa saja (boleh diisi ulang). Namun, saat Anda menggunakan `const`, spesifikasi memasang **Segel Permanen** pada laci tersebut. 

Analisis statis bertugas memastikan:
1. Segel langsung dipasang saat laci dibuat (Wajib Inisialisasi).
2. Tidak ada rencana (kode) yang mencoba merusak segel tersebut (Re-assignment check).

---

## 1. Aturan Wajib Inisialisasi (Clause 14.3.1.1)
Berdasarkan semantik statis *Early Errors*, sebuah `LexicalDeclaration` yang menggunakan `const` harus memiliki `Initializer`. 
- **Valid**: `const PI = 3.14;`
- **Invalid**: `const PI;` <--- memicu **SyntaxError** di fase parsing.

## 2. Immutable Binding vs Immutable Value
Ini adalah perbedaan yang krusial bagi seorang arsitek:
- **Immutable Binding**: Identitas atau "alamat" dari binding tidak dapat diubah. Ini diatur oleh flag `[[Writable]]: false` pada Environment Record ketat setelah inisialisasi.
- **Immutable Value**: Isi dari nilai itu sendiri. `const` tidak menjamin nilai objek bersifat immutable.

## 3. Deteksi Penugasan Ulang (Early Error)
Meskipun penugasan ulang `const` biasanya memicu `TypeError` di runtime, dalam banyak konteks (seperti di dalam modul yang sama), engine JavaScript modern bisa mendeteksi upaya penugasan ulang secara statis dan memberikan peringatan atau error lebih awal.

---

## Arsitek Mindset: Predictability through Constancy
Penggunaan `const` yang konsisten membantu mesin JS melakukan optimasi seperti *Constant Folding* dan *Inlining*. Karena mesin tahu secara statis bahwa binding ini tidak akan pernah merujuk ke lokasi lain, mesin bisa mengasumsikan stabilitas referensi tersebut untuk optimasi performa.

---

## Referensi Terkait
- [ECMA-262 Clause 14.3.1 - Let and Const Declarations](https://tc39.es/ecma262/#sec-let-and-const-declarations)
- [CH-11: Binding Initialization](../CH-11_BindingInitialization/README.md)

---
> [!NOTE]  
> Kode contoh untuk demonstrasi perbedaan binding `const` dan `let` dapat dilihat di [examples/](./examples/).
