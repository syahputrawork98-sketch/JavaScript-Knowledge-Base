# SR-02: Data Management (Storage Hub)

> **"SR-02 adalah pusat logistik Hub Energi. Di sini kita mengelola Ban Berjalan (Array) dan Gudang Berlabel (Map/Set) untuk mendistribusikan energi data secara efisien."**

Tanpa manajemen data yang baik, energi di Hub Anda akan berantakan. Sub-Rak ini fokus pada pengumpulan dan pengorganisasian data.

## Daftar Buku (Inventory)

### [BK-03: The Conveyor System](./BK-03_ConveyorSystem/README.md)
Sistem antrean data linear yang cepat dan terukur.
- `Array`: Ban berjalan standar.
- `TypedArray`: Ban berjalan khusus untuk data numerik biner yang dioptimalkan.

### [BK-04: Labeled Storage](./BK-04_LabeledStorage/README.md)
Sistem penyimpanan berdasarkan identitas dan keunikan.
- `Map`: Gudang dengan label kustom yang fleksibel.
- `Set`: Filter otomatis untuk memastikan tidak ada energi duplikat.
- `WeakMap` & `WeakSet`: Penyimpanan sementara yang otomatis dibersihkan jika tidak lagi dibutuhkan.

---
*Back to: [RAK-03-built-in-objects](../README.md)*
