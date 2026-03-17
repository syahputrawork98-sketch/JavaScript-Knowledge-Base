# CH-01: Algorithm Static Semantics

*Pemetaan ECMA-262: Clause 5.2.4 (Static Semantics)*

Mengapa ada aturan yang tidak bisa dijelaskan hanya dengan "Bentuk" (Sintaks)? Di sinilah **Algorithm Static Semantics** berperan sebagai "Pemeriksa Kelayakan" dalam mesin JavaScript.

## Mental Model: "Inspektur Kelayakan Bangunan"
Bayangkan sebuah blueprint bangunan (Sintaks). Blueprint tersebut menunjukkan ada pintu dan jendela (Grammar). Namun, **Algorithm Static Semantics** adalah inspektur yang memeriksa: "Apakah pintu ini terhubung ke ruangan yang benar? Apakah kabel listriknya aman?" 

Inspektur ini bekerja **sebelum** siapapun diizinkan menghuni bangunan tersebut (*Runtime*).

---

## 1. Definisi Formal (Clause 5.2.4)
Dalam spesifikasi ECMA-262, *Static Semantics* didefinisikan sebagai algoritma yang terkait dengan produk tata bahasa (*Grammar Production*). Berbeda dengan *Runtime Semantics*, algoritma ini tidak menghasilkan nilai eksekusi, melainkan memberikan informasi struktural atau memvalidasi aturan yang harus dipenuhi sebelum eksekusi dimulai.

### Mekanisme Syntax-Directed Operations
Sebagian besar ssemantik statis direpresentasikan sebagai **Syntax-Directed Operations**. Ini adalah fungsi yang "menempel" pada node di AST (Abstract Syntax Tree) dan bekerja secara rekursif ke bawah (top-down).

## 2. Pengecekan Utama dalam Semantik Statis
Beberapa pertanyaan yang dijawab oleh algoritma ini selama fase parsing/analisis:
- **`Contains`**: Apakah node ini mengandung elemen tertentu (misalnya `await` di dalam fungsi non-async)?
- **`BoundNames`**: Daftar nama variabel apa saja yang dideklarasikan di sini?
- **`IsConstantDeclaration`**: Apakah deklarasi ini bersifat konstan?
- **`HasDirectEval`**: Apakah ada penggunaan `eval` langsung yang akan mengacaukan optimasi scope?

## 3. Early Errors (Kaitan dengan Static Semantics)
Banyak aturan semantik statis yang dirancang khusus untuk meminimalkan bug di runtime dengan cara memicu **Early Errors**. Jika algoritma statis mendeteksi pelanggaran, mesin JS akan melempar `SyntaxError` bahkan sebelum baris pertama kode dijalankan.

---

## Arsitek Mindset: Integritas vs Kecepatan
*Runtime Semantics* berfokus pada **Kecepatan** eksekusi, sedangkan *Static Semantics* berfokus pada **Integritas** kode. Sebagai arsitek, memahami ini membantu Anda menulis kode yang "berteman" dengan mesin, karena Anda menghindari pola yang memaksa mesin melakukan analisis statis yang berat atau deoptimasi.

---

## Referensi Terkait
- [ECMA-262 Clause 5.2.4 - Static Semantics](https://tc39.es/ecma262/#sec-static-semantics)
- [PPM Standards: Documentation Hierarchy](../README.md)

---
> [!NOTE]  
> Kode contoh untuk demonstrasi perilaku "Lari dari pemeriksaan" dapat dilihat di folder [examples/](./examples/).
