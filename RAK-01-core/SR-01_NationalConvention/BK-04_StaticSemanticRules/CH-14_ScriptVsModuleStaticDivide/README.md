# CH-14: Script vs Module: The Static Divide

Meskipun keduanya adalah JavaScript, mesin memperlakukan mereka dengan aturan statis yang berbeda secara fundamental.

## Topik Utama
- **StrictMode by Default**: Mengapa Module selalu dalam Strict Mode.
- **Top-level Await**: Perbedaan mekanisme analisis statis untuk `await` di luar fungsi.
- **Early Errors Differences**: Daftar aturan yang hanya berlaku di Module atau Script.

---
> [!IMPORTANT]
> Mengetahui perbedaan ini sangat krusial saat bermigrasi dari legacy script ke modern modules.
