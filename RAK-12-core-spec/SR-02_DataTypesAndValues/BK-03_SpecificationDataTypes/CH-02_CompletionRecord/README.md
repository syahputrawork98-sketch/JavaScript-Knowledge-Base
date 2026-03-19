# CH-02: Completion Record (The Execution Signal)

> **"Setiap kali sebuah modul dijalankan, Hub harus tahu apakah operasinya berhasil atau mengalami korsleting. `Completion Record` adalah 'Sinyal Eksekusi' (The Execution Signal) yang membawa berita tentang keberhasilan, kegagalan, atau pengalihan jalur energi."**

*Pemetaan ECMA-262: Clause 6.2.4 (The Completion Record Specification Type)*

## 1. Mental Model: "The Execution Signal"

Bayangkan setiap kabel di Hub memiliki lampu indikator status di ujungnya.
- **Normal**: Lampu hijau. Aliran berjalan lancar ke instruksi berikutnya.
- **Abrupt (Tiba-tiba)**: Lampu merah atau kuning. Aliran harus berhenti atau melompat ke tempat lain.

Setiap statement dalam JavaScript yang Anda tulis akan menghasilkan salah satu dari sinyal ini di level spec.

---

## 2. Struktur Sinyal

Sebuah Completion Record memiliki 3 field internal:
1.  **[[Type]]**: Jenis sinyal (`normal`, `break`, `continue`, `return`, atau `throw`).
2.  **[[Value]]**: Data yang dibawa (hasil perhitungan atau objek error).
3.  **[[Target]]**: Label tujuan (digunakan saat `break` atau `continue` pada loop berlabel).

![Completion Flow](./assets/completion_record_flow.svg)

---

## 3. Normal vs Abrupt

- **Normal Completion**: Saat kode berjalan baris demi baris tanpa gangguan.
- **Abrupt Completion**: Terjadi saat ada interupsi seperti `throw error`, `return` di tengah fungsi, atau `break` di dalam loop.
- **Propagasi**: Jika sebuah sinyal adalah `throw`, Hub akan terus mengirimkan sinyal "merah" tersebut ke atas (ke pemanggil) sampai ada blok `try-catch` yang mengubahnya kembali menjadi sinyal `normal`.

---

## Arsitek Mindset: Arus Aliran Kontrol

Sebagai arsitek Hub:
- Memahami Completion Record menjelaskan mengapa `finally` selalu berjalan: karena spesifikasi mewajibkan eksekusi blok `finally` sebelum memproses sinyal `return` atau `throw` yang tertunda.
- Ini adalah kunci untuk memahami sinkronisasi dan penanganan error tingkat tinggi di Hub.

---
*Status: [status.md](../../../docs/status.md)*
