# CH-11: BigInt Type

Selamat datang di dunia angka tanpa batas. Jika `Number` adalah tipe data yang bergantung pada hardware, maka **BigInt** adalah tipe data yang bergantung pada logika matematika murni. Mari kita bedah Clause 6.1.6.2.

---

## 1. Definisi Formal: BigInt
Menurut Clause 6.1.6.2: *"The BigInt type represents an integer value without a specified fixed bit width."*

Artinya, BigInt bisa menyimpan angka bulat sebesar apapun (selama memori komputer Anda masih cukup). Tidak ada lagi masalah $2^{53} - 1$.

## 2. Notasi dan Identitas
- **Literal:** Ditandai dengan akhiran `n` (misal: `100n`).
- **Bukan Object:** Sama seperti Number, BigInt adalah tipe primitif.
- **Tanpa Desimal:** BigInt secara harfiah berarti "Integer Besar". Ia tidak bisa menyimpan `10.5n`.

## 3. Limitasi yang Disengaja
Meskipun "tanpa batas", BigInt memiliki batasan untuk menjaga keamanan sistem:
- **No Floating Point:** Tidak ada `NaN` atau `Infinity` di dunia BigInt.
- **No Mixing:** Anda tidak bisa melakukan `5n + 10`. Spesifikasi melarang pencampuran tipe untuk menghindari kehilangan presisi yang tidak disengaja.

---

## Mengapa Arsitek Harus Tahu Ini?
Gunakan BigInt sebagai standar untuk semua ID numerik yang berasal dari sistem eksternal (Database, API), terutama jika sistem tersebut menggunakan 64-bit ID. Memaksakan 64-bit ID ke dalam tipe `Number` akan menyebabkan ID tersebut "berubah" di tengah jalan karena pembulatan IEEE 754.

---

## Tantangan Kecil
Apa hasil dari `typeof 10n`?
(Jawabannya: **"bigint"**. Ini adalah bukti bahwa BigInt adalah tipe data bahasa yang mandiri, bukan sekadar variasi dari Number).

---
> [!IMPORTANT]
> **Key Takeaway:** BigInt adalah solusi absolut untuk keluhan "JavaScript tidak bisa menghitung dengan benar". Gunakan ia untuk integritas data yang tiada duanya.
