# CH-05: Number::divide & remainder

Pembagian adalah operasi yang paling sering memicu kondisi "tepi" (edge cases) di JavaScript, seperti pembagian dengan nol. Mari kita lihat Clause 6.1.6.1.5 dan 6.1.6.1.6.

---

## 1. Number::divide ( n, d )
Ini adalah operasi `n / d`. Aturan mainnya:
- **Divide by Zero:** Di banyak bahasa pemrograman, `5 / 0` akan melempar error. Di JavaScript, hasilnya adalah `Infinity`.
- **0 / 0:** Menghasilkan `NaN`.
- **Tanda Hasil:** Jika operan memiliki tanda berbeda (misal: `10 / -2`), hasilnya adalah `-5`.

**Insight Arsitek:** Karena pembagian dengan nol tidak melempar error, aplikasi Anda bisa terus berjalan dengan nilai `Infinity` tanpa Anda sadari. Ini bisa menyebabkan bug "senyap" di mana angka di UI tiba-literally menghilang atau menjadi teks "Infinity".

---

## 2. Number::remainder ( n, d )
Ini adalah operasi sisa bagi atau Modulo (`n % d`).
Aturan uniknya:
1. Jika `n` adalah `Infinity` atau `d` adalah `0`, hasilnya adalah `NaN`.
2. Jika `n` adalah angka biasa dan `d` adalah `Infinity`, hasilnya adalah `n`.
3. Tanda dari hasil `remainder` **selalu sama dengan tanda operan pertama** (`n`).

**Contoh:**
- `-5 % 3` adalah `-2`. (Karena operan pertamanya `-5`).
- `5 % -3` adalah `2`. (Karena operan pertamanya `5`).

---

## Mengapa Arsitek Harus Tahu Ini?
Operator `%` sering digunakan untuk logika "Looping" atau "Pagination". Perbedaan perilaku tanda (seperti `-5 % 3`) bisa menyebabkan *Out of Bounds Error* pada array jika Anda tidak hati-hati. Selalu pastikan Anda memahami bahwa JavaScript mengembalikan sisa bagi yang bertanda, bukan nilai absolut sisa bagi.

---

## Tantangan Kecil
Berapakah hasil dari `10 % 0`?
(Jawabannya: **NaN**. Berbeda dengan pembagian (`10 / 0` yang menghasilkan `Infinity`), sisa bagi dengan nol tidak memiliki definisi matematis yang stabil di hardware, sehingga spesifikasi memberikan `NaN`).

---
> [!IMPORTANT]
> **Key Takeaway:** Pembagian menghasilkan `Infinity`, sedangkan sisa bagi (mod) dengan nol menghasilkan `NaN`. Waspadai perbedaan kritis ini!
