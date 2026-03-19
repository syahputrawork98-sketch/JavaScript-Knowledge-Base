# CH-01: Date (The Master Clock)

> **"Operasi dalam Hub Energi tidak hanya membutuhkan data, tapi juga sinkronisasi waktu yang tepat. `Date` adalah jam operasional pusat Hub yang mencatat setiap peristiwa hingga presisi milidetik."**

Objek `Date` di JavaScript menangani representasi waktu dan tanggal sejak "Unix Epoch" (1 Januari 1970).

## 1. Mental Model: "The Master Clock"

Bayangkan sebuah jam digital raksasa di tengah Hub Energi. Jam ini menghitung milidetik yang telah berlalu sejak Hub pertama kali dinyalakan (1970). Kita bisa membaca jam ini untuk mengetahui hari apa sekarang, jam berapa sebuah pesan diterima, atau menjadwalkan pemeliharaan mesin di masa depan.

---

## 2. Membaca Jam (Reading the Clock)

Setiap instance `Date` menyimpan satu titik waktu tertentu.

### Alat Baca (Getters):
- **`.getTime()`**: Mengambil total milidetik (Timestamp). Ini adalah nilai mentah energi waktu.
- **`.getFullYear()`**: Membaca tahun sekarang.
- **`.getMonth()`**: **Peringatan Arsitek!** Bulan dimulai dari **0** (Januari = 0, Desember = 11). Jangan sampai salah jadwal!
- **`.getDate()`**: Membaca tanggal dalam bulan (1-31).

```javascript
const now = new Date();
console.log(now.getFullYear()); // 2026 (atau tahun saat ini)
console.log(now.getMonth());    // 2 (Maret, jika dimulai dari 0)
```

---

## 3. Mengatur Jam (Parsing & Setting)

- **`new Date("2026-03-19")`**: Membuat titik waktu berdasarkan teks ISO.
- **`Date.now()`**: Cara tercepat untuk mengambil timestamp milidetik saat ini tanpa membuat objek baru.

---

## Arsitek Mindset: Bahaya Zona Waktu

Sebagai arsitek, berhati-hatilah dengan Zona Waktu (Timezone). Objek `Date` secara default menggunakan waktu lokal dari komputer pengguna. Untuk sinkronisasi antar Hub yang berada di lokasi geografis berbeda, gunakan selalu format **UTC** (`.toUTCString()`) atau simpan data dalam format **ISO 8601** (`.toISOString()`).

---

## Hands-on: Lab Jam Operasional Hub
Buka file `examples/date_sync_lab.js` untuk melihat bagaimana kita menghitung durasi antara dua kejadian dan memformat waktu Hub ke dalam format yang mudah dibaca.

---
*Status: [status.md](../../../status.md)*
