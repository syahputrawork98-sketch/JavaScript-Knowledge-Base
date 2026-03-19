/**
 * LAB: Array Conveyor Processing
 * Mental Model: "Standard Conveyor Belt"
 */

// 1. Barang Mentah di Ban Berjalan
const rawEnergyPackets = [
    { id: 101, power: 50, type: "solar" },
    { id: 102, power: 120, type: "wind" },
    { id: 103, power: 30, type: "solar" },
    { id: 104, power: 200, type: "nuclear" },
    { id: 105, power: 80, type: "wind" }
];

// 2. Filter: Robot Quality Control
// Hanya ambil paket dengan power > 40
const activePackets = rawEnergyPackets.filter(p => p.power > 40);
console.log("--- Paket yang Lolos Kontrol (Power > 40) ---");
console.table(activePackets);

// 3. Map: Robot Transformer
// Tambahkan efisiensi 10% ke setiap paket yang lolos
const upgradedPackets = activePackets.map(p => ({
    ...p,
    power: Math.round(p.power * 1.1)
}));
console.log("\n--- Paket Setelah Di-upgrade ---");
console.table(upgradedPackets);

// 4. Reduce: Akumulator Output Total
const totalOutput = upgradedPackets.reduce((sum, p) => sum + p.power, 0);
console.log("\nTotal Output Energi Terkumpul:", totalOutput, "MW");

// 5. Find: Mencari Paket Spesifik
const nuclearPacket = upgradedPackets.find(p => p.type === "nuclear");
console.log("\nDetail Paket Nuklir:", nuclearPacket);
