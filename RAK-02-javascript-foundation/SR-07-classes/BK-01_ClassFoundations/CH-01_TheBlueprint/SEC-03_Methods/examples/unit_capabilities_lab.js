/**
 * LAB: Class Methods (Operational Capabilities)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Modul Operasional
class SmartBattery {
    constructor(id, initialCharge = 100) {
        this.id = id;
        this.charge = initialCharge;
    }

    // Metode untuk melaporkan status
    report() {
        console.log(`[${this.id}] Current Charge: ${this.charge}%`);
        return this; // Mendukung Method Chaining
    }

    // Metode untuk mutasi state
    use(amount) {
        if (this.charge - amount < 0) {
            console.error(`[${this.id}] Error: Insufficient energy!`);
            return this;
        }
        this.charge -= amount;
        console.log(`[${this.id}] Shipped ${amount} units.`);
        return this;
    }
}

const batt1 = new SmartBattery("BATT-01");
batt1.report().use(20).report();

console.log("---");

// 2. Lanjutan: Interaksi Antar Metode
class GridController {
    constructor() {
        this.units = [];
    }

    addUnit(unit) {
        this.units.push(unit);
        console.log(`System: Unit [${unit.id}] linked.`);
    }

    // Metode yang memanggil metode lain
    massStatusReport() {
        console.log("--- GLOBAL STATUS REPORT ---");
        this.units.forEach(u => u.report());
    }
}

const controller = new GridController();
controller.addUnit(batt1);
controller.addUnit(new SmartBattery("BATT-02", 50));
controller.massStatusReport();

console.log("---");

// 3. Arsitektur: Dynamic Context (The Caution)
const standaloneReport = batt1.report;
try {
    // Akan ERROR karena 'this' hilang saat fungsi dipindah tanpa konteks
    standaloneReport(); 
} catch (e) {
    console.log("Architect Warning: Methods lose their 'this' context when extracted from instance!");
}

// Solusi: Binding manual
const boundReport = batt1.report.bind(batt1);
boundReport(); 
