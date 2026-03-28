# BK-02: Unary and Binary Operators

> **"Jalur inti untuk operator yang mentransformasikan nilai tunggal maupun menggabungkan dua operand."**

**Source Hub**:
- [ECMA-262: Unary Operators](https://tc39.es/ecma262/#sec-unary-operators)
- [ECMA-262: Exponentiation Operator](https://tc39.es/ecma262/#sec-exp-operator)
- [ECMA-262: Multiplicative Operators](https://tc39.es/ecma262/#sec-multiplicative-operators)
- [ECMA-262: Additive Operators](https://tc39.es/ecma262/#sec-additive-operators)

---

## Struktur Bab

1. **[CH-01: Unary and Exponentiation](./CH-01_UnaryAndExponentiation/)**: `delete`, `void`, `typeof`, unary numeric ops, dan `**`.
2. **[CH-02: Arithmetic and Shift](./CH-02_ArithmeticAndShift/)**: `*`, `/`, `%`, `+`, `-`, dan shift operators.
3. **[CH-03: Relational and Equality](./CH-03_RelationalAndEquality/)**: `<`, `>`, `instanceof`, `in`, `==`, dan `===`.
4. **[CH-04: Bitwise and Logical](./CH-04_BitwiseAndLogical/)**: bitwise operators dan logical evaluation dasar.

---

## Fokus Audit
1. Jaga perbedaan coercion, numeric conversion, dan comparison semantics tetap tajam.
2. Pastikan precedence tidak mengaburkan urutan evaluasi yang sebenarnya.
3. Gunakan buku ini sebagai jembatan sebelum short-circuit dan assignment semantics di `BK-03`.

---
*Buku Status: [x] Complete | [status.md](../../docs/status.md) | Kembali ke [SR-07](../README.md)*
