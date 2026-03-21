/**
 * LAB: The Optical Network (ES Modules)
 * -------------------------------------
 * Dalam lab ini, kita akan merakit sistem modular masa depan menggunakan ES Modules.
 * Pelajari bagaimana ESM bekerja secara asinkron dan statis.
 */

// --- BAGIAN 1: MENGEKSPOR SINYAL (Named & Default) ---
// Bayangkan file ini 'optical_tools.js' (Simulasi dalam satu file untuk demo lab)
const opticalTools = {
    drill: () => "Drilling into the core...",
    scanner: () => "Scanning for leaks...",
    mainSystem: () => "Main ESM Hub Online"
};

// --- BAGIAN 2: MENGIMPOR SINYAL ---
console.log("--- Bagian 2: Penerimaan Sinyal Optik ---");

// Named Import simulation
const { drill, scanner } = opticalTools;
console.log(`Alat 1: ${drill()}`);

// Default Import simulation
const HUB = opticalTools.mainSystem;
console.log(`Status: ${HUB()}`);

// --- BAGIAN 3: ASYNCHRONOUS LOADING ---
console.log("\n--- Bagian 3: Muatan Asinkron ---");

/**
 * Di ESM asli, kita bisa menggunakan 'Top-level Await'.
 * Ini memungkinkan modul menunggu data (sinyal) dari Hub lain
 * sebelum mengizinkan sirkuit utama berjalan.
 */
async function simulateAsyncLoad() {
    console.log("> Sedang menegosiasikan paket optik...");
    const data = await Promise.resolve("Paket Kripto-99 Diterima.");
    console.log(`Hasil: ${data}`);
}
simulateAsyncLoad();

// --- BAGIAN 4: TREE SHAKING (Konsep) ---
console.log("\n--- Bagian 4: Arsitek Mindset (Tree Shaking) ---");
console.log("Karena ESM bersifat STATIS, alat pembangun (Bundler) bisa");
console.log("membuang fungsi 'scanner' jika tidak ada file lain yang mengimpornya.");
console.log("Ini membuat 'kargo' yang dikirim ke browser menjadi jauh lebih ringan!");

// --- TIPS NODE.JS ---
/*
  Untuk menjalankan ESM di Node.js:
  1. Gunakan ekstensi .mjs
  2. ATAU tambahkan "type": "module" di package.json
*/
