# CH-02: Grammar Static Semantics

*Pemetaan ECMA-262: Clause 5.1 (Grammar) & 5.2.4 (Linkage)*

Jika CH-01 membahas tentang "Inspektur", maka CH-02 membahas tentang "Buku Peraturan" yang dibawa inspektur tersebut saat melihat Blueprint Tata Bahasa (AST).

## Mental Model: "Catatan Kaki pada Blueprint"
Bayangkan sebuah Blueprint arsitektur. Di dekat gambar tangga, ada catatan kaki kecil: *"Tangga tidak boleh lebih tinggi dari 3 meter jika tanpa pegangan tangan"*.
- **Blueprint:** Adalah Grammar (Bentuk tangga).
- **Catatan Kaki:** Adalah *Static Semantics* (Aturan keselamatannya).

---

## 1. Menghubungkan Produksi ke Aturan (Clause 5.1)
Grammar sangat ahli dalam mendefinisikan *bagaimana* kode ditulis (struktur). Namun, ia memerlukan **Static Semantics** untuk mendefinisikan *legitimasi* dalam konteks tertentu. Aturan semantik statis "menempel" langsung pada *Grammar Productions*.

### Contoh: `IdentifierReference`
Secara grammar, `IdentifierReference` bisa berupa nama apa saja. Namun, semantik statis menambahkan aturan: *"Jika konteksnya adalah Strict Mode, maka 'arguments' atau 'eval' tidak boleh digunakan sebagai IdentifierReference."*

## 2. Parameter Grammar & Semantik Statis
Salah satu fitur tercanggih dalam spesifikasi ECMA-262 adalah penggunaan **Grammatical Parameters** (seperti `[Yield]`, `[Await]`, `[Return]`).
- Aturan statis mengecek apakah parameter ini aktif atau tidak.
- Contoh: Produksi `Expression[Yield, Await]` akan berubah perilakunya secara statis tergantung apakah kita berada di dalam fungsi generator (`Yield`) atau fungsi async (`Await`).

## 3. Rantai Delegasi Semantik
Aturan semantik statis seringkali bersifat delegatif (rekursif).
- Sebuah `Block` memiliki aturan semantik statis `VarDeclaredNames`.
- Aturan ini tidak bekerja sendirian; ia memanggil `VarDeclaredNames` pada setiap `StatementList` di dalamnya, yang kemudian memanggil pada setiap `Statement`, dan seterusnya hingga ke level token terkecil.

---

## Arsitek Mindset: Struktur vs Legitimasi
Memahami link antara grammar dan semantik membantu Anda melakukan *debugging* pada level bahasa. Anda akan mengerti bahwa `SyntaxError` seringkali bukan karena salah ketik, melainkan karena Anda melanggar aturan semantik yang menempel pada struktur yang sebenarnya "terlihat" benar.

---

## Referensi Terkait
- [ECMA-262 Clause 5.1 - Syntactic and Lexical Grammars](https://tc39.es/ecma262/#sec-syntactic-and-lexical-grammars)
- [ECMA-262 Clause 5.2.4 - Static Semantics](https://tc39.es/ecma262/#sec-static-semantics)

---
> [!IMPORTANT]  
> **Key Takeaway:** Grammar mendefinisikan **Struktur**, sedangkan Static Semantics mendefinisikan **Legitimasi** dari struktur tersebut melalui parameter dan delegasi rekursif.
