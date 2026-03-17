# Buku: 04 Static Semantic Rules

*Pemetaan ECMA-262: Clause 5.2.4 (Latest ES2025/2026) & Early Errors*

Buku ini membedah mekanisme "Polisi" di dalam spesifikasi JavaScript. Sebelum kode dijalankan (*Runtime*), terdapat serangkaian aturan statis yang memastikan kode tersebut valid secara logika dan struktur.

## Mental Model
**"Buku Peraturan & Detektor Pelanggaran"**
Bayangkan sebuah bandara. *Grammar* (Buku 02) memastikan Anda memiliki tiket dan paspor (Format valid). *Algorithms* (Buku 03) adalah perjalanan terbangnya sendiri. Namun, *Static Semantics* adalah pemeriksaan keamanan; mereka memastikan Anda tidak membawa barang terlarang (Early Errors) sebelum Anda diizinkan masuk ke pesawat.

## Daftar Bab (PPM V3)
1.  **[CH-01: Algorithm Static Semantics](./CH-01_AlgorithmStaticSemantics/README.md)**: Memahami aturan statis dalam algoritma.
2.  **[CH-02: Grammar Static Semantics](./CH-02_GrammarStaticSemantics/README.md)**: Memahami aturan statis dalam notasi grammar.
3.  **[CH-03: Early Error Rules](./CH-03_EarlyErrorRules/README.md)**: Mekanisme deteksi kesalahan sebelum eksekusi.
4.  **[CH-04: Static Scope Rules](./CH-04_StaticScopeRules/README.md)**: Bagaimana scope diidentifikasi secara statis.
5.  **[CH-05: Forbidden Extensions](./CH-05_ForbiddenExtensions/README.md)**: Aturan pelarangan fitur non-standar.
6.  **[CH-06: Constant Declarations](./CH-06_ConstantDeclarations/README.md)**: Validasi statis untuk `const` dan `let`.
7.  **[CH-07: Duplicate Labels](./CH-07_DuplicateLabels/README.md)**: Deteksi label duplikat dan break/continue target.
8.  **[CH-08: Async/Await Restrictions](./CH-08_AsyncAwaitRestrictions/README.md)**: Aturan penempatan keyword async/await.
9.  **[CH-09: Parameter Validation](./CH-09_ParameterValidation/README.md)**: Aturan statis untuk parameter fungsi.
10. **[CH-10: Strict Mode Semantics](./CH-10_StrictModeSemantics/README.md)**: Bagaimana 'use strict' mengubah aturan statis.
11. **[CH-11: Binding Initialization](./CH-11_BindingInitialization/README.md)**: Aturan statis untuk destructuring dan binding.
12. **[CH-12: Class Static Semantics](./CH-12_ClassStaticSemantics/README.md)**: Bedah aturan field, private methods, dan constructor restrictions.
13. **[CH-13: Module Static Analysis](./CH-13_ModuleStaticAnalysis/README.md)**: Bagaimana mesin mencek import/export dan cycle secara statis.
14. **[CH-14: Script vs Module: The Static Divide](./CH-14_ScriptVsModuleStaticDivide/README.md)**: Perbedaan fundamental pengecekan (seperti Top-level Await).
15. **[CH-15: Global Declaration Instantiation](./CH-15_GlobalDeclarationInstantiation/README.md)**: Bedah proses scan pertama kali nama-nama didaftarkan ke memori.
16. **[CH-16: Advanced Semantic Puzzles](./CH-16_AdvancedSemanticPuzzles/README.md)**: Tantangan logika validasi spesifikasi.

---
*Status: Published (Versi v3.01.01.04)*  
*Detail Progres: [docs/status.md](./docs/status.md)*
