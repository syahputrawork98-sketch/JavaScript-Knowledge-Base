/**
 * LAB: The Warehouse Box (CommonJS Modules)
 * ----------------------------------------
 * Dalam lab ini, kita akan merakit sistem modular menggunakan CommonJS (Node.js).
 * Pelajari cara mengirim dan menerima kargo antar sirkuit Hub.
 */

// --- BAGIAN 1: MENGEKSPOR KARGO ---
// Bayangkan file ini 'energy_core.js' (Simulasi dalam satu file untuk demo lab)
const hubModule = {
    exports: {}
};

(function(exports, module) {
    // Logika di dalam kotak gudang
    const internalSecret = "SHH-123";
    
    module.exports = {
        coreName: "Alpha-1",
        status: "Active",
        getSecret() { return internalSecret; }
    };
})(hubModule.exports, hubModule);

// --- BAGIAN 2: MENGAMBIL KARGO (require) ---
console.log("--- Bagian 2: Pengambilan Kargo ---");

const core = hubModule.exports;
console.log(`Berhasil mengambil modul: ${core.coreName}`);
console.log(`Status Modul: ${core.status}`);

// --- BAGIAN 3: CACHING PROOF ---
console.log("\n--- Bagian 3: Bukti Caching ---");

/**
 * CommonJS mengeksekusi modul sekali dan menyimpan hasilnya di cache.
 * Jika kita memanggil 'require' lagi, kita dapat objek yang SAMA.
 */
const coreSecondCall = hubModule.exports;
coreSecondCall.status = "Maintenance";

console.log(`Status Panggilan Pertama: ${core.status}`); // Ikut berubah jadi Maintenance
console.log("Kesimpulan: Modul adalah Singleton (Cache)!");

// --- BAGIAN 4: REAL NODE.JS EXAMPLE (Komentar) ---
/*
  // Di file Real Node.js:
  // exports.js -> module.exports = { power: 100 };
  // main.js    -> const { power } = require('./exports');
*/

console.log("\n--- Bagian 4: Arsitek Mindset ---");
console.log("CommonJS bersifat SINKRON. Kurir akan menunggu sampai kotak dibuka");
console.log("sebelum melanjutkan tugas berikutnya. Cocok untuk Server-side!");
