# CH-10: Environment Records

Di mana sebenarnya JavaScript menyimpan variabel Anda? Jawabannya bukan di "Awan", tapi di dalam **Environment Record** (Clause 6.2.7).

## Mental Model: "Lemari Kabinet Variabel"
Bayangkan setiap kali Anda masuk ke sebuah fungsi atau blok kode, mesin JS menyediakan sebuah "Lemari Kabinet" baru.
- Setiap laci di lemari tersebut diberi label nama variabel Anda.
- Isinya adalah nilai atau referensi variabel tersebut.
- Lemari ini juga bisa punya "Kabel" yang terhubung ke lemari di luarnya (Parent Scope).

---

## 1. Peran Environment Record
Environment Record adalah mekanisme spesifikasi untuk melakukan **Binding** (mengikat nama variabel ke nilainya). Ini adalah fondasi dari sistem **Scope** di JavaScript.

## 2. Jenis-Jenis Environment Record
Ternyata tidak semua "Lemari" itu sama:
- **Declarative Environment Record:** Digunakan untuk fungsi, blok `{...}`, dan `catch`. Menyimpan `let, const, class`.
- **Object Environment Record:** Digunakan untuk Global Scope (yang terikat ke `window` atau `globalThis`) dan pernyataan `with`.
- **Function Environment Record:** Variasi khusus untuk fungsi yang menangani `this`, `super`, dan `new.target`.
- **Global Environment Record:** Gabungan antara objek global dan deklarasi tingkat atas.

## 3. Komponen Penting
- **[[OuterEnv]]**: Referensi ke environment di luarnya (Inilah yang menciptakan *Scope Chain*).
- **Immutable Bindings**: Digunakan untuk `const` (Laci yang dikunci setelah diisi).

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami Environment Record menghapus keajaiban di balik **Closure**. Closure hanyalah sebuah fungsi yang membawa "Kabel" (`[[OuterEnv]]`) ke lemari variabel tempat ia diciptakan, sehingga ia tetap bisa membuka laci-laci di lemari tersebut meskipun fungsi luarnya sudah selesai dijalankan.

---

## Tantangan Kecil
Kapan sebuah Environment Record dihancurkan?
(Jawabannya: Secara teoretis saat tidak ada lagi yang membutuhkannya. Jika ada fungsi (Closure) yang masih memegang referensi ke environment tersebut, maka *Garbage Collector* tidak akan menghancurkannya).

---
> [!IMPORTANT]
> **Key Takeaway:** Variabel Anda tidak melayang bebas. Mereka dipenjara dengan rapi di dalam Environment Record yang terstruktur dan hierarkis.
