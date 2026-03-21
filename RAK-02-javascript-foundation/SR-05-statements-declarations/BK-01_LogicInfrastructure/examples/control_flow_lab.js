/**
 * LAB: Logic Infrastructure & Flow
 * Level: Gold Standard Implementation
 */

// 1. Dasar: The Decision Gates (if & switch)
const reactorStatus = "OVERHEAT";

console.log("--- DECISION SCAN ---");
if (reactorStatus === "STABLE") {
    console.log("[SYS] Normal operation.");
} else if (reactorStatus === "OVERHEAT") {
    console.warn("[ALERT] Cooling system activated!");
} else {
    console.error("[CRITICAL] Unknown status!");
}

// 2. Lanjutan: The Loop Engines (for & while)
console.log("--- ITERATION SCAN ---");
for (let i = 1; i <= 3; i++) {
    console.log(`[GEN] Pumping energy pulse #${i}...`);
}

let batteryLevel = 30;
while (batteryLevel < 50) {
    batteryLevel += 10;
    console.log(`[RECHARGE] Battery at ${batteryLevel}%`);
}

console.log("---");

// 3. Arsitektur: Safety Execution (try-catch)
function processExternalData(data) {
    try {
        console.log("Parsing data stream...");
        if (!data) throw new Error("Stream Empty");
        return JSON.parse(data);
    } catch (err) {
        console.error(`[FUSE BLOWN] Logic error: ${err.message}`);
    } finally {
        console.log("[CLEANUP] Connection closed.");
    }
}

processExternalData(null);
