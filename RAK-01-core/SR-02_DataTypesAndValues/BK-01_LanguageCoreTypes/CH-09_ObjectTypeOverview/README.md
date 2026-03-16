# CH-09: Object Type Overview

Setelah membedah 7 tipe primitif, kita sampai pada raja dari segala tipe data di JavaScript: **Object**. Di Clause 6.1.7, spesifikasi mendefinisikan objek bukan hanya sebagai "wadah", tapi sebagai sebuah entitas semantik yang kompleks.

## Mental Model: "Entitas dengan Kekuatan Super"
Berbeda dengan Primitif yang seperti batu bata mati, **Object** adalah makhluk hidup di dalam memori.
- Dia punya **Identitas** (Siapa saya?).
- Dia punya **State** (Apa yang saya bawa?/Properti).
- Dia punya **Behavior** (Apa yang bisa saya lakukan?/Internal Methods).

---

## 1. Definisi Formal: Object
Menurut Clause 6.1.7: *"An Object is a member of the type Object. It is a collection of properties."*

Namun, spesifikasi melangkah lebih jauh. Sebuah objek didefinisikan oleh **Internal Methods** yang dimilikinya. Jika sebuah entitas memiliki metode internal standar (seperti `[[Get]]`, `[[Set]]`), maka dia sah dianggap sebagai Object.

## 2. Struktur Properti
Properti dalam objek bukan sekadar nilai. Setiap properti memiliki "Descriptor" yang terdiri dari:
- **Key:** Bisa berupa String atau Symbol.
- **Attributes:** Aturan main properti tersebut (seperti yang kita pelajari di SR-01).

## 3. Komponen Internal Objek
Setiap objek membawa "Bagasi Tersembunyi" (Internal Slots):
- **[[Prototype]]:** Link ke objek induk.
- **[[Extensible]]:** Apakah objek ini boleh ditambah properti baru?
- **[[PrivateData]]:** Data khusus yang hanya bisa diakses oleh mesin.

---

## Mengapa Arsitek Harus Tahu Ini?
Hampir seluruh arsitektur sistem JavaScript yang kompleks dibangun di atas objek. Memahami bahwa objek adalah "Koleksi Properti dengan Perilaku Internal" memungkinkan Anda memprediksi bagaimana objek akan berinteraksi dengan algoritma lain dalam spesifikasi (seperti algoritma pencarian properti).

---

## Tantangan Kecil
Apakah `null` adalah objek? Di sub-rak sebelumnya (SR-01) kita tahu `typeof` bilang iya, tapi bagaimana dengan Clause 6.1.7?
(Jawabannya: **TIDAK**. Clause 6.1.1 s/d 6.1.6 mendefinisikan Primitif. Clause 6.1.7 secara eksklusif mendefinisikan Object. Mereka adalah dua dunia yang berbeda secara formal).

---
> [!IMPORTANT]
> **Key Takeaway:** Object adalah satu-satunya tipe data yang memiliki **Internal Methods**. Inilah yang membuatnya menjadi tipe data "Aktif".
