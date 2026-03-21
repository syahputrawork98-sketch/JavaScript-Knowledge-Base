/**
 * LAB: Getters & Setters (The Security Gatekeepers)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Validasi & Proteksi State
class FuelRegulator {
    #liters = 0;
    #maxCapacity = 500;

    // Getter untuk akses baca yang aman
    get currentLitres() {
        return `${this.#liters} / ${this.#maxCapacity} L`;
    }

    // Setter untuk gerbang validasi
    set currentLitres(value) {
        if (typeof value !== 'number') {
            console.error("Critical: Input must be a numeric value!");
            return;
        }
        if (value < 0) {
            console.warn("Safety Triggered: Cannot set negative fuel. Resetting to 0.");
            this.#liters = 0;
        } else if (value > this.#maxCapacity) {
            console.warn(`Safety Triggered: Overflow detected! Capping at ${this.#maxCapacity}.`);
            this.#liters = this.#maxCapacity;
        } else {
            this.#liters = value;
        }
    }
}

const tank = new FuelRegulator();
tank.currentLitres = 100;    // Valid
tank.currentLitres = -50;    // Invalid -> Reset ke 0
tank.currentLitres = 1000;   // Overflow -> Cap ke 500

console.log("Tank Status:", tank.currentLitres);

console.log("---");

// 2. Lanjutan: Derived Properties (Data Turunan)
class SensorMatrix {
    constructor(voltage, current) {
        this.voltage = voltage;
        this.current = current;
    }

    // Properti turunan: Tidak disimpan, dihitung saat diminta
    get wattage() {
        return this.voltage * this.current;
    }

    get efficiencyLevel() {
        if (this.wattage > 1000) return "HIGH PERFORMANCE";
        if (this.wattage > 500) return "OPTIMAL";
        return "LOW POWER";
    }
}

const sensor = new SensorMatrix(220, 5);
console.log(`Current Wattage: ${sensor.wattage}W`);
console.log(`Efficiency: ${sensor.efficiencyLevel}`);

console.log("---");

// 3. Arsitektur: Read-Only Properties
// Membuat properti yang seolah-olah hanya bisa dibaca (karena tidak ada Setter).
class VersionHub {
    #version = "2.5.1-GOLD";

    get version() {
        return this.#version;
    }
    // Tidak ada Setter untuk 'version'
}

const vHub = new VersionHub();
console.log("Core Version:", vHub.version);
vHub.version = "Hacked-v9"; // Gagal secara diam-diam (atau error di strict mode)
console.log("Core Version (After tampering):", vHub.version);
