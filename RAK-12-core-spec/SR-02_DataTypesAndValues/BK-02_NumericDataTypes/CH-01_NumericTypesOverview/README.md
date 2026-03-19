# CH-01: Numeric Types Overview

Mengapa JavaScript membutuhkan **BigInt** jika kita sudah punya **Number**? Mengapa terkadang `0.1 + 0.2` tidak sama dengan `0.3`? Jawaban atas pertanyaan-pertanyaan ini dimulai dari Clause 6.1.6.

## Mental Model: "Dua Jenis Kalkulator"
Bayangkan Anda memiliki dua kalkulator di atas meja:
1. **Kalkulator Saintifik (Number):** Sangat cepat, bisa menghitung angka yang sangat besar (eksponensial) atau sangat kecil (desimal), tapi terkadang kurang teliti di angka-angka detail.
2. **Kalkulator Akuntansi (BigInt):** Tidak bisa menghitung desimal (koma), tapi sangat teliti dalam menghitung angka bulat sebesar apapun tanpa pernah salah satu angka pun.

---

## 1. Pembagian Tipe Numerik
Menurut Clause 6.1.6, ECMAScript membagi nilai numerik menjadi dua tipe bahasa yang berbeda:
- **Number:** Berdasarkan standar internasional IEEE 754 (64-bit binary floating point).
- **BigInt:** Digunakan untuk merepresentasikan angka bulat dengan kedaulatan penuh (tidak ada batas 53-bit).

## 2. Mengapa Dibedakan?
Alasan utamanya adalah **Presisi vs Performa**:
- **Number** dirancang agar pas dengan register hardware CPU komputer modern (64-bit). Ini membuatnya sangat cepat untuk komputasi grafis dan sains.
- **BigInt** dirancang untuk kebutuhan yang membutuhkan ketelitian absolut pada angka bulat besar, seperti ID database yang sangat panjang atau kriptografi.

## 3. Aturan Main: Tidak Boleh Bercampur
Spesifikasi melarang keras pencampuran operan `Number` dan `BigInt` dalam satu operasi matematika (misal: `10 + 10n` akan melempar `TypeError`).
> *Alasan Arsitek:* Karena mencampurkan keduanya berarti Anda harus memilih antara mengorbankan presisi (ke Number) atau mematikan kemampuan desimal (ke BigInt). Spesifikasi memaksa Anda untuk sadar dalam memilih "Kalkulator" mana yang Anda gunakan.

---

## Mengapa Arsitek Harus Tahu Ini?
Sebagai arsitek, Anda harus menentukan sejak awal tipe numerik mana yang sesuai untuk setiap *field* data. Kesalahan pemilihan antara Number dan BigInt bisa berakibat pada hilangnya data (precision loss) yang sangat fatal pada sistem finansial.

---

## Tantangan Kecil
Manakah dari kedua tipe ini yang bisa merepresentasikan nilai `NaN` (Not-a-Number)?
(Jawabannya: **Hanya Number**. Tipe BigInt selalu merepresentasikan nilai matematika bulat yang nyata. Ia tidak memiliki konsep "Bukan Angka" atau "Tak Hingga/Infinity").

---
> [!IMPORTANT]
> **Key Takeaway:** Number untuk kecepatan dan desimal. BigInt untuk ketelitian absolut angka bulat.
