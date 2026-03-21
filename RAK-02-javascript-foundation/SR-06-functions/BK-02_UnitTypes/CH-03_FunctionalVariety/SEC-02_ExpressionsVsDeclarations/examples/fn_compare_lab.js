/**
 * LAB: Expressions vs Declarations (Stationary vs Portable)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Hoisting Experiment
console.log("--- HOISTING TEST ---");

// Declaration: Tower is built before code runs
console.log("Calling tower(A) before definition:", towerA()); 

function towerA() {
    return "Stationary Tower A: ACTIVE";
}

// Expression: Generator exists but isn't fueled yet
try {
    console.log("Calling generator(B) before definition:", generatorB());
} catch (e) {
    console.log("Architect Warning: generatorB is not initialized yet!");
}

const generatorB = function() {
    return "Portable Generator B: ACTIVE";
};

console.log("Calling generator(B) after definition:", generatorB());
console.log("---");

// 2. Lanjutan: Named Function Expression (Self-Reference)
// Memberi nama pada ekspresi berguna untuk rekursi internal dan debugging.
const factorial = function computeFactorial(n) {
    if (n <= 1) return 1;
    // 'computeFactorial' hanya dikenali di dalam fungsi ini
    return n * computeFactorial(n - 1);
};

console.log("Factorial(5) via Named Expression:", factorial(5));

console.log("---");

// 3. Arsitektur: Dynamic Assignment
// Ekspresi memungkinkan kita mengganti fungsi secara dinamis.
let activeChannel;

const heavyLoad = () => "Processing Heavy Data...";
const lightLoad = () => "Processing Light Data...";

const systemLoad = 90; // Simulate high load
activeChannel = (systemLoad > 80) ? heavyLoad : lightLoad;

console.log("Current Channel Logic:", activeChannel());

// 4. Callback Pattern (The Portable Power)
function executeWork(taskName, taskLogic) {
    console.log(`Starting Task: [${taskName}]`);
    console.log(`Result: ${taskLogic()}`);
}

// Mengirimkan ekspresi anonim (Portable Unit) langsung sebagai argumen
executeWork("RECON", function() {
    return "Scanning sectors 1-5...";
});
