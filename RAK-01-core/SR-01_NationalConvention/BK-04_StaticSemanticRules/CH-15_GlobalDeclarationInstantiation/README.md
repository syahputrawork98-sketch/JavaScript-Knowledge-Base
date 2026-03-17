# CH-15: Global Declaration Instantiation

Proses sakral saat mesin pertama kali "melihat" duniamu. Inilah fase pendaftaran semua deklarasi sebelum eksekusi dimulai.

## Topik Utama
- **Var vs Let/Const**: Bagaimana mesin mendaftarkan mereka secara berbeda di Global Scope.
- **Hoisting Mechanics**: Analisis statis yang memungkinkan Hoisting terjadi.
- **Global Object Binding**: Kapan sebuah deklarasi menempel di `window`/`globalThis`.

---
> [!TIP]
> **Architect Insight:** Memahami fase ini menjawab pertanyaan "Mengapa variabel ini undefined padahal sudah dideklarasikan?".
