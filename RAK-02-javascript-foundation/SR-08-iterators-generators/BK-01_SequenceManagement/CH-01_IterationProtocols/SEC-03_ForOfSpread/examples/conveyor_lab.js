/**
 * LAB: for...of & Spread (The Content Harvesters)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Pemanenan Otomatis (for...of)
const fleet = ["SENTINEL-1", "AEGIS-X", "TITAN-02"];

console.log("--- STARTING HARVEST ---");
for (const unit of fleet) {
    console.log(`Processing unit: ${unit}`);
}

console.log("---");

// 2. Lanjutan: for...of vs for...in
const drone = { id: "D-99", battery: "90%", status: "FLIGHT" };

console.log("for...in (Harvesting KEYS):");
for (const key in drone) {
    console.log(`- Property: ${key}`);
}

// console.log("for...of (Harvesting VALUES):");
// for (const val of drone) { ... } // ERROR! Objek literal bukan iterable

console.log("---");

// 3. Arsitektur: The Spread Expander
const coreModules = ["POWER", "COOLING"];
const expansionModules = ["RECON", "RADAR"];

// Menggabungkan aliran data menjadi satu array baru
const fullConfig = [...coreModules, "BRIDGE", ...expansionModules];
console.log("Full Config Grid:", fullConfig);

// String ke Array (Setiap karakter adalah satu unit data)
const idString = "XYZ";
const idUnits = [...idString];
console.log("ID Stream Decomposed:", idUnits);

console.log("---");

// 4. Advanced: Harvesting Maps & Sets
const accessNodes = new Set(["NODE-A", "NODE-B", "NODE-A"]); // "NODE-A" muncul sekali

console.log("Harvesting Unique Nodes:");
for (const node of accessNodes) {
    console.log(`- Unique Access: ${node}`);
}

const configMap = new Map([
    ["ver", "1.5"],
    ["sec", "high"]
]);

console.log("Destructured Map Harvest:");
for (const [key, val] of configMap) {
    console.log(`Config [${key}] is set to [${val}]`);
}
