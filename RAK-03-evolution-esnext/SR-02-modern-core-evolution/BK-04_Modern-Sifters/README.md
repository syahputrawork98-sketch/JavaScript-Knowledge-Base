# BK-04: Modern Sifters

![Status](https://img.shields.io/badge/STATUS-COMPLETE-green?style=for-the-badge)

> **"Penyaring Modern: Membedah Teknik Pengelompokan Data Kinetik Melalui Grouping Logic."**

---

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- **Technical Reference**: [TC39 - Array Grouping Proposal](https://github.com/tc39/proposal-array-grouping)
- **Conceptual Parent**: [RAK-03 Evolution](../README.md)

---

## 🌓 1. Essence: The Logic
Organisasi data adalah efisiensi. Di **BK-04**, kita membedah mekanisme internal evolusi JavaScript dalam teknik pengolahan koleksi. Memahami **Modern Sifters** memungkinkan Anda mentransformasi daftar data mentah menjadi struktur kategori yang terorganisir hanya dengan satu baris kode fungsional.

Dahulu, pengelompokan data membutuhkan logika `reduce` yang kompleks. Kini, dengan hadirnya `groupBy`, JavaScript menyediakan instrumen asli untuk melakukan kategorisasi data secara atomik, meningkatkan keterbacaan kode dan performa pada Hub aplikasi yang menangani data masif.

---

## 🎨 2. Visual Logic: Functional Sifting Logic
Mekanisme kategorisasi elemen koleksi melalui mesin logika penyaring:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph LR
    List[Raw Data List] -- "groupBy()" --> Sifter[The Sifter Engine]
    
    subgraph Logic_Gateway
    Sifter -- "Category A" --> BucketA[Group A: { data }]
    Sifter -- "Category B" --> BucketB[Group B: { data }]
    end
    
    BucketA -- "Mapped to" --> Object[Result: Object / Map]
    BucketB -- "Mapped to" --> Object
    
    style Sifter fill:#f7df1e,stroke:#333;
    style Object fill:#90EE90,stroke:#333;
```

---

## 🏛️ 3. Sections Atlas
- **[CH-01: Array By Copy](./CH-01_ArrayByCopy/)**: Membedah teknik manipulasi array tanpa mutasi (ToSorted, ToReversed, ToSpliced).
- **[CH-02: Object Grouping](./CH-02_ObjectGrouping/)**: Meninjau pemanfaatan instrumen grouping untuk kategorisasi data berbasis kunci unik.

---

## 🧪 4. The Lab (Sifting Lab)
Uji ketajaman kategorisasi dan penyaringan data koleksi di laboratorium:
- `../examples/group_by_demo.js`

---

## ⚠️ 5. Common Pitfalls & Myths
- **Mitos**: *"Lakukan pengelompokan data secara manual dengan for-loop untuk performa."* (Salah, engine V8 modern telah mengoptimalkan `groupBy` secara internal. Menggunakan instrumen asli jauh lebih aman, bersih, dan sering kali lebih cepat daripada penulisan manual yang rentan sirkuit mati).
- **Mitos**: *"Object.groupBy dan Map.groupBy adalah hal yang identik."* (Faktanya, **Object.groupBy** menghasilkan objek literal yang dikunci oleh string/symbol, sedangkan **Map.groupBy** memungkinkan kunci pengelompokan berupa tipe data apa pun, termasuk objek. Pilih Map jika Anda membutuhkan identitas kunci yang kompleks).

---
*Back to [Modern Core Evolution](../README.md)*
