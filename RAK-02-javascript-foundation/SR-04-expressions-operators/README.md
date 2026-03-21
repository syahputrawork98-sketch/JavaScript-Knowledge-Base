# SR-04: Expressions & Operators (Energy Manipulation)

> **"Jika Objek adalah mesin dan Data adalah energinya, maka `Operator` adalah katup, penyambung, dan pengolah yang menentukan bagaimana energi tersebut mengalir dan bertransformasi di dalam Hub. SR-04 adalah pusat kendali manipulasi energi di level sub-atomik."**

Dalam Hub Energi, data tidak pernah statis. Ia selalu bergerak (Expressions) dan diproses (Operators). Sub-Rack ini membagi manipulasi energi menjadi tiga tingkatan presisi.

---

## 🧭 Peta Navigasi Energi

### 1. [BK-01: Energy Flow (Basic)](./BK-01_EnergyFlow/README.md)
Berfokus pada alokasi dan perhitungan energi dasar.
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`.
- **Assignment**: `=`, `+=`, `-=`, dll.
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`.
- **Logical**: `&&`, `||`, `!`, `??`.

### 2. [BK-02: Advanced Processing (Sub-atomic)](./BK-02_AdvancedProcessing/README.md)
Manipulasi bit mentah untuk performa ekstrem.
- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`.
- **Conditional (Ternary)**: `condition ? expr1 : expr2`.

### 3. [BK-03: System Meta (Inspector)](./BK-03_SystemMeta/README.md)
Memeriksa integritas sirkuit dan tipe data.
- **Unary**: `typeof`, `delete`, `void`.
- **Relational**: `in`, `instanceof`.

---

## 1. Mental Model: "Energy Manipulation"

Operator bukan sekadar simbol matematika; mereka adalah alat operasional Hub:
- **Flow Gate**: Mengalirkan energi dari satu penyimpanan ke penyimpanan lain (`=`).
- **Logic Gates**: Menyaring aliran energi berdasarkan kondisi tertentu (`&&`, `||`).
- **Sub-atomic Sifters**: Membedah struktur internal energi di level bit (`&`, `|`).

![Logic Gates](./BK-01_EnergyFlow/assets/logic_gates_premium.svg)

---

## Arsitek Mindset: Presisi vs Kecepatan

Sebagai arsitek Hub:
- **Strict Equality**: Selalu gunakan `===` untuk menghindari kebocoran tipe data yang tidak terduga di dalam Grid.
- **Short-circuiting**: Manfaatkan `&&` dan `||` untuk menghentikan aliran energi lebih awal jika kondisi tidak terpenuhi (*Efficiency*).
- **Nullish Coalescing**: Gunakan `??` daripada `||` jika Anda hanya ingin menangani `null` atau `undefined`, tanpa mengganggu nilai *falsy* lain seperti `0` atau `""`.

---

## Hands-on: Lab Manipulasi Energi
Buka folder `examples/` untuk bereksperimen dengan routing logika dan manipulasi bit di dalam sistem Hub.

---
*Status: Gold Standard (100% Complete)*
