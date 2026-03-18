# JavaScript Knowledge Base: Total Deconstruction Plan

> **Status Spec-Sync**: MDN Web Docs (Full Alignment)
> **Last Updated**: 2026-03-19

Arsitektur **Source-Driven 11-Rack** ini mencerminkan taksonomi asli [developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## 🏗 Justifikasi Teknis (The Mirroring Principle)

Setiap Rak dipetakan langsung ke kategori navigasi utama di MDN JavaScript Reference & Guide.

### 1. RAK-01: Get Started
Quickstart untuk pemula total (JS First Steps).

### 2. RAK-02: JavaScript Guide
Navigasi naratif (Handbook) dari pemula hingga advanced.

### 3. RAK-03: Standard Built-in Objects
Referensi lengkap Top-level objects (Array, Object, Map, Set).

### 4. RAK-04: Expressions & Operators
Aturan evaluasi, operator aritmatika, logika, dan comparison.

### 5. RAK-05: Statements & Declarations
Control flow (if-else, switch) dan deklarasi variabel (var, let, const).

### 6. RAK-06: Functions
Function declaration, expressions, arrow functions, dan scope.

### 7. RAK-07: Classes
Paradigma OOP, inheritance, static members, dan private fields.

### 8. RAK-08: Iterators & Generators
Protokol iterasi dan pembuatan generator asinkron.

### 9. RAK-09: Regular Expressions
Pola pencarian string dan parsing teks (Regex).

### 10. RAK-10: Advanced Features
Metaprogramming (Proxy, Reflect) dan Memory Management.

### 11. RAK-11: What's New & Standards
Evolusi ECMAScript (ES6+), TC39, dan fitur eksperimental.

---

## 🗄 Peta Arsitektur Detail

| Rak | Sub-Rak (SR) | Buku (BK) | Deskripsi BK |
| :--- | :--- | :--- | :--- |
| **RAK-01** | SR-01: Basics | BK-01: JS First Steps | Intro & Dasar Sintaks. |
| **RAK-02** | SR-01: Guide | BK-01: Control Flow | Naratif alur logika. |
| | | BK-02: Key Features | Closures, Modules logic. |
| **RAK-03** | SR-01: Objects | BK-01: Global Objects | Array, Object, Function, Error. |
| | | BK-02: Numbers & Dates | Math & Date API. |
| | | BK-03: Collections | Map, Set, WeakMap. |
| **RAK-04** | SR-01: Evaluations | BK-01: Operators Ref | Unary, Binary, Ternary. |
| **RAK-05** | SR-01: Syntax | BK-01: Statements | loops, exception handling. |
| | | BK-02: Declarations | Scoping rules (block vs function). |
| **RAK-06** | SR-01: Mechanics | BK-01: Arguments | Destructuring & Rest/Spread. |
| | | BK-02: Closures | Lexical scoping logic. |
| **RAK-07** | SR-01: OOP | BK-01: Prototypes | The prototype chain. |
| | | BK-02: Class Syntax | Encapsulation & Polymorphism. |
| **RAK-08** | SR-01: Iteration | BK-01: Protocol Ref | Symbol.iterator logic. |
| **RAK-09** | SR-01: Parsing | BK-01: RegExp API | Patterns & Flagging. |
| **RAK-10** | SR-01: Meta | BK-01: Proxies | Traps & Interceptions. |
| **RAK-11** | SR-01: Evolution | BK-01: ES Versions | Changelog from ES5 to ESNext. |

---

## 📜 Log Sinkronisasi (Spec-Log)

| Sumber | Tanggal Audit | Perubahan Arsitektur | Status |
| :--- | :--- | :--- | :--- |
| **MDN v2025** | 2026-03-19 | Inisialisasi 11-Rack (Source-Identic). | ✅ Synced |
