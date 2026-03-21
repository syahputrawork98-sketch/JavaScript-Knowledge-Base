/**
 * LAB: Class Super (The Uplift Link)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Sinkronisasi Constructor
class PowerBase {
    constructor(id) {
        console.log(`[BASE] Building foundation for unit: ${id}`);
        this.id = id;
        this.voltage = 220;
    }
}

class TurboCharger extends PowerBase {
    constructor(id, boostLevel) {
        // AWAL: Hubungkan ke sirkuit induk
        super(id); 
        
        console.log(`[CHILD] Adding Turbo-Boost level: ${boostLevel}`);
        this.boostLevel = boostLevel;
    }

    getStatus() {
        return `Unit ${this.id} | Voltage: ${this.voltage}V | Boost: ${this.boostLevel}`;
    }
}

const charger = new TurboCharger("TC-9000", 5);
console.log(charger.getStatus());

console.log("---");

// 2. Lanjutan: Method Overriding (Protokol Bertingkat)
class BasicMachine {
    start() {
        console.log("Step 1: Pumping oil...");
        console.log("Step 2: Checking sensors...");
    }
}

class AdvancedDrill extends BasicMachine {
    start() {
        // Menjalankan protokol dasar dulu
        super.start(); 
        
        // Menambahkan protokol khusus anak
        console.log("Step 3: Spinning diamond head at high speed!");
        console.log("Step 4: Cooling system ENGAGED.");
    }
}

const drill = new AdvancedDrill();
console.log("Starting Advanced Drill...");
drill.start();

console.log("---");

// 3. Arsitek Warning: 'this' before 'super'
class FaultyChild extends PowerBase {
    constructor(id) {
        try {
            this.id = id; // Akan GAGAL karena belum memanggil super()
        } catch (e) {
            console.log("Architect Warning: You MUST call super() before accessing 'this'!");
        }
        super(id);
    }
}

const f1 = new FaultyChild("FIX-01");
