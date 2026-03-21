/**
 * LAB: Default Parameters (Backup Fuel)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Static Fallback
// Menjamin fungsi tetap berjalan meskipun input absen.
function configureThermal(temp = 25, unit = "Celsius") {
    console.log(`Setting temperature to ${temp}° ${unit}`);
}

configureThermal(30);           // Setting temperature to 30° Celsius
configureThermal(undefined, "F"); // Setting temperature to 25° F (PENTING: Gunakan undefined untuk memicu default)
configureThermal(null, "K");    // Setting temperature to null° K (PENTING: null TIDAK memicu default)

console.log("---");

// 2. Lanjutan: Dynamic Call-time Evaluation
// Nilai default bisa berupa ekspresi dinamis.
const getTimestamp = () => new Date().toLocaleTimeString();

function logEvent(msg, time = getTimestamp()) {
    console.log(`[${time}] LOG: ${msg}`);
}

logEvent("System Started");
setTimeout(() => logEvent("Background Task Completed"), 1000); // Waktu akan berbeda (Call-time eval)

console.log("---");

// 3. Arsitektur: Parameter Shadowing
// Parameter kanan bisa merujuk pada parameter kiri.
function createDimension(width, height = width, depth = height / 2) {
    return { width, height, depth };
}

console.log("Square Base:", createDimension(10)); // { width: 10, height: 10, depth: 5 }
console.log("Custom Cuboid:", createDimension(10, 20, 30));

console.log("---");

// 4. Integrasi: Object Configuration (Pattern Populer)
// Menggabungkan Default Parameters dengan Destructuring untuk Config Object yang aman.
function initializeHub({
    id = "HUB-INTERNAL",
    retries = 3,
    debug = false
} = {}) { // '= {}' di akhir memungkinkan pemanggilan tanpa argumen sama sekali
    console.log(`Initializing ${id} | Retries: ${retries} | Debug: ${debug}`);
}

initializeHub({ id: "NEXUS-01", debug: true });
initializeHub(); // Berkat default = {}, ini tidak error dan menggunakan semua internal defaults
