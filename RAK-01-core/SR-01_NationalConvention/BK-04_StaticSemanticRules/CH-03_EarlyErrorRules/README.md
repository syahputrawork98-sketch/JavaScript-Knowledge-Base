# CH-03: Early Error Rules

*Pemetaan ECMA-262: Static Semantics: Early Errors*

Mengapa beberapa kesalahan di JavaScript membuat aplikasi tidak jalan sama sekali, bahkan sebelum baris pertama dieksekusi? Inilah yang disebut **Early Error**.

## Mental Model: "Saringan Keamanan Bandara"
Bayangkan Anda sedang di bandara. Ada dua jenis pemeriksaan:
1. **Pemeriksaan Tiket (Early Error):** Petugas mencegat Anda di gerbang karena tiket Anda palsu. Anda tidak pernah sampai ke pesawat.
2. **Pemeriksaan di Pesawat (Runtime Error):** Anda sudah terbang, tapi tiba-tiba pilot sadar bensinnya habis.

**Early Error** adalah petugas bandara yang memastikan barang-barang terlarang tidak masuk ke ruang eksekusi.

---

## 1. Definisi Formal (Fase Parsing)
*Early Errors* didefinisikan secara khusus dalam spesifikasi di bawah setiap produksi grammar yang relevan. Jika sebuah script atau modul mengandung *Early Error*, maka script tersebut tidak akan pernah masuk ke fase **Execution** (Runtime).

### Perbedaan Kritis:
- **Lexical/Grammar Error**: Struktur teks salah (misal: `functon`).
- **Early Error (Static Semantics)**: Teks benar secara grammar, tapi dilarang secara peraturan statis (misal: `const a;` - konstanta tanpa inisialisasi).

## 2. Kategori Umum Early Errors
Apa saja yang dicegat oleh "Saringan" ini?
- **Binding Errors**: Nama parameter duplikat dalam *Strict Mode* atau fungsi generator.
- **Reference Errors (Static)**: Menggunakan `super()` di luar constructor kelas.
- **Scope Errors**: `yield` di luar generator atau `await` di luar fungsi async/top-level module.
- **Strict Mode Restrictions**: Penggunaan `with` statement atau menghapus variabel yang tidak dapat dihapus (`delete x`).

## 3. Implikasi bagi Mesin (Stop the World)
Satu saja *Early Error* dalam file `.js` akan menggagalkan seluruh file tersebut. Ini berbeda dengan *Runtime Error* di mana script sempat berjalan dan mungkin sudah melakukan mutasi status sebelum akhirnya berhenti.

---

## Arsitek Mindset: Catch Early, Run Fast
Memahami Early Errors memungkinkan Anda untuk tidak hanya mengandalkan Linter, tetapi juga memahami alasan *mengapa* mesin JavaScript menolak struktur tertentu. Ini adalah barisan pertahanan pertama bagi integritas aplikasi Anda.

---

## Referensi Terkait
- [ECMA-262: Early Error Definitions](https://tc39.es/ecma262/#sec-early-error-rules)
- [CH-04: Static Scope Rules](./CH-04_StaticScopeRules/README.md)

---
> [!IMPORTANT]  
> **Key Takeaway:** Early Errors menjamin bahwa kode yang mulai dieksekusi adalah kode yang sudah "Lulus Sertifikasi" secara struktural dan semantik statis.
