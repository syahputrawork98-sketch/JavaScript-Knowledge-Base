/**
 * LAB: Class Constructors (The Assembly Line)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Perakitan Berparameter
class EnergyModule {
    constructor(id, type = "SOLAR", capacity = 1000) {
        // 'this' merujuk pada unit yang sedang dirakit
        this.id = id;
        this.type = type;
        this.capacity = capacity;
        this.createdAt = new Date().toLocaleTimeString();
        this.status = "INITIALIZING";
    }
}

const mod1 = new EnergyModule("MOD-01"); // Menggunakan defaults
const mod2 = new EnergyModule("MOD-02", "WIND", 5000);

console.log("Module 1:", mod1);
console.log("Module 2:", mod2);

console.log("---");

// 2. Lanjutan: Validasi di Lini Perakitan
// Memastikan unit tidak dirakit dengan data ilegal.
class SmartGrid {
    constructor(gridId, maxLoad) {
        if (!gridId) throw new Error("Assembly Failed: gridId is required!");
        if (maxLoad < 0) {
            console.warn(`Warning: Negative load [${maxLoad}] detected. Resetting to 0.`);
            maxLoad = 0;
        }
        
        this.gridId = gridId;
        this.maxLoad = maxLoad;
    }
}

try {
    const brokenGrid = new SmartGrid("", 100);
} catch (e) {
    console.log("Caught Constructor Error:", e.message);
}

const secureGrid = new SmartGrid("SG-X", -50);
console.log("Secure Grid Max Load:", secureGrid.maxLoad);

console.log("---");

// 3. Arsitektur: Destructuring in Constructor
// Pola populer untuk menangani banyak opsi konfigurasi.
class AdvancedPump {
    constructor({ flowRate = 10, pressure = 5, lubricant = "SYNTHETIC" } = {}) {
        this.flowRate = flowRate;
        this.pressure = pressure;
        this.lubricant = lubricant;
    }
}

const pumpA = new AdvancedPump({ flowRate: 50 });
console.log("Pump A Config:", pumpA);
