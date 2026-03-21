/**
 * LAB: Realm & Intrinsic Objects Audit
 * 
 * Eksperimen ini membedah objek intrinsik (%) dan identitas mereka 
 * di dalam satu Realm eksekusi.
 */

// 1. Intrinsic Identity Verification
console.log("--- Intrinsic Identity Audit ---");
const array1 = [];
const array2 = [];

console.log("Do they share the same %Array.prototype%?");
console.log(Object.getPrototypeOf(array1) === Object.getPrototypeOf(array2)); // true

// 2. Standard vs Host Objects
console.log("\n--- Standard vs Host Object Identification ---");

const standardObjects = ["Object", "Array", "Function", "Promise", "JSON", "Math"];
const hostObjects = ["window", "document", "process", "fs", "console"];

standardObjects.forEach(name => {
    if (typeof globalThis[name] !== "undefined") {
        console.log(`[Standard] ${name} is present in this Realm.`);
    }
});

hostObjects.forEach(name => {
    if (typeof globalThis[name] !== "undefined") {
        console.log(`[Host/Env] ${name} is present in this Realm.`);
    }
});

// 3. Well-Known Symbols (Intrinsics at Language Level)
console.log("\n--- Well-Known Symbols Audit ---");
console.log("Symbol.iterator:", typeof Symbol.iterator); // intrinsic @@iterator
