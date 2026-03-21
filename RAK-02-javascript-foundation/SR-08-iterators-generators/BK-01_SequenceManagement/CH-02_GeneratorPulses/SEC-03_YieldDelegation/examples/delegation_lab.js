/**
 * LAB: yield* (The Sub-Grid Relay)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Generator Delegation
function* sectorA() {
    yield "A-01";
    yield "A-02";
}

function* sectorB() {
    yield "B-01";
}

function* mainGridDispatcher() {
    console.log("[MAIN] Initiating Sector A...");
    yield* sectorA(); // Delegasi ke generator lain
    
    console.log("[MAIN] Initiating Sector B...");
    yield* sectorB();
    
    console.log("[MAIN] Grid Dispatch Complete.");
}

console.log("Flux Stream:");
for (const flux of mainGridDispatcher()) {
    console.log(`- Recv: ${flux}`);
}

console.log("---");

// 2. Lanjutan: Flattening Iterables
function* dataPacker() {
    yield "HEADER";
    yield* ["D-01", "D-02", "D-03"]; // Delegasi ke Array
    yield* "LOG";                    // Delegasi ke String
    yield "FOOTER";
}

console.log("Flat Data Stream:", [...dataPacker()].join(" | "));

console.log("---");

// 3. Arsitektur: Catching Sub-Result
function* securityAudit() {
    yield "Checking Firewalls...";
    yield "Checking Encryptions...";
    return "AUDIT-PASS"; // Return value
}

function* masterProcess() {
    console.log("[MASTER] Starting Security Audit...");
    const status = yield* securityAudit(); 
    yield `Final Report: ${status}`;
}

const master = masterProcess();
console.log("Process 1:", master.next().value);
console.log("Process 2:", master.next().value);
console.log("Process 3:", master.next().value);

console.log("---");

// 4. Architect Drill: Recursive Delegation
// Menjelajah silsilah unit yang bercabang
function* traverseUnit(unit) {
    yield unit.name;
    if (unit.sub) {
        for (const s of unit.sub) {
            yield* traverseUnit(s);
        }
    }
}

const complexHub = {
    name: "CORE-01",
    sub: [
        { name: "RECON-A", sub: [{ name: "DRONE-1" }] },
        { name: "POWER-B" }
    ]
};

console.log("Full Unit Tree Traversal:");
for (const name of traverseUnit(complexHub)) {
    console.log(`-> ${name}`);
}
