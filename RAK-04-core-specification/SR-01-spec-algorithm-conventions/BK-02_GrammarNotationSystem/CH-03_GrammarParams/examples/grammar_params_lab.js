/**
 * LAB: Grammatical Parameters [Yield/Await] Audit
 * 
 * Eksperimen ini membedah bagaimana konteks (Parameters) mengubah 
 * validitas sebuah kata kunci.
 */

const acorn = require('acorn');

const asyncCode = "async function f() { await x; }";
const syncCode = "function f() { await x; }";

console.log("--- Grammatical Parameters Audit ---");

try {
    acorn.parse(asyncCode, { ecmaVersion: 2022 });
    console.log("[PASS] 'await' is valid in AsyncContext (+Await parameter).");
} catch (e) {
    console.log("[FAIL] 'await' failed in AsyncContext.");
}

try {
    acorn.parse(syncCode, { ecmaVersion: 2022 });
    console.log("[PASS] 'await' is valid in SyncContext.");
} catch (e) {
    console.log("[FAIL] 'await' is invalid in SyncContext (~Await parameter).");
    console.log("Error:", e.message);
}
