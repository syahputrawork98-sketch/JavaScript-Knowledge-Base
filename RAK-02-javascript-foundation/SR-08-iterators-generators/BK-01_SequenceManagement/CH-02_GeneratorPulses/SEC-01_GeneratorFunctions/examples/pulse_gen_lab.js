/**
 * LAB: Generator Functions (The Pulse Origin)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Manual Pulsing
function* fuelSource() {
    console.log("[GEN] Reactor Startup...");
    yield "ALPHA-FUEL";
    
    console.log("[GEN] Warming Cores...");
    yield "BETA-FUEL";
    
    console.log("[GEN] Maximum Output Reached.");
    yield "GAMMA-FUEL";
}

const remote = fuelSource();

console.log("Request 1:", remote.next().value);
console.log("Request 2:", remote.next().value);
console.log("Request 3:", remote.next().value);
console.log("Request 4:", remote.next()); // { value: undefined, done: true }

console.log("---");

// 2. Lanjutan: Automatic Harvesting (for...of)
// Generator secara otomatis bisa masuk ke jalur 'for...of'
function* numberGenerator(max) {
    for (let i = 1; i <= max; i++) {
        yield `Data-Packet-#${i}`;
    }
}

console.log("Harvesting Pulses:");
for (const pulse of numberGenerator(3)) {
    console.log(`- Received: ${pulse}`);
}

console.log("---");

// 3. Arsitektur: Infinite Pulse Stream
// Generator bisa berjalan selamanya tanpa meledakkan memori Hub!
function* infiniteID() {
    let id = 1000;
    while(true) {
        yield `ID-${id++}`;
    }
}

const idStream = infiniteID();
console.log("Grab ID:", idStream.next().value);
console.log("Grab ID:", idStream.next().value);
console.log("Grab ID:", idStream.next().value);
// Anda bisa menarik ID ini kapanpun dibutuhkan tanpa loop tak berhingga yang macet.

console.log("---");

// 4. Architect Drill: Generator as Iterator Result
const testGen = fuelSource();
const resultObj = testGen.next();
console.log("Full Result Structure:", resultObj); // { value: ..., done: ... }
