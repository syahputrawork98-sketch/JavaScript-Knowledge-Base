/**
 * LAB: The Text Surgery Kit (String Methods)
 * -----------------------------------------
 * Dalam lab ini, kita akan membedah dan memodifikasi pesan dari Hub
 * menggunakan berbagai metode bawaan JavaScript.
 */

const rawSignal = "   ALERT: Reactor-Alpha Temperature High!   ";

// --- BAGIAN 1: PEMBERSIHAN (Trimming) ---
console.log("--- Bagian 1: Pembersihan Sinyal ---");
const cleanedSignal = rawSignal.trim();
console.log(`Original: "${rawSignal}"`);
console.log(`Cleaned : "${cleanedSignal}"`);

// --- BAGIAN 2: PENCARIAN (Searching) ---
console.log("\n--- Bagian 2: Pencarian Kata Kunci ---");
console.log(`Apakah ada 'Reactor'?`, cleanedSignal.includes("Reactor"));       // true
console.log(`Dimulai dengan 'ALERT'?`, cleanedSignal.startsWith("ALERT"));   // true
console.log(`Indeks 'Alpha':`, cleanedSignal.indexOf("Alpha"));               // 15

// --- BAGIAN 3: PEMBEDAHAAN (Slicing) ---
console.log("\n--- Bagian 3: Memotong Sinyal ---");
const reactorName = cleanedSignal.slice(7, 20); // Mengambil "Reactor-Alpha"
console.log(`Nama Reaktor: ${reactorName}`);

// --- BAGIAN 4: TRANSFORMASI (Modification) ---
console.log("\n--- Bagian 4: Transformasi Teks ---");
const urgentLock = cleanedSignal
    .replace("ALERT", "CRITICAL")
    .toUpperCase();

console.log(`Pesan Urgent: ${urgentLock}`);

// --- BAGIAN 5: FORMATTING (Padding) ---
console.log("\n--- Bagian 5: Labelling & Padding ---");
const hubID = "7";
const paddedID = hubID.padStart(3, "0"); // "007"
console.log(`Hub Serial: HUB-${paddedID}`);

// --- BAGIAN 6: EKSTRAKSI DATA (Splitting) ---
console.log("\n--- Bagian 6: Ekstraksi Array ---");
const dataCSV = "Sensor-A,25C,Active,Stable";
const dataArray = dataCSV.split(",");
console.log("Data Terurai:", dataArray);
console.log(`Status Saat Ini: ${dataArray[2]}`);
