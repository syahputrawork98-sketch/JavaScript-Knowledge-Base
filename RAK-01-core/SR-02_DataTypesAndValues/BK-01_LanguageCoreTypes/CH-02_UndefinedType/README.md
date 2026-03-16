# CH-02: Undefined Type

Dalam percakapan sehari-hari, kita sering menggunakan kata "Undefined" untuk sesuatu yang tidak jelas. Namun dalam spesifikasi, **Undefined** adalah sebuah kepastian: sebuah tipe data resmi dengan tepat satu nilai.

## Mental Model: "Ruangan yang Belum Diperuntukkan"
Bayangkan sebuah hotel. **Undefined** adalah kamar yang sudah dibangun, sudah punya nomor kamar (Variable Name), tapi belum ada tamu atau perabotan di dalamnya. Kamar itu ada, tapi isinya adalah "Ketiadaan yang Belum Ditetapkan".

---

## 1. Definisi Formal: Undefined
Menurut Clause 6.1.1: *"The Undefined type has exactly one value, called **undefined**. Any variable that has not been assigned a value has the value **undefined**."*

Poin penting:
- **Tipe:** Undefined (Huruf besar, konsep abstrak).
- **Nilai:** `undefined` (Huruf kecil, nilai konkret).

## 2. Di Mana Kita Menemukan `undefined`?
Spesifikasi menetapkan nilai `undefined` muncul pada:
1. Variabel yang baru dideklarasikan tanpa nilai (`let x;`).
2. Fungsi yang tidak melakukan `return` secara eksplisit.
3. Properti objek yang tidak ada saat diakses.
4. Parameter fungsi yang tidak diisi oleh pemanggil.

## 3. Undefined as a Value, not a Keyword
Meskipun `undefined` bertindak seperti keyword, secara teknis di JavaScript lama dia adalah properti global yang bisa diubah (sekarang sudah dikunci/read-only). Inilah alasan mengapa para arsitek lebih menyarankan pengecekan menggunakan `typeof x === "undefined"`.

---

## Mengapa Arsitek Harus Tahu Ini?
Jangan mencampuradukkan `undefined` dengan "Error". `undefined` adalah status legal sebuah data. Mengetahui kapan spesifikasi memberikan `undefined` membantu Anda merancang *Default State* aplikasi yang lebih tangguh.

---

## Tantangan Kecil
Apa perbedaan antara variabel yang `undefined` dan variabel yang *not defined*?
(Jawabannya: Variabel **undefined** sudah dideklarasikan tapi belum diisi nilainya. Variabel **not defined** (ReferenceError) adalah variabel yang bahkan belum didaftarkan di dalam *Environment Record*).

---
> [!TIP]
> **Pro-Tip:** Gunakan `undefined` untuk menandakan sistem yang belum siap, bukan untuk menghapus data. Untuk "Penghapusan Sengaja", gunakan `null`.
