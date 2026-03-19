/**
 * LAB: Uniqueness Filter
 * Mental Model: "Uniqueness Filter (Set & WeakSet)"
 */

// 1. Membersihkan Sinyal Duplikat (Set)
const dirtySignalLog = [101, 102, 101, 103, 102, 104, 105, 101];

// Gunakan Set untuk menyaring hanya nilai unik secara instan
const uniqueSignals = new Set(dirtySignalLog);

console.log("Original Log Size:", dirtySignalLog.length);
console.log("Unique Signals Size:", uniqueSignals.size);
console.log("Daftar Sinyal Murni:", [...uniqueSignals]);

// 2. Operasi Filter Cepat
uniqueSignals.add(106);
console.log("\nSinyal 101 ada di filter?", uniqueSignals.has(101));

// 3. Pengelompokan Privat (WeakSet)
const machineA = { name: "Turbine-1" };
const machineB = { name: "Turbine-2" };

const activeMaintenance = new WeakSet();
activeMaintenance.add(machineA);

console.log("\n--- Cek Status Pemeliharaan ---");
console.log("Apakah Turbine-1 dipelihara?", activeMaintenance.has(machineA));
console.log("Apakah Turbine-2 dipelihara?", activeMaintenance.has(machineB));

// Jika machineA dihancurkan, ia otomatis keluar dari WeakSet
