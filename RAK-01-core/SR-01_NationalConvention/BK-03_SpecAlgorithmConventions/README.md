# BK-03: Spec Algorithm Conventions (Clause 5.2)

Belajar membaca "Codingan Internal" TC39. Bagaimana nasib sebuah variable ditentukan? Bagaimana error dilempar? Semuanya dijawab di sini melalui konvensi penulisan algoritma resmi.

## Daftar Isi: Menguasai Bahasa Mesin
- [CH-01: Evaluation Order](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-01/README.md) (5.2.1)
- [CH-02: Abstract Operations](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-02/README.md) (5.2.2)
- [CH-03: Syntax-Directed Operations](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-03/README.md) (5.2.3)
- [CH-04: Runtime Semantics Overview](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-04/README.md) (5.2.4)
- [CH-05: Completion Records Unveiled](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-05/README.md) (5.2.4.1)
- [CH-06: Throwing Exceptions](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-06/README.md) (5.2.4.2)
- [CH-07: Shorthands for Unwrapping](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-07/README.md) (5.2.4.3)
- [CH-08: Implicit Normal Completion](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-08/README.md) (5.2.4.4)
- [CH-09: Static Semantics](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-09/README.md) (5.2.5)
- [CH-10: Mathematical Operations](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-10/README.md) (5.2.6)
- [CH-11: Value Notation](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-11/README.md) (5.2.7)
- [CH-12: Identity](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-12/README.md) (5.2.8)
- [CH-13: Host-defined Operations](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-13/README.md) (Supplemental)
- [CH-14: Algorithm Puzzles & Edge Cases](file:///i:/Workspace/Workspace-Syahputrawork/Language-Hubs-Workspace/JavaScript-Knowledge-Base/RAK-01-core/SR-01_NationalConvention/BK-03_SpecAlgorithmConventions/CH-14/README.md) (Synthesis)

---
> [!NOTE]
> Pemetaan ini mencakup penambahan sub-seksi terbaru pada ES2025 (16th edition).
