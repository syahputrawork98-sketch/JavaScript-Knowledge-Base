# CH-14: PrivateElement Specification Type

Bagaimana JavaScript menangani privasi di dalam Class? Spesifikasi menggunakan tipe internal bernama **PrivateElement** (Clause 6.2.10).

## Mental Model: "Kunci dan Gembok Pribadi"
Bayangkan sebuah objek Class adalah gedung perkantoran.
- **Normal Properties:** Adalah ruangan yang terbuka untuk umum.
- **PrivateElement:** Adalah ruangan besi dengan gembok khusus yang kuncinya hanya dipegang oleh pemilik Class tersebut. Gembok ini memiliki nama unik yang tidak bisa ditebak dari luar.

---

## 1. Struktur PrivateElement
Didefinisikan sebagai Record dengan field:
- **[[Key]]**: Nama privatnya (Bertipe Private Name, CH-16).
- **[[Kind]]**: Jenis elemennya (**~field~**, **~method~**, atau **~accessor~**).
- **[[Value]]**: Isinya (Nilai field atau referensi fungsi).

## 2. Cara Kerja Internal
Saat Anda menulis `#name = "John"`, mesin menciptakan satu **PrivateElement**. Elemen ini disimpan secara terpisah dari properti biasa supaya tidak bisa diakses lewat `Object.keys()` atau `for...in`.

## 3. Brand Checking
Spesifikasi menggunakan keberadaan `PrivateElement` di sebuah objek untuk melakukan "Brand Checking" (memastikan apakah objek tersebut benar-benar instansiasi dari Class yang berwenang mengakses data privat tersebut).

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami PrivateElement membantu Anda memahami mengapa fitur `#` (Private Class Fields) jauh lebih aman dan performan daripada pola penamaan `_underscore`. Anda menyadari bahwa privasi di JS modern bukan sekadar konvensi, tapi struktur data internal yang diproteksi di level spesifikasi.

---

## Tantangan Kecil
Apakah kita bisa menghapus sebuah PrivateElement menggunakan operator `delete`?
(Jawabannya: **TIDAK**. PrivateElement tidak memiliki atribut `[[Configurable]]` seperti properti biasa. Begitu didefinisikan di dalam Class, ia bersifat permanen selama objek tersebut hidup).

---
> [!IMPORTANT]
> **Key Takeaway:** PrivateElement adalah fondasi enkapsulasi nyata di JavaScript. Ia adalah gembok internal yang tidak bisa dibobol oleh API refleksi manapun.
