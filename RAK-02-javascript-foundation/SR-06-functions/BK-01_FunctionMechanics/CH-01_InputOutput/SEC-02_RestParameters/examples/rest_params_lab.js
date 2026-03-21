/**
 * LAB: Rest Parameters (The Collector Bins)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Variadic Summation
// Membangun fungsi yang menerima jumlah input berapa pun.
function sumPower(...sources) {
    return sources.reduce((total, val) => total + val, 0);
}

console.log("Total Power (2 sources):", sumPower(100, 200));
console.log("Total Power (5 sources):", sumPower(10, 20, 30, 40, 50));
console.log("Total Power (0 sources):", sumPower()); // 0

console.log("---");

// 2. Lanjutan: Partial Rest (First-Class Filtering)
// Mengambil identitas utama dan mengumpulkan data pendukung.
function registerAsset(category, owner, ...metadata) {
    console.log(`Asset Category: ${category}`);
    console.log(`Owner: ${owner}`);
    console.log(`Metadata Points: ${metadata.join(" | ")}`);
}

registerAsset("Server", "Admin-X", "Uptime: 99%", "Location: Jakarta", "ID: SRV-01");

console.log("---");

// 3. Arsitektur: Function Wrapper (Forwarding)
// Pola yang sering digunakan dalam Middleware atau Logger.
function withPerformanceLog(fn) {
    return function(...args) { // Menangkap semua argumen
        console.time("ExecutionTime");
        const result = fn(...args); // Meneruskan semua argumen (Spread)
        console.timeEnd("ExecutionTime");
        return result;
    };
}

const slowSum = (a, b) => {
    for(let i=0; i<1e6; i++) {} // Simulate work
    return a + b;
};

const loggedSum = withPerformanceLog(slowSum);
console.log("Result:", loggedSum(500, 500));

console.log("---");

// 4. Perbandingan: Rest vs Arguments (Legacy)
function legacyVsModern() {
    // Objek arguments (Legacy): Bukan Array asli, sulit di-looping
    console.log("Arguments is Array?", Array.isArray(arguments));
    
    // Rest Parameter (Modern): Array asli
    const showRest = (...rest) => {
        console.log("Rest is Array?", Array.isArray(rest));
        console.log("First item via Rest:", rest[0]);
    };
    
    showRest("Data-A", "Data-B");
}

legacyVsModern();
