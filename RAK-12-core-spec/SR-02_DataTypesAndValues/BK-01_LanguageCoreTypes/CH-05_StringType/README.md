# CH-05: The String Type (The Pulse Sequence)

> **"Informasi di Grid tidak hanya berupa angka mentah, tapi juga instruksi tekstual. `String` adalah 'Urutan Pulsa' (The Pulse Sequence) — serangkaian kode biner 16-bit yang membentuk pesan komunikasi antar unit Hub."**

*Pemetaan ECMA-262: Clause 6.1.4 (The String Type)*

## 1. Mental Model: "The Pulse Sequence"

Bayangkan sebuah pita printer yang mengeluarkan urutan karakter satu demi satu.
- Setiap karakter diwakili oleh nilai 16-bit tak bertanda (*Unsigned 16-bit Integer*).
- **Immutability (Prasasti Baja)**: Sekali pesan dicetak di pita, pesannya tidak bisa diubah sebagian. Jika Anda ingin mengubah satu huruf, Anda harus mencetak pita baru dari awal.

---

## 2. Struktur Spec: UTF-16 Code Units

JavaScript menggunakan encoding UTF-16.
- Karakter standar (seperti 'A') menggunakan **1 Code Unit**.
- Karakter kompleks (seperti Emoji 🚀) menggunakan **2 Code Units** (Surrogate Pairs).
- Ini menjelaskan mengapa ` "🚀".length ` memberikan hasil **2**, meskipun hanya satu gambar yang terlihat.

---

## 3. Praktik Lapangan (Lab)

```javascript
const logMsg = "SECTOR_ALPHA_ACTIVE";
console.log(logMsg[0]); // "S" (Membaca pulsa pertama)

// Percobaan Mutasi (Gagal)
logMsg[0] = "B"; 
console.log(logMsg); // Tetap "SECTOR_...", karena String adalah Primitif Immutable.
```

---

## Arsitek Mindset: Efisiensi Pesan

Sebagai arsitek Hub:
- Gunakan **Template Literals** (backticks) untuk menggabungkan banyak sinyal teks agar kode lebih mudah diaudit oleh teknisi lain.
- Waspadalah saat melakukan manipulasi string di dalam loop besar; karena string bersifat *immutable*, Hub akan terus-menerus membuat objek memori baru yang bisa memperlambat performa sistem.

---
*Status: [status.md](../../../docs/status.md)*
