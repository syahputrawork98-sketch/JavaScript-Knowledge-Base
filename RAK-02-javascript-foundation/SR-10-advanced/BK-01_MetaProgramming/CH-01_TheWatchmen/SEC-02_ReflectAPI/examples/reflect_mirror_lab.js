/**
 * LAB: Reflect API (The Official Record)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Reflect vs Operators (Functional Style)
console.log("--- FUNCTIONAL REFLECTION ---");
const sensor = { id: 101, type: "Thermal" };

// Mengecek keberadaan (in operator vs Reflect.has)
console.log("Has type?", Reflect.has(sensor, "type"));

// Menghapus properti (delete operator vs Reflect)
const success = Reflect.deleteProperty(sensor, "id");
console.log(`Deletion Status: ${success}, Remaining:`, sensor);

console.log("---");

// 2. Lanjutan: Safe Property Definition
console.log("--- SAFE DEFINITION ---");
const vault = { code: 123 };
Object.freeze(vault); // Mengunci brankas

// Object.defineProperty akan melempar error pada objek beku
try {
    Object.defineProperty(vault, "newKey", { value: 456 });
} catch (e) {
    console.warn("[Object] Gagal mendefinisikan properti pada objek beku.");
}

// Reflect.defineProperty hanya mengembalikan false (lebih bersih)
const defStatus = Reflect.defineProperty(vault, "newKey", { value: 456 });
console.log(`[Reflect] Definition Status (on frozen object): ${defStatus}`);

console.log("---");

// 3. Arsitektur: Dynamic Function Apply
console.log("--- DYNAMIC APPLY ---");
function calculateEnergy(base, multiplier) {
    return (base * multiplier) + (this.bonus || 0);
}

const context = { bonus: 50 };
const args = [100, 2];

// Menggunakan Reflect.apply(targetFunction, thisArg, argumentsList)
const total = Reflect.apply(calculateEnergy, context, args);
console.log(`Total Energy: ${total}`); // (100 * 2) + 50 = 250

console.log("---");

// 4. Architect Drill: Constructing with Reflect
class Drone {
    constructor(name) {
        this.name = name;
        console.log(`Drone ${this.name} initialized.`);
    }
}

// Reflect.construct(constructor, args)
const myDrone = Reflect.construct(Drone, ["Scout-01"]);
console.log("Created Drone:", myDrone instanceof Drone);
