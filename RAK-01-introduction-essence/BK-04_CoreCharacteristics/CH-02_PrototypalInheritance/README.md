# CH-02: Prototypal Inheritance (The Gene)

**"Warisan Tanpa Kelas yang Menjadi Fondasi"**
*Target: Memahami mekanisme pewarisan berbasis prototipe dalam waktu < 2 menit.*

## Source Hub
- **Primary Source**: [MDN Web Docs - Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- **Technical Reference**: [ECMA-262 - Ordinary Object Internal Methods and Internal Slots](https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots)

## 1. Definisi & Konsep (The Logic)
Berbeda dengan bahasa yang dibangun di atas model kelas tradisional, JavaScript bertumpu pada **prototypal inheritance**. Setiap objek dapat memiliki tautan internal ke objek lain yang menjadi tempat delegasi saat properti atau perilaku tidak ditemukan pada objek itu sendiri.

### Terminologi Utama (Senior Terms)
- **Prototype Chain**: Rantai delegasi yang ditelusuri engine saat properti tidak ditemukan pada objek saat ini.
- **`[[Prototype]]`**: Tautan internal yang menghubungkan sebuah objek ke objek rujukan berikutnya dalam rantai.
- **Behavior Delegation**: Pola di mana objek berbagi perilaku lewat delegasi, bukan lewat penyalinan metode ke setiap instance.

## 2. Rasionalitas (Why & How?)
Mekanisme ini memberi JavaScript model berbagi perilaku yang ringan dan fleksibel. Objek tidak harus membawa salinan metode yang sama berkali-kali; cukup ada satu sumber perilaku yang bisa dirujuk bersama. Di sisi lain, karena ia sangat fleksibel, model ini juga mudah disalahpahami jika dipaksa dibaca sepenuhnya dengan lensa class-based OOP.

### Analogi Mendalam
Bayangkan sebuah **Resep Keluarga**. Anda tidak perlu menulis ulang resep itu di setiap buku masak yang Anda miliki. Anda cukup memiliki satu "Resep Utama" (prototype). Saat seseorang membutuhkan langkah memasak tertentu, ia cukup merujuk ke resep utama itu. Jika resep utama berkembang, semua yang merujuk ke sana ikut merasakan efeknya.

## 3. Implementasi Utama (The Lab)
> [!NOTE]
> Unit ini tidak membutuhkan Lab Praktis/Visualisasi karena bersifat penjelasan sejarah/konsep naratif (RAK-01 Exception).

## 4. Model Mental Visual (The Assets)
> [!NOTE]
> Unit ini tidak membutuhkan Lab Praktis/Visualisasi karena bersifat penjelasan sejarah/konsep naratif (RAK-01 Exception).

---
*Back to [Core Characteristics](../README.md)*
