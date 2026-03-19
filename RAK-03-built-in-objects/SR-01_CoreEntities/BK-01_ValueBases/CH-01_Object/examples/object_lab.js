/**
 * LAB: Object Diagnostic & Manipulation
 * Mental Model: "The Ultimate Base Toolbox"
 */

// 1. Konstruksi Komponen Hub
const coreEngine = {
    id: "ENGINE-V1",
    status: "READY",
    efficiency: 0.85
};

// 2. Inspeksi Kabel (Keys & Values)
console.log("--- Inspeksi Komponen ---");
console.log("Kabel yang terdeteksi:", Object.keys(coreEngine));
console.log("Nilai tegangan:", Object.values(coreEngine));

// 3. Modifikasi Konfigurasi (Assign)
const upgradeKit = {
    efficiency: 0.95,
    turbo: true
};

Object.assign(coreEngine, upgradeKit);
console.log("\n--- Setelah Upgrade ---");
console.log(coreEngine);

// 4. Kunci Keamanan (Freeze)
console.log("\n--- Mengaktifkan Kunci Keamanan ---");
Object.freeze(coreEngine);

coreEngine.status = "OFFLINE"; // Tidak akan berpengaruh
console.log("Status mesin setelah percobaan sabotase:", coreEngine.status);

// 5. Cek Integritas
console.log("Apakah mesin terkunci?", Object.isFrozen(coreEngine));
