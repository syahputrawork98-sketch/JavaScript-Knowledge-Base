/**
 * LAB: The Orbit (For Loop Engines)
 * ---------------------------------
 * Dalam lab ini, kita akan menjalankan pengulangan terukur di Hub.
 * Pelajari perbedaan antara Orbit Tradisional, Orbit Nilai, dan Orbit Properti.
 */

const sectors = ["North", "South", "East", "West"];

// --- BAGIAN 1: ORBIT TRADISIONAL (Classic For) ---
console.log("--- Bagian 1: Classic For Loop ---");

for (let i = 0; i < sectors.length; i++) {
    console.log(`> Memindai Sektor ${i}: ${sectors[i]}`);
}

// --- BAGIAN 2: ORBIT NILAI (For...of) ---
console.log("\n--- Bagian 2: Modern For...of (Nilai) ---");

// Cara paling bersih untuk iterasi array tanpa peduli index
for (const sector of sectors) {
    console.log(`> Patroli di Sektor: ${sector}`);
}

// --- BAGIAN 3: ORBIT PROPERTI (For...in) ---
console.log("\n--- Bagian 3: For...in (Objek) ---");

const hubStats = { temp: 25, load: "Medium", health: "Good" };

for (const key in hubStats) {
    console.log(`> Hub Stat [${key}]: ${hubStats[key]}`);
}

// --- BAGIAN 4: KONTROL ORBIT (Break & Continue) ---
console.log("\n--- Bagian 4: Break & Continue ---");

console.log("Memulai Pemindaian Keamanan...");
for (let id = 1; id <= 10; id++) {
    // Lewati ID 5 (Skip Continue)
    if (id === 5) {
        console.log(`[PASS] ID ${id} adalah Teknisi Senior. Lewati.`);
        continue; 
    }
    
    // Berhenti jika ketemu ID 8 (Abort Break)
    if (id === 8) {
        console.log(`[STOP] ID ${id} TERDETEKSI PENYUSUP! Matikan Sirkuit.`);
        break;
    }
    
    console.log(`Scanning ID ${id}... Clear.`);
}

// --- BAGIAN 5: NESTED ORBITS ---
console.log("\n--- Bagian 5: Nested Loops (Grid) ---");
for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 2; col++) {
        console.log(`> Merakit Grid [R:${row}, C:${col}]`);
    }
}
