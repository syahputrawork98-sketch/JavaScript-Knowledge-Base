# Standar: Aturan Pemetaan Dinamis (Dynamic Mapping Rules)

Aturan ini mendefinisikan bagaimana unit materi (Bab) dipetakan secara dinamis terhadap spesifikasi resmi ECMA-262 untuk menjaga sinkronisasi jangka panjang.

## 1. Prinsip Granulasi 1:1
Setiap **Bab (Chapter)** diupayakan memiliki pemetaan 1:1 terhadap satu atau lebih **Klausul (Clause)** spesifik di ECMA-262.
- **Tujuan**: Memudahkan audit otomatis ketika spesifikasi resmi diperbarui.
- **Identifikasi**: Setiap README Bab wajib mencantumkan klausul referensi di baris awal (misal: *Clause 4.4.1*).

## 2. Aturan Penomoran Dinamis
Nomor bab (`CH-XX`) bersifat urutan internal buku, namun **Pemetaan Klausul** di file `status.md` adalah sumber kebenaran (*Source of Truth*).
- Jika ECMA-262 menyisipkan klausul baru (misalnya 4.4.1.1), maka buku kita akan menyisipkan bab baru (misal: `CH-01-A`) atau menggeser penomoran bab secara sekuensial.
- Perubahan nomor klausul di spek resmi harus segera diabstraksi di level `status.md` buku melalui proses **Spec-Sync Audit**.

## 3. Protokol "Bubbling Up"
Status kemajuan materi mengikuti aturan agregasi dari bawah ke atas:
1.  **State Bab**: Ditentukan oleh kesesuaian narasi, contoh kode, dan visual dengan klausul target.
2.  **Aggregation**: Jika sebuah klausul referensi berubah drastis, status bab tersebut akan turun dari `Sync` ke `Draft`, yang secara otomatis akan menurunkan persentase progress Buku, Sub-Rak, hingga Rak (Bubbling Up).

## 4. Mekanisme Sinkronisasi (Spec-Sync)
- **Bottom-Up**: Perubahan di level Bab memicu pembaruan `status.md` Buku.
- **Top-Down**: Audit rutin (Bulanan/Rilis Spek Baru) melakukan pengecekan nomor klausul di seluruh `README.md` dan memvalidasi apakah isinya masih akurat.

---
> [!IMPORTANT]
> Aturan ini menjamin bahwa "Perpustakaan Digital" kita bukan sekadar salinan statis, melainkan representasi dinamis yang hidup berdampingan dengan evolusi JavaScript.
