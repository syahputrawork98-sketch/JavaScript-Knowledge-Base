# CH-02: Shared Memory & Atomics (Multi-thread Safety)

> **"Saat Hub Energi Anda tumbuh besar, satu prosesor tidak lagi cukup. Anda butuh banyak prosesor (Web Workers) yang bekerja bersamaan. `SharedArrayBuffer` adalah area kerja yang digunakan bersama, dan `Atomics` adalah protokol keamanan yang memastikan prosesor-prosesor tersebut tidak saling berebut data."**

Bab tingkat lanjut ini membahas bagaimana JavaScript menangani konkurensi pada level memori.

## 1. Mental Model: "Multi-thread Safety"

Bayangkan sebuah meja kerja (Memori) yang dikelilingi oleh beberapa robot (Web Workers). Jika dua robot mencoba menulis di titik yang sama secara bersamaan, meja tersebut bisa rusak (*Race Condition*). `Atomics` adalah set instruksi khusus yang menjamin hanya satu robot yang bisa mengakses titik tertentu pada satu waktu secara aman.

---

## 2. SharedArrayBuffer: Meja Kerja Bersama

`SharedArrayBuffer` mirip dengan `ArrayBuffer`, namun ia dirancang untuk bisa diakses oleh *Main Thread* dan *Web Workers* secara simultan.

```javascript
// Membuat meja kerja bersama berukuran 1024 byte
const sharedTable = new SharedArrayBuffer(1024);
```

---

## 3. Atomics: Protokol Keamanan

Objek `Atomics` menyediakan metode statis untuk melakukan operasi pada `SharedArrayBuffer` yang tidak bisa diinterupsi (*Atomic Operations*).

### Operasi Utama:
- **`Atomics.add(view, index, value)`**: Menambahkan nilai ke memori tanpa risiko tertimpa proses lain.
- **`Atomics.wait()` / `Atomics.notify()`**: Cara robot untuk "tidur" menunggu sinyal dari robot lain, atau membangunkan robot lain saat pekerjaan selesai.

```javascript
const i32 = new Int32Array(sharedTable);

// Menambahkan 5 ke i32[0] secara aman
Atomics.add(i32, 0, 5);
```

---

## Arsitek Mindset: Kapan Menggunakan Konkurensi?

Sebagai arsitek, hanya gunakan `SharedMemory` dan `Atomics` untuk aplikasi dengan beban komputasi super berat (seperti game 3D yang sangat kompleks, simulasi fisika, atau enkripsi video di sisi klien). Untuk aplikasi web standar, komunikasi antar-thread melalui `postMessage()` jauh lebih aman dan mudah dikelola tanpa risiko kerusakan data.

---

## Hands-on: Lab Keamanan Multi-thread
Buka file `examples/atomics_safety_lab.js` untuk melihat simulasi bagaimana `Atomics` mencegah tabrakan data saat dua Worker mencoba mengubah nilai yang sama secara bersamaan.

---
*Status: [status.md](../../../status.md)*
