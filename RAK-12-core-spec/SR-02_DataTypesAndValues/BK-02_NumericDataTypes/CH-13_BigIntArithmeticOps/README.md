# CH-13: BigInt Arithmetic Operations

Matematika BigInt sangat jujur, namun ada satu aturan "kejutan" saat berurusan dengan pembagian. Mari kita bedah alur aritmatikanya.

---

## 1. Penjumlahan, Pengurangan, Perkalian
Operasi `+`, `-`, dan `*` bekerja persis seperti matematika bilangan bulat yang Anda pelajari di Sekolah Dasar. Tidak ada pembulatan, tidak ada presisi yang hilang. `10n * 10n` pasti `100n`.

## 2. Keunikan Pembagian (`/`)
Inilah bagian yang paling krusial: **Pembagian BigInt selalu menghasilkan Integer (pembulatan ke arah nol).**
```javascript
5n / 2n === 2n // TRUE
```
Karena BigInt tidak mengenal desimal, ia akan membuang sisa baginya secara paksa. Jika Anda butuh sisa baginya, Anda harus menggunakan operator `%`.

## 3. Operator Eksponen (`**`)
Berbeda dengan Number, operator `**` pada BigInt melarang ekponen bernilai negatif.
```javascript
2n ** -1n // RangeError!
```
Mengapa? Karena $2^{-1}$ adalah $0.5$, sedangkan BigInt dilarang memiliki nilai desimal. Spesifikasi melarangnya sejak dini agar tidak terjadi kebingungan tipe.

---

## Mengapa Arsitek Harus Tahu Ini?
Saat mendesain algoritma pembagian di atas BigInt (misal: menghitung persentase dari angka besar), hasil pembagian Anda akan selalu kehilangan akurasi di belakang koma. Strategi arsitekturalnya: lakukan perkalian (misal: kali 100 atau 1000) terlebih dahulu sebelum melakukan pembagian untuk "mengamankan" angka di belakang koma sebagai integer.

---

## Tantangan Kecil
Berapakah hasil dari `(-5n) / 2n`?
(Jawabannya: **-2n**. Spesifikasi menyatakan pembulatan dilakukan ke arah Nol (*Truncation towards zero*), bukan ke arah bawah seperti `Math.floor`).

---
> [!IMPORTANT]
> **Key Takeaway:** Di dunia BigInt, "Satu dibagi Dua" adalah Nol. Pahami pembulatan ini agar logika keuangan Anda tidak meleset.
