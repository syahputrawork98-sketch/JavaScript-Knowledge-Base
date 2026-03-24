# BK-01: Primary and Postfix Expressions

> **"Jalur inti untuk asal nilai, reference discovery, call chains, dan update operations."**

**Source Hub**:
- [ECMA-262: Primary Expressions](https://tc39.es/ecma262/#sec-primary-expressions)
- [ECMA-262: Left-Hand-Side Expressions](https://tc39.es/ecma262/#sec-left-hand-side-expressions)
- [ECMA-262: Update Expressions](https://tc39.es/ecma262/#sec-update-expressions)

---

## Struktur Bab

1. **[CH-01: Primary Units](./CH-01_PrimaryUnits/)**: identifier, `this`, literals, initializer, dan ekspresi pembentuk nilai dasar.
2. **[CH-02: LHS and Update](./CH-02_LHSAndUpdate/)**: property access, calls, `new`, optional chaining, serta `++` dan `--`.

---

## Fokus Audit
1. Pastikan pembahasan primary values dan reference-producing expressions tidak tercampur.
2. Bedakan `GetValue` dari reference creation secara eksplisit.
3. Gunakan buku ini sebagai fondasi sebelum operator yang lebih berat di `BK-02` dan `BK-03`.

---
*Buku Status: [x] Complete | [status.md](../../docs/status.md) | Kembali ke [SR-07](../README.md)*
