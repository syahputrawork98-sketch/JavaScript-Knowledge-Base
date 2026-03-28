# BK-01: Child Process (Spawning & IPC)

![Book Header](https://img.shields.io/badge/BK--01-CHILD_PROCESS-purple?style=for-the-badge&logo=node.js)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Di Luar Sangkar: Bagaimana Node.js Mendelegasikan Tugas ke Proses Eksternal Melalui Mekanisme Fork, Spawn, dan Komunikasi IPC yang Sangat Terisolasi."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Modul built-in Node.js (`child_process`) yang memungkinkan eksekusi perintah sistem operasi atau skrip JavaScript lain sebagai proses terpisah. Setiap child process memiliki memori, resource, dan V8 instance sendiri, serta berkomunikasi dengan proses induk melalui saluran **Inter-Process Communication (IPC)**.
- **Analogi**: Bayangkan **Seorang Manajer (Parent Process)** yang memberikan tugas berat kepada **Asisten di Kantor Berbeda (Child Process)**. Sang Manajer tidak melihat apa yang dilakukan asistennya secara langsung; mereka hanya bertukar pesan melalui **Telepon (IPC)**. Jika asisten tersebut melakukan kesalahan atau "marah" (Crash), kantor Manajer tetap aman dan tidak terpengaruh, namun Manajer bisa mendeteksi kejadian tersebut melalui sambungan teleponnya.

---

## 2. Visual Logic: The IPC Communication Bridge

Alur pengiriman pesan antar proses yang terisolasi:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#800080'}}}%%
graph LR
    Parent["Parent Process (Node.js)"] -->|spawn/fork| Child["Child Process"]
    
    subgraph "IPC Channel"
        Parent -->|send(msg)| Pipe["Message Pipe"]
        Pipe -->|on('message')| Child
        Child -->|send(res)| Pipe
        Pipe -->|on('message')| Parent
    end

    style Parent fill:#f7df1e,stroke:#333
    style Child fill:#fff,stroke:#800080
```

---

## 🏛️ 3. Strategic Chapters (Levels 5)

Manajemen proses eksternal:

1.  **[CH-01: Spawn vs Exec vs Fork](./CH-01_ExecutionModes/)**
    *Memahami perbedaan buffer limit pada Exec dan streaming capability pada Spawn.*
2.  **[CH-02: IPC and Signaling](./CH-02_IPCChannels/)**
    *Mengatur pengiriman objek JSON antar proses dan menangani sinyal sistem (SIGTERM/SIGKILL).*

---

## 🧠 4. Under-the-hood: The Forking overhead
Dalam Node.js, `child_process.fork()` secara teknis adalah variasi dari `spawn()` yang secara otomatis membuka jalur komunikasi IPC dan menjalankan instance baru dari mesin V8. Namun, perlu diingat bahwa setiap proses baru membutuhkan memori tambahan (sekitar 30MB+ untuk V8 dasar). Oleh karena itu, *forking* sebaiknya digunakan untuk tugas yang benar-benar membutuhkan isolasi total atau komputasi CPU-bound, bukan untuk menangani ribuan task ringan karena overhead memorinya yang besar.

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan Node.js Child Process API.
- [x] **Visual Logic**: Mermaid diagram IPC Communication Bridge.
- [x] **Mental Model**: Analogi "Manajer & Asisten Kantor Berbeda".

---
*Buku Status: [x] Complete | [status.md](../../status.md) | Kembali ke [SR-04](../README.md)*
