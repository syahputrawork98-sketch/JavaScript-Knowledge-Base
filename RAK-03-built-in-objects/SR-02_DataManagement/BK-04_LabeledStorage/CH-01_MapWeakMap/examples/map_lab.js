/**
 * LAB: Warehouse Logistics
 * Mental Model: "Advanced Labels (Map & WeakMap)"
 */

// 1. Sistem Gudang (Map)
const warehouse = new Map();

const sensorA = { id: "SNS-01" };
const sensorB = { id: "SNS-02" };

// Menempelkan data (Label) pada objek fisik (Sensor)
warehouse.set(sensorA, { status: "Active", voltage: 220 });
warehouse.set(sensorB, { status: "Maintenance", voltage: 0 });

console.log("--- Inventaris Gudang ---");
console.log("Data Sensor A:", warehouse.get(sensorA));
console.log("Total Sensor Terdaftar:", warehouse.size);

// 2. Iterasi Logistik
console.log("\nDaftar Sensor & Status:");
for (let [sensor, data] of warehouse) {
    console.log(`Sensor ${sensor.id} -> ${data.status}`);
}

// 3. Efisiensi Memori (WeakMap)
// Digunakan jika kita ingin label otomatis terbuang saat objek dihapus
let tempModule = { type: "TEMP" };
const weakLog = new WeakMap();

weakLog.set(tempModule, "Log Rahasia");
console.log("\nData WeakMap sebelum modul dihapus:", weakLog.get(tempModule));

tempModule = null; // Menghilangkan referensi, WeakMap akan membersihkan diri nantinya
// Garbage collector akan menghapus entri di weakLog secara otomatis
