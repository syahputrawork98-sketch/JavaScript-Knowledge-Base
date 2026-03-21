/**
 * LAB: The Iterable Protocol (The Universal Transport)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Verifikasi Pintu [Symbol.iterator]
function checkIterable(obj, label) {
    const isIterable = obj && typeof obj[Symbol.iterator] === 'function';
    console.log(`[CHECK] Is ${label} iterable? ${isIterable ? "YES (Gateway Found)" : "NO (Access Denied)"}`);
    return isIterable;
}

const sensors = ["TEMP", "PRESSURE", "VOLT"];
const message = "NEXUS-ON";
const reactor = { id: "RX-1", fuel: 50 }; // Objek biasa bukan iterable secara default

checkIterable(sensors, "Array Sensors");
checkIterable(message, "String Message");
checkIterable(reactor, "Object Reactor");

console.log("---");

// 2. Lanjutan: Manual Extraction (Mengintip di Balik Gerbang)
if (checkIterable(sensors, "Array Sensors")) {
    // Memanggil fungsi iterator secara manual
    const iterator = sensors[Symbol.iterator]();
    
    console.log("Manual Pull 1:", iterator.next()); 
    console.log("Manual Pull 2:", iterator.next());
}

console.log("---");

// 3. Arsitektur: The Tools in Action
// Selama objek punya [Symbol.iterator], alat-alat ini akan bekerja:

const dataStream = "ABCD";

// A. Loop for...of
console.log("Looping Stream:");
for (const char of dataStream) {
    console.log(`- Data: ${char}`);
}

// B. Spread Operator
const dataArray = [...dataStream];
console.log("Spread to Array:", dataArray);

// C. Destructuring
const [first, second] = dataStream;
console.log(`Extracted: ${first}, ${second}`);

console.log("---");

// 4. Architect Drill: Iterability of Maps
const assetMap = new Map([
    ["ID-01", "TURBINE"],
    ["ID-02", "COOLER"]
]);

if (checkIterable(assetMap, "Map Assets")) {
    for (const [id, name] of assetMap) {
        console.log(`Mapping: ${id} -> ${name}`);
    }
}
