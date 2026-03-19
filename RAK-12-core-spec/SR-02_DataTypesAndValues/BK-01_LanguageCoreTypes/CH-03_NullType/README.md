# CH-03: The Null Type (The Empty Socket)

> **"Jika `undefined` adalah kabel mati, maka `null` adalah 'Soket Kosong' (The Empty Socket). Ini adalah tindakan sengaja untuk mencabut steker daya dari sistem, menandakan bahwa soket tersebut fungsional tapi saat ini kosong oleh desain."**

*Pemetaan ECMA-262: Clause 6.1.2 (The Null Type)*

## 1. Mental Model: "The Empty Socket"

Bayangkan sebuah rak di Hub yang memiliki soket untuk baterai cadangan.
- **`null`**: Raknya ada, soketnya bersih, tapi baterainya secara sengaja diambil oleh teknisi untuk pemeliharaan. Anda mengosongkannya secara eksplisit.
- **`undefined`**: Anda lupa memasang raknya ke sistem monitoring, sehingga sistem tidak tahu apa isinya.

---

## 2. Keanehan Sejarah: `typeof null`

Jika Anda mengetes `typeof null` di Hub, sensor akan melaporkan `"object"`.
> **Arsitek Note:** Ini adalah bug desain dari hari pertama JavaScript dibuat (karena representasi bit untuk null dan object tumpang tindih). Spesifikasi tidak memperbaikinya untuk menjaga kompatibilitas grid lama. Jangan tertipu! `null` adalah **Primitif**, bukan object.

---

## 3. Praktik Lapangan (Lab)

```javascript
let backupBattery = { capacity: 100 };
backupBattery = null; // Mencabut baterai secara sengaja

if (backupBattery === null) {
  console.log("Soket kosong. Harap pasang baterai baru.");
}
```

---

## Arsitek Mindset: Komunikasi Niat

Sebagai arsitek Hub:
- Gunakan `null` untuk merepresentasikan *"Nilai yang belum ada saat ini"* atau *"Hasil pencarian yang tidak ditemukan"*.
- Biasakan menggunakan `null` alih-alih `undefined` saat mengembalikan nilai dari API atau fungsi pencarian data di Grid untuk menunjukkan bahwa operasi telah dilakukan tapi tidak ada hasil.

---
*Status: [status.md](../../../docs/status.md)*
