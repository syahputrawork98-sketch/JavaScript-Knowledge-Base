# CH-12: Class Static Semantics

Membedah aturan "Blueprint" Class. Di sinilah spesifikasi memastikan properti dan method Anda aman sebelum instansiasi.

## Topik Utama
- **ClassElement Evaluation**: Bagaimana field dan private methods didaftarkan.
- **Constructor Restrictions**: Aturan pemanggilan `super()` dan batasan constructor.
- **Static vs Instance**: Validasi statis untuk elemen statis.

---
> [!IMPORTANT]
> **Architect Insight:** Mesin JS melakukan analisis mendalam pada struktur Class untuk mengoptimalkan alokasi memori melalui *Hidden Classes*.
