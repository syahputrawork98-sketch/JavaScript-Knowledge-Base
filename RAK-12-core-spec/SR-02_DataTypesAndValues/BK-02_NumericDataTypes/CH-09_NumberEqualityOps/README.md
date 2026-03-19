# CH-09: Number Equality Operations

Hampir semua pengembang tahu `==` dan `===`. Namun, arsitek spesifikasi tahu bahwa ada **Tiga Wajah Kesetaraan** untuk angka yang didefinisikan di Clause 6.1.6.1.13 hingga 6.1.6.1.15.

---

## 1. Number::equal ( x, y )
Ini adalah algoritma di balik `===` (Strict Equality).
- **NaN:** `NaN === NaN` adalah **false**.
- **Zeros:** `+0 === -0` adalah **true**.

## 2. Number::sameValue ( x, y )
Digunakan oleh `Object.is(x, y)`. Ini adalah kesetaraan paling jujur.
- **NaN:** `NaN` dianggap sama dengan `NaN`. (**true**)
- **Zeros:** `+0` dianggap **BERBEDA** dengan `-0`. (**false**)

## 3. Number::sameValueZero ( x, y )
Digunakan secara internal oleh koleksi seperti `Map`, `Set`, dan `.includes()`. Ini adalah jalan tengah.
- **NaN:** `NaN` dianggap sama dengan `NaN`. (**true**)
- **Zeros:** `+0` dianggap **SAMA** dengan `-0`. (**true**)

---

## Ringkasan Perbedaan

| Algoritma | `NaN` vs `NaN` | `+0` vs `-0` | Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| `equal` (===) | False | True | Operasi Harian |
| `sameValue` | **True** | **False** | `Object.is` |
| `sameValueZero` | **True** | True | `Set`, `Map`, `includes` |

---

## Mengapa Arsitek Harus Tahu Ini?
Anda harus tahu mengapa `[NaN].includes(NaN)` menghasilkan `true` padahal `NaN === NaN` adalah `false`. Alasannya karena `.includes()` menggunakan `sameValueZero`. Pengetahuan ini krusial saat Anda mendesain sistem *Caching* atau *State Management* di mana Anda perlu mendeteksi perubahan nilai secara akurat.

---

## Tantangan Kecil
Jika Anda menggunakan `+0` sebagai key di sebuah `Map`, lalu mencoba mengambilnya menggunakan `-0`, apakah berhasil?
(Jawabannya: **Ya**. Karena `Map` menggunakan `sameValueZero`, ia menganggap kedua nol tersebut sebagai key yang sama).

---
> [!IMPORTANT]
> **Key Takeaway:** Tidak semua "Sama Dengan" itu diciptakan setara. Pilih algoritma yang tepat untuk kebutuhan deteksi perubahan data Anda.
