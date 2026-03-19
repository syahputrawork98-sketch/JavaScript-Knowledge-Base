# CH-02: Number Type

Inilah tipe data yang paling sering kita gunakan, namun paling sering disalahpahami. **Number** di JavaScript bukanlah sekadar "Angka", tapi sebuah implementasi dari standar **IEEE 754**.

## Mental Model: "Timbangan Digital yang Terbatas"
Bayangkan sebuah timbangan digital yang hanya bisa menampilkan 16 digit angka.
- Jika Anda menimbang benda yang sangat ringan, ia akurat.
- Jika Anda menimbang benda yang sangat berat, ia mulai membulatkan angka-angka di belakang koma karena layar timbangannya sudah penuh.
Itulah cara kerja `Number` (Double Precision 64-bit).

---

## 1. Struktur 64-bit (Double Precision)
Menurut Clause 6.1.6.1, tipe Number mewakili nilai biner 64-bit yang terbagi menjadi:
- **1 Bit:** Tanda (Positif/Negatif).
- **11 Bit:** Eksponen (Menentukan seberapa besar/kecil angka tersebut).
- **52 Bit:** Fraksi/Mantissa (Menentukan angka signifikannya).

## 2. Nilai-Nilai Spesial
Karena menggunakan format floating point, Number memiliki nilai unik yang tidak ada di tipe lain:
- **NaN:** Not-a-Number (Hasil dari operasi ilegal seperti `0 / 0`).
- **+Infinity & -Infinity:** Mewakili nilai di luar batas 64-bit.
- **+0 & -0:** Ya, spesifikasi memiliki dua jenis nol, yang berperilaku hampir sama tapi berbeda di beberapa algoritma pembagian.

## 3. Batas Aman: `MAX_SAFE_INTEGER`
Karena hanya memiliki 52 bit untuk fraksi (ditambah 1 bit implisit), angka bulat yang bisa diwakili secara akurat (tanpa pembulatan) hanya sampai $2^{53} - 1$ ($9,007,199,254,740,991$). 
Di atas angka ini, Anda akan mulai melihat keanehan seperti:
```javascript
9007199254740992 + 1 === 9007199254740992 // TRUE!
```

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami limitasi IEEE 754 membantu Anda menjelaskan mengapa `0.1 + 0.2 === 0.30000000000000004`. Itu bukan bug JavaScript, itu adalah keterbatasan representasi biner terhadap angka desimal manusia. Arsitek yang cerdas akan menyarankan penggunaan *Integer Cents* (mengali 100) untuk perhitungan uang agar terhindar dari floating point error.

---

## Tantangan Kecil
Apakah `NaN === NaN`?
(Jawabannya: **FALSE**. Berdasarkan spesifikasi IEEE 754 dan Clause 6.1.6.1.13, `NaN` adalah satu-satunya nilai di JavaScript yang tidak sama dengan dirinya sendiri. Ini dirancang agar pengembang sadar bahwa ada sesuatu yang "rusak" dalam perhitungan mereka).

---
> [!IMPORTANT]
> **Key Takeaway:** Number adalah kompromi antara presisi luar biasa dan performa hardware. Kenali batasannya, maka Anda menguasai bahasanya.
