# CH-11: Internal Methods and Slots

Inilah "Bagian Dalam" dari mesin JavaScript. Segala sesuatu yang ditandai dengan kurung siku ganda `[[...]]` adalah **Internal Methods** atau **Internal Slots** yang didefinisikan secara formal di Clause 6.1.7.2.

## Mental Model: "Sirkuit di Balik Panel"
Bayangkan sebuah objek adalah sebuah perangkat elektronik.
- **Property:** Adalah tombol dan layar yang bisa Anda lihat.
- **Internal Methods/Slots:** Adalah sirkuit dan memori internal di balik panel yang tidak bisa Anda sentuh langsung, tapi menentukan bagaimana alat itu bekerja saat tombol ditekan.

---

## 1. Internal Slots: "Memori Rahasia"
Internal Slots (seperti `[[Prototype]]` atau `[[Extensible]]`) digunakan oleh spesifikasi untuk menyimpan data internal objek.
- Anda tidak bisa mengaksesnya dengan `obj.[[Prototype]]` di kode Anda.
- Anda harus menggunakan API resmi seperti `Object.getPrototypeOf()`.

## 2. Internal Methods: "Algoritma Rahasia"
Ini adalah "Fungsi Internal" yang dijalankan oleh mesin setiap kali Anda melakukan operasi pada objek. Beberapa yang paling penting adalah:

- **[[Get]] (P, Receiver):** Dipanggil saat Anda membaca `obj.P`.
- **[[Set]] (P, V, Receiver):** Dipanggil saat Anda menulis `obj.P = V`.
- **[[HasProperty]] (P):** Dipanggil oleh operator `in`.
- **[[Delete]] (P):** Dipanggil oleh operator `delete`.
- **[[Call]]:** Hanya dimiliki oleh fungsi (objek yang bisa dipanggil).

## 3. Ordinary vs Exotic (Level Intern)
- **Ordinary Object:** Menggunakan implementasi default untuk semua metode internal ini (Clause 10.1).
- **Exotic Object:** Memiliki implementasi kustom untuk salah satu metode internal ini. Contohnya: **Proxy** secara harfiah adalah objek yang menyuntikkan fungsi Anda ke dalam internal methods tersebut.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami internal methods adalah kunci untuk memahami "Kekecewaan" yang sering terjadi di JavaScript (seperti mengapa performa melambat saat menggunakan Proxy atau Large Arrays). Anda mulai berpikir di level bagaimana mesin mengeksekusi perintah Anda, bukan sekadar menulis kodenya.

---

## Tantangan Kecil
Apa yang terjadi jika objek tidak memiliki metode internal `[[Construct]]`?
(Jawabannya: Objek tersebut tidak bisa dipanggil dengan keyword `new`. Inilah alasan mengapa *Arrow Function* (yang tidak punya `[[Construct]]`) akan melempar error jika Anda mencoba me-instansiasi mereka).

---
> [!IMPORTANT]
> **Key Takeaway:** `[[...]]` adalah bahasa spesifikasi untuk mengatakan: "Ini adalah cara kerja sebenarnya, bukan cara Anda memandangnya."
