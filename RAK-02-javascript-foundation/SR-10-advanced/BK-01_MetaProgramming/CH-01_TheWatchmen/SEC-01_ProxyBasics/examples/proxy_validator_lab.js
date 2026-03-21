/**
 * LAB: Proxy Basics (The Watchmen)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Schema Validation (The Gatekeeper)
const energyUnitSchema = {
    id: "string",
    output: "number"
};

const rawUnit = { id: "GEN-01", output: 500 };

const secureUnit = new Proxy(rawUnit, {
    set(target, prop, value) {
        // Cek apakah properti ada di skema
        if (!(prop in energyUnitSchema)) {
            console.error(`[WATCHMAN] Akses Ditolak: Properti '${prop}' ilegal.`);
            return false;
        }
        
        // Validasi tipe data
        if (typeof value !== energyUnitSchema[prop]) {
            console.error(`[WATCHMAN] Kegagalan Tipe: '${prop}' harus berupa ${energyUnitSchema[prop]}.`);
            return false;
        }

        // Jika aman, gunakan Reflect untuk menyimpan nilai asli
        console.log(`[WATCHMAN] Memverifikasi data: ${prop} = ${value}`);
        return Reflect.set(target, prop, value);
    }
});

secureUnit.output = 600;      // OK
secureUnit.output = "HIGH";   // FAIL: Tipe salah
secureUnit.unauthorized = 1;  // FAIL: Properti ilegal

console.log("---");

// 2. Lanjutan: Automated Logging (The Auditor)
const dataVault = { secrets: "TOP_SECRET_CODE", public: "Welcome" };

const auditedVault = new Proxy(dataVault, {
    get(target, prop, receiver) {
        if (prop === "secrets") {
            console.warn(`[AUDITOR] PERINGATAN! Akses ke data SENSITIF terdeteksi pada ${new Date().toISOString()}`);
        }
        return Reflect.get(target, prop, receiver);
    }
});

console.log("Accessing public:", auditedVault.public);
console.log("Accessing private:", auditedVault.secrets);

console.log("---");

// 3. Arsitektur: Default Values (The Stabilizer)
const settings = { theme: "dark" };

const stableSettings = new Proxy(settings, {
    get(target, prop) {
        if (!(prop in target)) {
            console.log(`[STABILIZER] Properti '${prop}' tidak ada. Memberikan nilai fallback.`);
            return "DEFAULT_VALUE";
        }
        return target[prop];
    }
});

console.log("Theme:", stableSettings.theme);
console.log("Volume:", stableSettings.volume); // Fallback triggered

console.log("---");

// 4. Architect Drill: Revocable Proxy (Temporary Access)
const temporaryData = { key: "XYZ-123" };
const { proxy, revoke } = Proxy.revocable(temporaryData, {});

console.log("Temporary Access:", proxy.key);
revoke(); // Memutus koneksi penjaga

try {
    console.log(proxy.key);
} catch (e) {
    console.error("[SYS] Akses Gagal: Proxy telah dicabut statusnya (Revoked).");
}
