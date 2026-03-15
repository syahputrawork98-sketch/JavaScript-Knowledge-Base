# Buku 01: Lexical Analysis

Buku ini membedah proses pertama yang dilakukan oleh *Engine* JavaScript saat menerima kode Anda: **Lexical Analysis** (Clause 11 & 12 pada ECMA-262). Kita akan belajar bagaimana karakter mentah (Unicode) diproses menjadi unit-unit yang bermakna bagi komputer (*Tokens*).

## Mengapa Mempelajari Ini?
Lexical Grammar adalah gerbang pertama. Memahami bagaimana JavaScript membaca teks adalah kunci untuk menghindari *SyntaxError* yang aneh, memahami batasan karakter Unicode, dan menguasai mekanisme otomatis seperti ASI (*Automatic Semicolon Insertion*) yang sering kali terlihat magis namun berbahaya.

## Daftar Bab

1. **[Bab 01: Source Text & Unicode (Bahan Baku)](./CH-01_SourceTextAndUnicode/)**
2. **[Bab 02: Tokens & Identifiers (Unit Terkecil)](./CH-02_TokensAndIdentifiers/)**
3. **[Bab 03: Automatic Semicolon Insertion (Aturan ASI)](./CH-03_AutomaticSemicolonInsertion/)**
4. **[Bab 04: Lexical Ambiguity (Dua Makna)](./CH-04_LexicalAmbiguity/)**

## Prasyarat Pembaca
- **[RAK-01-core / SR-02_DataTypesAndValues / Bab 01: String Internals](../../SR-02_DataTypesAndValues/BK-01_PrimitiveTypes/01_string_internals/)**: Memahami dasar representasi UTF-16 yang juga digunakan dalam Source Text.
