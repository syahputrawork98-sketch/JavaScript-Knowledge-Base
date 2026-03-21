/**
 * LAB: Class Declarations (The Master Blueprint)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Mendefinisikan Cetak Biru (Blueprint)
class SolarGenerator {
    // Saat ini kosong (Unit Default)
}

// 2. Instansiasi: Merakit Unit dari Blueprint
const gen1 = new SolarGenerator();
const gen2 = new SolarGenerator();

console.log("Is gen1 a SolarGenerator?", gen1 instanceof SolarGenerator);
console.log("Are gen1 and gen2 identical copies?", gen1 !== gen2); // Benar, mereka unit fisik yang berbeda

console.log("---");

// 3. Arsitektur: Class Expression (Blueprint Portabel)
// Sama seperti fungsi, class juga bisa disimpan dalam variabel.
const MobileUnit = class {
    getType() {
        return "Portable Battery Pack";
    }
};

const mobile1 = new MobileUnit();
console.log("Unit Type:", mobile1.getType());

console.log("---");

// 4. Architect Warning: No Hoisting
try {
    const reactor = new ThermalReactor(); // Akan ERROR
} catch (e) {
    console.log("Architect Warning: You cannot build a Reactor before its Blueprint (Class) is defined!");
}

class ThermalReactor {
    constructor() {
        this.status = "OFFLINE";
    }
}

const secureReactor = new ThermalReactor();
console.log("Secure Reactor Status:", secureReactor.status);
