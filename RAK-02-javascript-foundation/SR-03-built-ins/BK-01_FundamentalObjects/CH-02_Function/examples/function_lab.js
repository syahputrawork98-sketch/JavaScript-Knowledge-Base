/**
 * LAB: The First-Class Engine (Functions)
 * --------------------------------------
 * Dalam lab ini, kita akan melihat bagaimana fungsi di JavaScript
 * bukan hanya sekadar blok kode, tapi juga 'data' yang bisa dipindahkan.
 */

// 1. Deklarasi vs Ekspresi
function startEngine() {
    return "Engine Started (Declaration)";
}

const stopEngine = function() {
    return "Engine Stopped (Expression)";
};

console.log("--- Tahap 1: Pemanggilan Dasar ---");
console.log(startEngine());
console.log(stopEngine());

// 2. Arrow Functions (Sirkuit Minimalis)
const calculatePower = (voltage, current) => voltage * current;

console.log("\n--- Tahap 2: Arrow Function ---");
console.log(`Power Output: ${calculatePower(220, 5)} Watts`);

// 3. Fungsi sebagai 'Warga Kelas Satu' (First-Class)
// Fungsi bisa dikirim sebagai argumen ke fungsi lain
function runDiagnostic(systemName, processor) {
    console.log(`\n--- Diagnostik Sistem: ${systemName} ---`);
    const result = processor(); // Menjalankan fungsi yang dikirim
    console.log(`Hasil: ${result}`);
}

runDiagnostic("Core-Alpha", () => {
    return "All systems stable. No leaks detected.";
});

// 4. IIFE (Immediately Invoked Function Expression)
// Berguna untuk menjalankan inisialisasi Hub secara instan tanpa mengotori scope global
(function(hubID) {
    const internalSecret = "SHH-123";
    console.log(`\n--- IIFE Hub ${hubID} Terinisialisasi ---`);
    console.log(`Menyiapkan sirkuit internal...`);
})("BETA-Z");

// 5. Penutupan (Closure) Sederhana
// Fungsi yang 'mengingat' lingkungannya
function createPowerIncreaser(increment) {
    let currentPower = 0;
    return function() {
        currentPower += increment;
        return `Power Level: ${currentPower}`;
    };
}

const boostAlpha = createPowerIncreaser(50);
console.log("\n--- Tahap 5: Power Boost ---");
console.log(boostAlpha()); // 50
console.log(boostAlpha()); // 100
