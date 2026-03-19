# CH-09: The Object Type Overview (The Processed Machine)

> **"Primitif adalah bahan baku mentah, tapi `Object` adalah 'Mesin Pengolah' (The Processed Machine). Ini adalah struktur kompleks yang memiliki identitas, perilaku, dan kemampuan untuk menyimpan serta memanipulasi energi di dalam Hub."**

*Pemetaan ECMA-262: Clause 6.1.7 (The Object Type)*

## 1. Mental Model: "The Processed Machine"

Jika String adalah pita pesan, maka Object adalah **Unit Komputasi** yang memiliki:
- **Properti (Kabel/Pipa)**: Tempat menyimpan data atau referensi ke unit lain.
- **Metode (Tombol Operasi)**: Fungsi yang menentukan apa yang bisa dilakukan mesin tersebut.

---

## 2. Identitas vs Nilai

Tidak seperti Primitif, dua Object tidak pernah dianggap sama meskipun isinya identik.
```javascript
const unitA = { id: 1 };
const unitB = { id: 1 };

console.log(unitA === unitB); // false
// Karena identitas fisik (referensi memori) mereka berbeda di Grid.
```

---

## 3. Struktur Internal: Slots & Methods

Di level spesifikasi, setiap Object memiliki "Slot Internal" (`[[InternalSlot]]`) yang tidak bisa diakses langsung oleh kode JavaScript Anda, tapi menentukan bagaimana mesin tersebut bekerja (misalnya `[[Prototype]]`).

---

## Arsitek Mindset: Manajemen Referensi

Sebagai arsitek Hub:
- Sadarilah bahwa saat Anda memindahkan Object antar unit, Anda hanya memindahkan "Alamat" (*Reference*) mesin tersebut, bukan mesin fisiknya. Mengubah mesin di satu tempat akan mengubahnya bagi semua orang yang memegang alamat tersebut.
- Gunakan Object untuk mengelompokkan data yang saling berhubungan (State) agar Hub Anda tetap terorganisir.

---
*Status: [status.md](../../../docs/status.md)*
