# CH-04: Static Scope Rules

*Pemetaan ECMA-262: Clause 14 (Scopes) & Static Semantics: BoundNames*

Bagaimana JavaScript tahu bahwa sebuah variabel merujuk ke "Luar" atau "Dalam"? Hal ini tidak ditentukan secara acak saat jalan, melainkan dipetakan secara statis melalui analisis deklarasi.

## Mental Model: "Peta Wilayah Kekuasaan"
Bayangkan sebuah peta wilayah. Setiap wilayah (Block, Function, Module) punya batas pagar yang jelas. **Static Scope Rules** adalah hukum yang menentukan:
- Di wilayah mana "Bendera" (Variabel) dipasang?
- Siapa yang boleh melihat bendera tersebut?
- Apakah dua bendera dengan nama sama boleh ada di wilayah yang sama?

---

## 1. Lexical Scoping (Posisi Fisik)
JavaScript adalah bahasa yang *Lexically Scoped*. Artinya, scope ditentukan oleh posisi fisik kode Anda saat ditulis. Spesifikasi menggunakan dua algoritma kunci untuk memetakan ini:
- **`VarDeclaredNames`**: Mencari semua nama yang dideklarasikan dengan `var` (sifatnya menembus blok, kecuali fungsi).
- **`LexicallyDeclaredNames`**: Mencari nama yang dideklarasikan dengan `let`, `const`, `class`, atau `function` (sifatnya terikat pada blok).

## 2. Deteksi Konflik Statis
Salah satu tugas terpenting semantik statis di sini adalah mendeteksi konflik sebelum eksekusi dimulai. 
- **Aturan**: Sebuah nama tidak boleh muncul di kedua daftar (`VarDeclaredNames` dan `LexicallyDeclaredNames`) dalam scope yang sama.
- Inilah mengapa `let x; var x;` memicu **SyntaxError** segera setelah script di-parse.

## 3. Shadowing & Identifier Resolution
Aturan statis menentukan bagaimana variabel di scope dalam bisa "menutupi" variabel di scope luar (*Shadowing*). Secara statis, mesin membangun rantai **Environment Records**. Saat menemui sebuah nama, mesin sudah tahu secara pasti ke Record mana nama tersebut terikat.

---

## Arsitek Mindset: Predictable Code
Memahami aturan scope statis adalah kunci untuk menghindari bug "Unintended Side Effects". Anda akan tahu pasti variabel mana yang sedang Anda akses hanya dengan melihat struktur kodenya, tanpa perlu menjalankan programnya di kepala.

---

## Referensi Terkait
- [ECMA-262: Environment Records](https://tc39.es/ecma262/#sec-environment-records)
- [CH-15: Global Declaration Instantiation](../CH-15_GlobalDeclarationInstantiation/README.md)

---
> [!NOTE]  
> Kode contoh untuk demonstrasi shadowing dan konflik deklarasi dapat dilihat di [examples/](./examples/).
