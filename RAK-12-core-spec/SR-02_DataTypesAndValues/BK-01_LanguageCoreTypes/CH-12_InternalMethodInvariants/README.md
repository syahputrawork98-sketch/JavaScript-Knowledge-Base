# CH-12: Internal Method Invariants

Jika objek boleh mengganti perilaku internalnya (melalui Proxy atau Exotic Objects), apakah itu berarti tidak ada aturan sama sekali? Jawabannya: **Ada**. Inilah **Invariants of the Essential Internal Methods** (Clause 6.1.7.3).

## Mental Model: "Hukum Fisika di Dunia Objek"
Bayangkan Anda adalah Tuhan di dunia JavaScript. Anda boleh menciptakan makhluk-makhluk aneh (Exotic Objects) sesuka hati. Namun, Anda menetapkan hukum fisika yang tidak boleh dilanggar:
- "Apapun alasannya, gravitasi tetap menarik benda ke bawah."
- "Benda padat tidak bisa menembus dinding."
**Invariants** adalah hukum fisika bagi objek. Tanpa hukum ini, mesin JS tidak akan pernah bisa mengoptimasi kode Anda karena perilakunya terlalu liar.

---

## 1. Mengapa Invariants Penting?
Mesin JS modern melakukan banyak asumsi saat menjalankan kode Anda (JIT Compilation). Jika sebuah objek tiba-tiba berperilaku sangat di luar nalar (misal: memberikan hasil berbeda untuk properti yang konon katanya *Non-configurable*), maka mesin akan *crash* atau memberikan hasil yang tidak konsisten.

## 2. Contoh Utama Invariants
Spesifikasi menetapkan banyak aturan di Clause 6.1.7.3. Berikut adalah yang paling fundamental:

- **[[GetPrototypeOf]]:** Jika sebuah objek dibilang *Non-extensible*, maka nilai prototipenya tidak boleh berubah selamanya.
- **[[GetOwnProperty]]:** Jika sebuah properti adalah *Non-configurable* dan *Non-writable*, maka `[[GetOwnProperty]]` **HARUS** selalu mengembalikan nilai yang sama setiap kali dipanggil. Tidak boleh ada "keajaiban" perubahan nilai di sini.
- **[[PreventExtensions]]:** Sekali sebuah objek menjadi *Non-extensible* (lewat `Object.preventExtensions()`), dia tidak akan pernah bisa menjadi *Extensible* lagi.

## 3. Proxy dan Invariants
Saat Anda menggunakan **Proxy**, Anda secara teknis menulis ulang metode internal objek. Jika kode Proxy Anda melanggar salah satu *Invariant* ini, mesin JavaScript akan melempar `TypeError` tepat di muka Anda. 
> *Catatan:* Inilah alasan mengapa sulit membuat Proxy untuk objek yang sudah di-`freeze`.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami invariant membantu Anda menulis Proxy yang aman dan performan. Anda tahu batasan-batasan di mana Anda boleh "bermain ilmu hitam" dan di mana Anda harus patuh pada aturan dasar spesifikasi agar mesin JS tidak mematikan optimasi pada objek Anda.

---

## Tantangan Kecil
Bolehkah sebuah objek mengembalikan `true` saat diperiksa keberadaannya dengan `in`, tapi mengembalikan `undefined` saat diakses, padahal properti tersebut ditandai sebagai *Data Property Non-configurable*?
(Jawabannya: **TIDAK**. Invariant memastikan konsistensi antara keberadaan properti dan nilai yang dikembalikan untuk menjaga integritas memori).

---
> [!IMPORTANT]
> **Key Takeaway:** Invariants adalah kontrak keamanan antara pengembang dan mesin JavaScript. Melanggarnya berarti merusak fondasi logika bahasa.
