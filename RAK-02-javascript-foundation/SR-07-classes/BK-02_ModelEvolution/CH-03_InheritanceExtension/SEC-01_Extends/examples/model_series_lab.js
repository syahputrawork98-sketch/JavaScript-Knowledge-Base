/**
 * LAB: Class Extends (The Modular Upgrade)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Fondasi & Ekspansi
class BasicModule {
    constructor(id) {
        this.id = id;
        this.isOnline = false;
    }

    turnOn() {
        this.isOnline = true;
        console.log(`[${this.id}] Base Systems: ONLINE`);
    }

    report() {
        return `Status for ${this.id}: ${this.isOnline ? "OPERATIONAL" : "IDLE"}`;
    }
}

// Meng-upgrade model dasar menjadi model sensor
class SensorModule extends BasicModule {
    scan() {
        if (!this.isOnline) {
            console.error(`[${this.id}] Error: Cannot scan while offline!`);
            return;
        }
        console.log(`[${this.id}] Scanning grid environment... OK`);
    }
}

const s1 = new SensorModule("SENSE-99");
s1.turnOn(); // Mewarisi dari BasicModule
s1.scan();   // Fitur unik SensorModule
console.log(s1.report());

console.log("---");

// 2. Lanjutan: Verifikasi Silsilah (Hierarchy Check)
console.log("Is s1 a SensorModule?", s1 instanceof SensorModule); // true
console.log("Is s1 also a BasicModule?", s1 instanceof BasicModule); // true (Inheritance)
console.log("Is s1 an Object?", s1 instanceof Object); // true (The root of all)

console.log("---");

// 3. Arsitektur: Multiple Subclasses
class IndustrialDrill extends BasicModule {
    drill() {
        console.log(`[${this.id}] Drilling core... BRRRRRRR!`);
    }
}

const d1 = new IndustrialDrill("DRILL-X");
d1.turnOn();
d1.drill();
// d1.scan(); // ERROR: Drill tidak punya kemampuan scanning
