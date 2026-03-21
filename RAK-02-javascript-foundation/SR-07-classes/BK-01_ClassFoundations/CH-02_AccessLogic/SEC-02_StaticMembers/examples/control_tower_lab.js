/**
 * LAB: Static Members (The Shared Infrastructure)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Peralatan Global (Utility)
class PhysicsEngine {
    static GRAVITY = 9.81; // Konstanta global
    
    static calculateForce(mass) {
        // 'this' di sini merujuk pada PhysicsEngine
        return mass * this.GRAVITY;
    }
}

console.log("Global Gravity:", PhysicsEngine.GRAVITY);
console.log("Force for 10kg:", PhysicsEngine.calculateForce(10), "N");

console.log("---");

// 2. Lanjutan: Factory Method Pattern
// Menggunakan static method untuk memproduksi instance dengan profil tertentu.
class EnergyUnit {
    constructor(id, type, capacity) {
        this.id = id;
        this.type = type;
        this.capacity = capacity;
    }

    // Factory: Menciptakan unit Solar secara instan
    static createSolar(id) {
        return new EnergyUnit(id, "SOLAR", 5000);
    }

    // Factory: Menciptakan unit Nuclear secara instan
    static createNuclear(id) {
        return new EnergyUnit(id, "NUCLEAR", 99999);
    }
}

const sun01 = EnergyUnit.createSolar("SUN-XP");
console.log("Generated Unit:", sun01);

console.log("---");

// 3. Arsitektur: Shared Cache (Registry)
// Menyimpan data yang bisa diakses oleh seluruh instance.
class RobotRegistry {
    static #roster = []; // Private Static Field (ES2022+)

    constructor(name) {
        this.name = name;
        RobotRegistry.#roster.push(name);
    }

    static getCount() {
        return RobotRegistry.#roster.length;
    }

    static listAll() {
        return `Current Roster: ${RobotRegistry.#roster.join(", ")}`;
    }
}

const r1 = new RobotRegistry("Aegis");
const r2 = new RobotRegistry("Sentinel");

console.log("Total Robots:", RobotRegistry.getCount());
console.log(RobotRegistry.listAll());

// 4. Architect Warning: Static Context
try {
    // static member tidak ada di instance!
    console.log(r1.getCount()); 
} catch (e) {
    console.log("Architect Warning: Static members are NOT inherited by instances.");
}
