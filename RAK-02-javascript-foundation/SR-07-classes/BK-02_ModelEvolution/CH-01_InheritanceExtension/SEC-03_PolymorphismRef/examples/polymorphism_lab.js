/**
 * LAB: Polymorphism (The Adaptive Interface)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Common Interface (The Contract)
class BaseGenerator {
    constructor(name) {
        this.name = name;
    }

    // Kontrak: Setiap generator harus bisa menghasilkan energi
    generate() {
        return `[${this.name}] Base system online, but no energy source defined.`;
    }
}

// 2. Implementasi Spesifik (Many Forms)
class SolarGen extends BaseGenerator {
    generate() {
        return `[${this.name}] Absorbing photons... Generating 50kWh.`;
    }
}

class ThermalGen extends BaseGenerator {
    generate() {
        return `[${this.name}] Heating steam turbines... Generating 200kWh.`;
    }
}

class FusionGen extends BaseGenerator {
    generate() {
        return `[${this.name}] Stabilizing plasma core... Generating 5000MWh!`;
    }
}

// 3. Arsitektur: The Versatile Controller
// Fungsi ini tidak peduli jenis generator apa, selama ia punya metode 'generate()'
function pulseGrid(generators) {
    console.log("--- GRID PULSE INITIATED ---");
    generators.forEach(gen => {
        console.log(gen.generate());
    });
    console.log("--- GRID PULSE COMPLETE ---");
}

const activeFleet = [
    new SolarGen("Solara-1"),
    new ThermalGen("Magma-X"),
    new FusionGen("Stellar-Core"),
    new SolarGen("Solara-2")
];

pulseGrid(activeFleet);

console.log("---");

// 4. Architect Drill: Instance Verification
// Meskipun berperilaku polimorfik, kita tetap bisa mengecek identitas asli unit.
const testUnit = activeFleet[1];
console.log(`Checking Identity of ${testUnit.name}:`);
console.log("- Is it a ThermalGen?", testUnit instanceof ThermalGen); // true
console.log("- Is it a BaseGenerator?", testUnit instanceof BaseGenerator); // true
console.log("- Is it a SolarGen?", testUnit instanceof SolarGen); // false
