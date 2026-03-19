# Buku 02: Control Abstraction

Buku ini membedah mekanisme "Abstraksi Kontrol" di JavaScript. Kita akan mempelajari bagaimana `Promise` mengelola asinkronitas tingkat lanjut dan bagaimana `Proxy` serta `Reflect` membuka gerbang menuju *Metaprogramming* (Clause 26 - 27 pada ECMA-262).

## Mengapa Mempelajari Ini?
JavaScript modern sangat bergantung pada asinkronitas. Memahami `Promise` di tingkat internal (State dan Jobs) membantu Anda mendesain aplikasi yang responsif. Selain itu, `Proxy` memberikan kekuatan untuk merubah perilaku dasar bahasa, memungkinkan pembuatan *framework*, *binding* data otomatis, dan sistem validasi yang sangat kuat.

## Daftar Bab

1. **[Bab 01: Mekanika Promise (Logika Asinkron)](./CH-01_PromiseMechanics/)**
2. **[Bab 02: Proxy & Reflect (Pintu Penjaga)](./CH-02_ProxyAndReflect/)**

## Prasyarat Pembaca
- **[RAK-01-core / SR-09_FunctionsAndClasses / Buku 01: Function Mechanics](../../SR-09_FunctionsAndClasses/BK-01_FunctionMechanics/)**: Memahami fungsi dan callback sangat krusial sebelum membedah Promise.
