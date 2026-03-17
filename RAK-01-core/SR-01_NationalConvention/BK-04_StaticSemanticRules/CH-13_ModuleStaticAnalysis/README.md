# CH-13: Module Static Analysis

Bagaimana JavaScript menangani ketergantungan antar file secara aman dan efisien?

## Topik Utama
- **Import/Export Validation**: Memastikan semua yang di-import memang ada di file sumber.
- **Module Cycles**: Bagaimana spesifikasi mendeteksi dan menangani siklus import melingkar secara statis.
- **Export Default Rules**: Aturan ketat "Hanya Ada Satu" untuk export default.

---
> [!NOTE]
> Modul membawa tingkat keamanan statis yang lebih tinggi dibandingkan Script biasa.
