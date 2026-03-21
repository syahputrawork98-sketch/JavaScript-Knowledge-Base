# BK-01: Logic Infrastructure (Command Center)

> **"Sebuah Hub membutuhkan kecerdasan untuk merespon kondisi Grid. BK-01 membangun sirkuit logika yang menentukan kapan energi harus dialirkan, berapa kali harus diulang, dan bagaimana menangani lonjakan beban yang tidak terduga."**

## 1. Sirkuit Kendali

### A. Conditional Flow (Decision Gates)
Menentukan jalur eksekusi berdasarkan evaluasi logika.
- `if...else`: Gerbang biner sederhana.
- `switch`: Hub distribusi dengan banyak jalur pilihan.

### B. Iteration Engines (The Generators)
Mengulang tugas operasional hingga kondisi terpenuhi.
- `for`: Pengulangan dengan jumlah putaran yang terukur.
- `while`: Pengulangan yang terus berjalan selama sinyal masih aktif.

### C. Safety Protocols (The Fuses)
Melindungi Hub dari kegagalan fatal.
- `try...catch...finally`: Isolasi kesalahan agar tidak mematikan seluruh sistem Grid.

---

## 2. Visualisasi: Control Flow

![Logic Gates](../../SR-04-expressions-operators/BK-01_EnergyFlow/assets/logic_gates_premium.svg)

---

## Hands-on: Lab Alur Logika
Uji sirkuit keputusan dan mesin pengulangan di `examples/control_flow_lab.js`.
