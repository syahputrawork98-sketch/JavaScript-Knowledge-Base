/**
 * LAB: Async Iterators (The Latency Compensator)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Manual Async Pulling
const mockRemoteData = ["PACKET-1", "PACKET-2", "PACKET-3"];

const slowStream = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            async next() {
                // Simulasi latensi jaringan (1 detik per paket)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (i < mockRemoteData.length) {
                    return { value: mockRemoteData[i++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

async function manualPull() {
    console.log("[MANUAL] Checking sensor gateway...");
    const it = slowStream[Symbol.asyncIterator]();
    
    const p1 = await it.next();
    console.log("- Received:", p1.value);
    
    const p2 = await it.next();
    console.log("- Received:", p2.value);
}

// 2. Lanjutan: Automatic Consumption (for await...of)
async function autoHarvest() {
    console.log("[AUTO] Initiating Content Harvester...");
    let count = 0;
    
    try {
        for await (const packet of slowStream) {
            console.log(`- Auto Processing: ${packet} (Index: ${count++})`);
        }
    } catch (e) {
        console.error("Critical: Stream connection lost.");
    }
    
    console.log("[AUTO] Stream complete.");
}

// 3. Arsitektur: Real-world Simulation (Async Gen)
// Cara termudah membuat async iterable adalah via Async Generator
async function* cryptoMiningStream() {
    let block = 1;
    while(block <= 3) {
        await new Promise(r => setTimeout(r, 500));
        yield `BLOCK-#${block++}_HASH_XYZ`;
    }
}

async function runAudit() {
    console.log("--- STARTING GRID AUDIT ---");
    await manualPull();
    console.log("---");
    await autoHarvest();
    console.log("---");
    console.log("Monitoring Crypto Stream:");
    for await (const b of cryptoMiningStream()) {
        console.log(`- Validated: ${b}`);
    }
    console.log("--- AUDIT COMPLETE ---");
}

runAudit();
