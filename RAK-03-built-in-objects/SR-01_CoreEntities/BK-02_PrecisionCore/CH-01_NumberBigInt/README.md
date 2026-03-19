# CH-01: Number & BigInt (Measuring Energy)

> **"Data numerik adalah unit pengukuran energi di Hub kita. Namun, setiap alat ukur memiliki batas presisi. Memahami batas ini mencegah terjadinya 'kebocoran energi' dalam perhitungan Anda."**

JavaScript menyediakan dua alat utama untuk menangani angka: `Number` (untuk pengukuran umum) dan `BigInt` (untuk beban kerja raksasa).

## 1. Number: The Standard Meter

Hampir semua angka di JavaScript disimpan sebagai **64-bit Floating Point**. Ini berarti ada batasan presisi yang harus Anda waspadai.

### Masalah Presisi (The 0.1 + 0.2 Trap)
Dalam sistem biner, beberapa angka desimal tidak bisa direpresentasikan secara sempurna.
```javascript
console.log(0.1 + 0.2 === 0.3); // false! Hasilnya 0.30000000000000004
```
**Solusi Arsitek**: Selalu gunakan pembulatan atau konversi ke satuan terkecil (misal: hitung dalam sen, bukan rupiah) untuk transaksi sensitif.

### Toolbox Statis `Number`
- **`Number.isNaN(val)`**: Memeriksa apakah sensor memberikan nilai "Bukan Angka" (NaN).
- **`Number.isInteger(val)`**: Memeriksa apakah arus energi bulat/stabil.
- **`Number.MAX_SAFE_INTEGER`**: Batas maksimum kabel tembaga standar (2^53 - 1).

---

## 2. BigInt: The Heavy-Duty Cable

Saat energi melebihi `MAX_SAFE_INTEGER`, kabel standar akan meleleh (presisi hilang). Di sinilah `BigInt` berperan.

### Karakteristik BigInt
- Dibuat dengan menambahkan `n` di akhir angka: `100n`.
- Bisa menangani angka sebesar apa pun selama memori sistem mencukupi.
- **Peringatan**: BigInt tidak bisa dicampur langsung dengan Number dalam perhitungan matematika. Anda harus mengonversi salah satunya.

```javascript
const hugeEnergy = 9007199254740991n + 1n; // Berhasil!
```

---

## Arsitek Mindset: Memilih Alat Ukur yang Tepat

Gunakan **Number** untuk koordinat UI, perhitungan grafis, dan angka-angka kecil. Gunakan **BigInt** untuk ID database yang sangat besar, perhitungan kriptografi, atau data statistik berskala astronomis di Hub Energi Anda.

---

## Hands-on: Lab Presisi Numerik
Buka file `examples/precision_lab.js` untuk melihat demonstrasi hilangnya presisi pada Number besar dan bagaimana BigInt menyelamatkan hari.

---
*Status: [status.md](../../../status.md)*
