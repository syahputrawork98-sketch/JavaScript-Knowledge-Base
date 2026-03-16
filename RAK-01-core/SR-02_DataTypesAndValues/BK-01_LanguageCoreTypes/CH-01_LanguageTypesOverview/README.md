# CH-01: Language Types Overview

Sebelum kita menyelam ke masing-masing tipe data, kita harus memahami apa yang dimaksud dengan **ECMAScript Language Types** dan mengapa spesifikasi membaginya seperti itu.

## Mental Model: "Set Bahan Baku Bangunan"
Bayangkan Anda adalah seorang arsitek yang sedang membangun sebuah gedung pencakar langit. Untuk membangun gedung tersebut, Anda hanya diizinkan menggunakan 8 jenis bahan baku dasar yang disediakan oleh supplier (Spesifikasi).
- Beberapa bahan sangat ringan (Primitif).
- Satu bahan sangat fleksibel tapi berat (Object).
Hanya dengan kombinasi 8 bahan inilah seluruh struktur program JavaScript Anda tercipta.

---

## 1. Definisi Formal: Language Types
Menurut Clause 6.1, **Language Types** adalah *"Types that correspond to values that are directly manipulated by an ECMAScript programmer."*

Artinya, semua yang Anda sentuh di Terminal atau Editor (seperti `42`, `"hello"`, atau `{}`) adalah anggota dari salah satu Language Types ini.

## 2. 8 Pilar Language Types
Inilah 8 tipe data resmi dalam spesifikasi ECMA-262:

| Tipe | Kategori | Ringkasan Definisi |
| :--- | :--- | :--- |
| **Undefined** | Primitif | Digunakan untuk nilai yang belum ditetapkan. |
| **Null** | Primitif | Menunjukkan ketiadaan nilai secara eksplisit. |
| **Boolean** | Primitif | Nilai logika (`true` atau `false`). |
| **String** | Primitif | Kumpulan kode Unicode 16-bit. |
| **Symbol** | Primitif | Nilai unik yang tidak dapat berubah. |
| **Number** | Numeric | Nilai binary floating point (IEEE 754). |
| **BigInt** | Numeric | Nilai integer dengan presisi arbitrer. |
| **Object** | Complex | Koleksi properti dengan internal methods/slots. |

## 3. Primitif vs Object
Dalam spesifikasi, perbedaan fundamentalnya adalah:
- **Primitif:** Nilai yang bersifat atomik, tidak dapat diubah (*immutable*), dan tidak memiliki properti.
- **Object:** Struktur data yang memiliki identitas unik dan dapat dikonfigurasi melalui properti.

---

## Mengapa Arsitek Harus Tahu Ini?
Banyak bug muncul karena kita berasumsi sebuah nilai adalah apa yang kita pikirkan, bukan apa yang spesifikasi definisikan. Memahami 8 tipe dasar ini adalah langkah awal untuk melakukan *Debug* logis yang akurat.

---

## Tantangan Kecil
Berapa banyak tipe data di atas yang bersifat *Immutable*?
(Jawabannya: **7 tipe** (semua kecuali Object). Sekali Anda membuat string `"abc"`, string tersebut tidak akan pernah bisa diubah isinya di memori; Anda hanya bisa membuat string baru).

---
> [!IMPORTANT]
> **Key Takeaway:** Setiap nilai di JavaScript punya "Rumah" (Type) di Clause 6.1. Jika Anda tahu rumahnya, Anda tahu aturannya.
