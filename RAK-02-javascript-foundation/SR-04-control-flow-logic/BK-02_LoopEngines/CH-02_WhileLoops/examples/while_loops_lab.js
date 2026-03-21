/**
 * LAB: The Continuous Circuit (While Loop Engines)
 * -----------------------------------------------
 * Dalam lab ini, kita akan menjalankan sirkuit yang terus berputar 
 * selama kondisi terpenuhi. Pahami kapan menggunakan While vs Do-While.
 */

// --- BAGIAN 1: WHILE DASAR (Check-First) ---
console.log("--- Bagian 1: Pengisian Energi (While) ---");

let power = 0;
const targetPower = 100;

while (power < targetPower) {
    power += 20;
    console.log(`> Menambahkan Energi... Kapasitas: ${power}%`);
}
console.log("Sirkuit Penuh! Menghentikan pengisian.");

// --- BAGIAN 2: DO...WHILE (Execute-First) ---
console.log("\n--- Bagian 2: Inisialisasi Paksa (Do-While) ---");

let attempts = 0;
// Meskipun kondisi langsung false (0 < 0), do...while akan jalan sekali.
do {
    attempts++;
    console.log(`> Mencoba Inisialisasi Hub (Attempt #${attempts})...`);
} while (attempts < 0); 

console.log("Proses Inisialisasi Selesai (Setidaknya 1x jalan).");

// --- BAGIAN 3: SENTINEL VALUE (Sinyal Penghenti) ---
console.log("\n--- Bagian 3: Mencari Sinyal Berhenti ---");

const signals = ["DATA", "DATA", "DATA", "STOP", "DATA"];
let i = 0;

while (signals[i] !== "STOP") {
    console.log(`> Memproses: ${signals[i]}`);
    i++;
}
console.log("Sinyal 'STOP' Diterima. Memutuskan Sirkuit.");

// --- BAGIAN 4: RANDOM CONDITION (Indefinite) ---
console.log("\n--- Bagian 4: Simulasi Sensor Fluktuatif ---");

let stable = true;
let readingCount = 0;

while (stable) {
    readingCount++;
    const heat = Math.floor(Math.random() * 100);
    console.log(`Reading #${readingCount}: ${heat}°C`);
    
    if (heat > 90) {
        console.log("!!! OVERHEAT DETECTED !!!");
        stable = false; // Memutus sirkuit
    }
}

// --- BAGIAN 5: WARNING (Infinite Loop) ---
/**
 * PERINGATAN ARSITEK: 
 * Jangan pernah lupa memperbarui variabel kondisi (misal: power++) di dalam loop.
 * Jika tidak, sirkuit akan berputar selamanya dan menghanguskan Hub (Crash)!
 */
