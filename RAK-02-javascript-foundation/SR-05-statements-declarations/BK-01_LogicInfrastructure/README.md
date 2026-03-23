# BK-01: Logic Infrastructure (Command Center)

> **"Sebuah Hub membutuhkan kecerdasan untuk merespon kondisi Grid. BK-01 membangun sirkuit logika yang menentukan kapan energi harus dialirkan, berapa kali harus diulang, dan bagaimana menangani lonjakan beban yang tidak terduga."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- **Technical Reference**: [ECMA-262 - ECMAScript Language: Statements and Declarations](https://tc39.es/ecma262/#sec-ecmascript-language-statements-and-declarations)

## 1. Sirkuit Kendali

### A. Conditional Flow (Decision Gates)
Menentukan jalur eksekusi berdasarkan evaluasi logika.
- `if...else`: Gerbang biner sederhana.
- `switch`: Hub distribusi dengan banyak jalur pilihan.

### B. Iteration Engines
Mengulang tugas operasional hingga kondisi terpenuhi.
- `for`: Pengulangan dengan jumlah putaran yang terukur.
- `while`: Pengulangan yang terus berjalan selama sinyal masih aktif.

### C. Safety Protocols (The Fuses)
Melindungi Hub dari kegagalan fatal.
- `try...catch...finally`: Isolasi kesalahan agar tidak mematikan seluruh sistem Grid.

---

## Hands-on: Lab Alur Logika
Uji sirkuit keputusan dan mesin pengulangan di `examples/control_flow_lab.js`.
