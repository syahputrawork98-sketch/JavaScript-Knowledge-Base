/**
 * LAB: The Logic Gate (If-Else & Truthiness)
 * -----------------------------------------
 * Dalam lab ini, kita akan menguji berbagai kondisi sirkuit Hub.
 * Pelajari cara membuat keputusan yang efisien menggunakan gerbang logika.
 */

// --- BAGIAN 1: GERBANG DASAR ---
console.log("--- Bagian 1: Keputusan Dasar ---");

const energyLevel = 75;

if (energyLevel > 90) {
    console.log("Status: CRITICAL (Overload Risk)");
} else if (energyLevel > 50) {
    console.log("Status: STABLE (Normal Operation)");
} else {
    console.log("Status: LOW (Power Saving Mode)");
}

// --- BAGIAN 2: TRUTHY & FALSY ---
console.log("\n--- Bagian 2: Deteksi Truthy/Falsy ---");

let activeUser = ""; // Falsy
if (!activeUser) {
    console.log("Peringatan: Tidak ada user aktif terdeteksi!");
}

// --- BAGIAN 3: TERNARY OPERATOR (Sirkuit Singkat) ---
console.log("\n--- Bagian 3: Ternary Operator ---");

const isEmergency = true;
const alarmStatus = isEmergency ? "ON 🚨" : "OFF ✅";
console.log(`Status Alarm: ${alarmStatus}`);

// --- BAGIAN 4: SHORT-CIRCUIT (Default Values) ---
console.log("\n--- Bagian 4: Short-Circuit Logic ---");

let customTheme; 
const theme = customTheme || "Dark-Hub"; // Jika customTheme falsy, gunakan "Dark-Hub"
console.log(`Tema Terpilih: ${theme}`);

// --- BAGIAN 5: GUARD CLAUSE (Architect Mindset) ---
console.log("\n--- Bagian 5: Teknik Guard Clause ---");

/**
 * Alih-alih membuat IF bersarang yang dalam, 
 * gunakan Guard Clause untuk memutus sirkuit lebih awal.
 */
function processEnergy(amount) {
    // Guard Clause 1
    if (amount <= 0) return "Error: Jumlah tidak valid.";
    
    // Guard Clause 2
    if (amount > 1000) return "Error: Kapasitas tidak cukup.";

    // Jalur utama jadi bersih (Happy Path)
    return `Berhasil memproses ${amount} unit energi.`;
}

console.log(processEnergy(-5));
console.log(processEnergy(500));
