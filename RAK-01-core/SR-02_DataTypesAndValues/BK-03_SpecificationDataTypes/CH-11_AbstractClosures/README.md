# CH-11: Abstract Closures

Kadang-kadang, spesifikasi butuh membuat sebuah "Fungsi Kecil" internal untuk dijalankan nanti (seperti pada Promise atau penanganan event). Spesifikasi menyebutnya sebagai **Abstract Closure** (Clause 6.2.8).

## Mental Model: "Memo Instruksi Terlampir"
Bayangkan Anda memberikan sebuah memo instruksi kepada sekretaris Anda:
*"Tolong lakukan X saat Y terjadi. Oh ya, bawa juga catatan dari laci saya (Captured Values)."*
Memo ini adalah **Abstract Closure**. Ia bukan fungsi JavaScript yang bisa dipanggil orang lain, tapi instruksi tersimpan yang akan dijalankan oleh mesin di masa depan.

---

## 1. Definisi Formal: Abstract Closure
Abstract Closure adalah sebuah nilai yang membungkus:
- **An Algorithm:** Langkah-langkah yang harus dijalankan.
- **Captured Values:** Daftar variabel yang "dibawa" dari tempat closure tersebut dibuat.

## 2. Penggunaan dalam Spesifikasi
Anda sering melihat ini di bagian asinkron:
> *"Let closure be a new Abstract Closure with no parameters that captures x and does the following..."*

Mesin JS akan menyimpan `x` ke dalam closure tersebut dan menjalankan langkah-langkahnya saat waktunya tiba.

## 3. Berbeda dengan Function Object
Jangan tertukar dengan `Function Object` (CH-10 di BK-01).
- **Function Object:** Adalah objek JavaScript yang punya `[[Call]]`, prototipe, dan bisa dilihat di kode.
- **Abstract Closure:** Adalah konsep murni spesifikasi untuk menjelaskan alur algoritma yang tertunda/bersifat *callback* internal.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami Abstract Closure membantu Anda mengerti bagaimana "Janji" (*Promises*) atau *Asynchronous Ops* bekerja secara formal. Anda menyadari bahwa mesin tidak hanya menyimpan fungsi Anda, tapi ia membangun sebuah entitas baru (Abstract Closure) yang menjaga agar data yang diperlukan tetap hidup secara logis.

---

## Tantangan Kecil
Dapatkah sebuah Abstract Closure menerima parameter?
(Jawabannya: **YA**. Spesifikasi bisa mendefinisikan closure dengan parameter tertentu yang akan diisi oleh mesin saat closure tersebut dipanggil).

---
> [!NOTE]
> **Key Takeaway:** Abstract Closure adalah cara spesifikasi mengatakan: "Simpan langkah-langkah ini dan data ini untuk dijalankan nanti."
