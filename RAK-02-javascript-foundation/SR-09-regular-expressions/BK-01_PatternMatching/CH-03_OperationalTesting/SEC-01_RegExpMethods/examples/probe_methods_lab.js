/**
 * LAB: RegExp Methods (The Probe Analyzers)
 * Level: Gold Standard Implementation
 */

const gridLog = "CORE-01: ONLINE, CORE-02: OFFLINE, CORE-05: ONLINE";

// 1. Dasar: Quick Validation (.test)
console.log("--- VALIDATION PROBE ---");
const validateID = /CORE-\d{2}/;

if (validateID.test(gridLog)) {
    console.log("[OK] Grid Log contains valid CORE identifiers.");
}

console.log("---");

// 2. Lanjutan: Deep Extraction (.exec)
console.log("--- BIOPSY PROBE ---");
const extractor = /CORE-(?<id>\d{2}): (?<status>\w+)/;

const biopsy = extractor.exec(gridLog);
if (biopsy) {
    console.log("Full Result Object:", biopsy);
    console.log("Targeted Info:", biopsy.groups.id, "is", biopsy.groups.status);
}

console.log("---");

// 3. Arsitektur: Global Iteration with .exec()
console.log("--- BATCH HARVESTING ---");
const globalScanner = /CORE-(?<id>\d{2}): (?<status>\w+)/g;
let match;

console.log("Harvesting all statuses:");
while ((match = globalScanner.exec(gridLog)) !== null) {
    console.log(`- Found Unit ${match.groups.id} with status [${match.groups.status}]`);
    console.log(`  (Next scan starts at index: ${globalScanner.lastIndex})`);
}

console.log("---");

// 4. Architect Drill: The lastIndex Trap
const trapScanner = /ONLINE/g;
const testStr = "CORE ONLINE";

console.log("Scan 1:", trapScanner.test(testStr)); // true
console.log("Last Index after scan 1:", trapScanner.lastIndex); // 11

// Scan 2 pada string yang sama tanpa reset akan gagal!
console.log("Scan 2 (without reset):", trapScanner.test(testStr)); // false

// Reset untuk keamanan
trapScanner.lastIndex = 0;
console.log("Scan 3 (after manual reset):", trapScanner.test(testStr)); // true
