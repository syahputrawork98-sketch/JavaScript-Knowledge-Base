# CH-02: Short Circuiting

> **"Short-circuit operators menghentikan evaluasi lebih awal saat hasil jalur sudah cukup ditentukan."**

**Source Hub**:
- [ECMA-262: Binary Logical Operators](https://tc39.es/ecma262/#sec-binary-logical-operators)

```mermaid
graph TD
    Left[Evaluate left operand] --> Check{Enough to decide?}
    Check -->|Yes| Return[Return left-based result]
    Check -->|No| Right[Evaluate right operand]
    Right --> Return
```

## Lab Praktis
Buka file `examples/01_short_circuiting_lab.js` untuk melihat kapan operand kanan dijalankan dan kapan dilewati.

*Status: [x] Complete | [status.md](../../../docs/status.md)*
