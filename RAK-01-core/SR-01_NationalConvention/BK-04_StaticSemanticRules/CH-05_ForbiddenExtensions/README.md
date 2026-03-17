# CH-05: Forbidden Extensions

*Pemetaan ECMA-262: Clause 17 (Forbidden Extensions)*

Meskipun ECMA-262 memberikan kebebasan bagi *Host* untuk menambah fitur (seperti `console`), spesifikasi juga menetapkan "Garis Merah" yang tidak boleh dilanggar. Inilah **Forbidden Extensions**.

## Mental Model: "Aturan Modifikasi Mobil"
Bayangkan spesifikasi adalah aturan keamanan jalan raya. Anda boleh memodifikasi mobil (Engine/Host) Anda dengan stiker atau audio yang lebih bagus (*Host-defined features*). Tapi, Anda dilarang keras mengubah fungsi rem atau lampu sein menjadi sesuatu yang membingungkan pengemudi lain.

---

## 1. Menjaga Kontrak Bahasa (Clause 17)
Tujuan dari *Forbidden Extensions* adalah untuk memastikan bahwa kode yang valid menurut spesifikasi standar **tidak akan berperilaku berbeda** atau gagal di mesin yang memiliki ekstensi vendor. Ini menjamin portabilitas kode JavaScript di seluruh dunia.

## 2. Larangan Utama
Berdasarkan Clause 17, Engine JavaScript **DILARANG**:
- **Ekstensi Sintaksis**: Menambah sintaks baru yang membuat program yang valid secara standar menjadi tidak valid.
- **Modifikasi Semantik**: Mengubah algoritma internal yang sudah didefinisikan oleh spesifikasi (misal: mengubah cara `Object.defineProperty` bekerja).
- **Properti Objek Global**: Menambahkan properti ke Objek Global yang namanya bukan merupakan nama unik (untuk menghindari bentrok dengan fitur masa depan).
- **Strict Mode Bypass**: Menambahkan fitur yang memperbolehkan pelanggaran aturan *Strict Mode*.

## 3. Kompromi: Annex B
Beberapa ekstensi yang secara teknis melanggar aturan di atas tetap diizinkan melalui **Annex B** hanya demi kompatibilitas web lama (*Additional ECMAScript Features for Web Browsers*). Fitur ini bersifat opsional bagi engine non-browser (seperti Node.js) tapi wajib bagi browser.

---

## Arsitek Mindset: Portabilitas & Masa Depan
Sebagai arsitek, Anda harus waspada terhadap fitur "Non-Standard" yang disediakan oleh runtime tertentu. Jika fitur tersebut berada di area *Forbidden Extensions*, kemungkinan besar fitur tersebut akan menghambat migrasi kode Anda di masa depan atau menyebabkan perilaku *unpredictable* saat spesifikasi standar mengadopsi nama fitur yang serupa.

---

## Referensi Terkait
- [ECMA-262 Clause 17 - Forbidden Extensions](https://tc39.es/ecma262/#sec-forbidden-extensions)
- [ECMA-262 Annex B - Legacy Extensions](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers)

---
> [!IMPORTANT]  
> **Key Takeaway:** Spesifikasi adalah kontrak sosial. *Forbidden Extensions* memastikan kontrak tersebut tidak dilanggar secara sepihak oleh vendor engine demi menjaga ekosistem web tetap terbuka.
