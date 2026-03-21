/**
 * LAB: Literal vs Constructor (Scanner Models)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: The Preset Scanner (Literal)
const logData = "ALERT: Reactor-01 overheating. Shutdown initiated.";
const literalScanner = /reactor-\d+/i;

const found = logData.match(literalScanner);
console.log("Literal Scan Result:", found ? found[0] : "NOT FOUND");

console.log("---");

// 2. Lanjutan: The Dynamic Assembly (Constructor)
function dynamicSearch(targetId) {
    // Merakit pola secara dinamis menggunakan variabel
    const pattern = `${targetId}-\\d+`; // Catatan: double backslash di string!
    const scanner = new RegExp(pattern, "i");
    
    console.log(`[SYS] Deploying Dynamic Scanner for: ${pattern}`);
    return logData.match(scanner);
}

console.log("Dynamic Scan Result (Reactor-01):", dynamicSearch("Reactor-01")?.[0]);
console.log("Dynamic Scan Result (Reactor-99):", dynamicSearch("Reactor-99")?.[0] || "NULL");

console.log("---");

// 3. Arsitektur: Performance Perspective
console.log("Performance Check:");
console.time("Literal-Loop");
for(let i=0; i<10000; i++) {
    /test/.test("testing");
}
console.timeEnd("Literal-Loop");

console.time("Constructor-Loop");
for(let i=0; i<10000; i++) {
    new RegExp("test").test("testing");
}
console.timeEnd("Constructor-Loop");

console.log("Architect Note: Literal scanners are significantly faster in loops!");

console.log("---");

// 4. Architect Drill: Double Escaping Challenge
const literalDigit = /\d/;
const constructorDigit = new RegExp("\\d");

console.log("Are they equivalent?", literalDigit.test("1") === constructorDigit.test("1"));
