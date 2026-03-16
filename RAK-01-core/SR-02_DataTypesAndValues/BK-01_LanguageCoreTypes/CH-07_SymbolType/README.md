# CH-07: Symbol Type

Jika String adalah manik-manik yang bisa dibaca semua orang, maka **Symbol** adalah sebuah tanda tangan rahasia yang tidak dapat dipalsukan.

## Mental Model: "Kunci Sidik Jari"
Bayangkan sebuah pintu (Objek).
- **String Key:** Seperti kunci fisik biasa. Siapapun yang punya duplikatnya bisa membuka pintu.
- **Symbol Key:** Seperti pemindai sidik jari. Tidak ada dua sidik jari yang sama di dunia, dan Anda tidak bisa membuat sidik jari palsu hanya dengan melihatnya.

---

## 1. Definisi Formal: Symbol
Menurut Clause 6.1.5: *"The Symbol type is the set of all non-String values that may be used as the key of an Object property."*

Karakteristik Utama:
- **Uniqueness:** Setiap kali Anda memanggil `Symbol()`, spesifikasi menjamin nilai yang dihasilkan unik secara global di dalam memori.
- **Privacy (By Default):** Properti yang menggunakan Symbol sebagai key tidak akan muncul dalam iterasi biasa (seperti `for...in` atau `Object.keys()`).
- **Immutable:** Symbol tidak bisa diubah setelah diciptakan.

## 2. Deskripsi Symbol
`Symbol("desc")` menerima sebuah deskripsi. Namun perhatikan: Deskripsi ini **hanya untuk debugging**.
```javascript
Symbol("A") === Symbol("A") // FALSE
```
Spesifikasi membandingkan Symbol berdasarkan identitas internalnya, bukan berdasarkan teks deskripsinya.

## 3. Global Symbol Registry
Spesifikasi menyediakan mekanisme untuk berbagi Symbol antar-modul atau bahkan antar-iframe melalui `Symbol.for(key)`. Ini adalah satu-satunya cara untuk mendapatkan "Sidik Jari" yang sama di tempat yang berbeda.

---

## Mengapa Arsitek Harus Tahu Ini?
Symbol adalah alat terbaik untuk membuat **Private Members** (sebelum ada fitur `#private` di Class) atau untuk menambahkan "Metadata" pada objek tanpa takut mengganggu atau bentrok dengan properti yang sudah ada.

---

## Tantangan Kecil
Dapatkah kita mengubah Symbol menjadi String menggunakan `+ ""`?
(Jawabannya: **Tidak**. Spesifikasi melarang konversi implisit Symbol ke String (akan melempar `TypeError`). Anda harus menggunakan `.toString()` atau `String(sym)` secara eksplisit. Ini adalah fitur keamanan agar Symbol tidak "bocor" secara tidak sengaja).

---
> [!IMPORTANT]
> **Key Takeaway:** Symbol bukan string. Symbol adalah identitas unik yang digunakan untuk keamanan dan struktur objek tingkat lanjut.
