/**
 * LAB: Quantifiers (The Pulse Counters)
 * Level: Gold Standard Implementation
 */

const sensorStream = "UNIT-1, UNIT-25, UNIT-999, HUB-EXT";

// 1. Dasar: Menghitung Digit (UNIT-###)
console.log("--- IDENTIFYING UNITS ---");
// Mencari UNIT- diikuti oleh 1 atau lebih angka
const anyUnits = sensorStream.match(/UNIT-\d+/g);
console.log("Found Units (1 or more digits):", anyUnits);

// Mencari UNIT- yang hanya memiliki tepat 2 angka
const midUnits = sensorStream.match(/UNIT-\d{2}/g);
console.log("Mid-range Units (exactly 2 digits):", midUnits);

console.log("---");

// 2. Lanjutan: Greedy vs Lazy Challenge
const logEntry = "Data: [500] [1200] [99]";

console.log("--- GREEDY VS LAZY ---");
// Greedy: Mengambil dari '[' pertama sampai ']' TERAKHIR
console.log("Greedy Match:", logEntry.match(/\[.+\]/g));

// Lazy: Mengambil setiap blok '[' sampai ']' TERDEKAT
console.log("Lazy Match:", logEntry.match(/\[.+?\]/g));

console.log("---");

// 3. Arsitektur: Optional Protocol (HTTP vs HTTPS)
const sites = "http://hub.local, https://secure.grid";
const protocolScanner = /https?:\/\/\w+/g;

console.log("Detected Protocols:", sites.match(protocolScanner));

console.log("---");

// 4. Architect Drill: Boundary Control
// Mencari ID yang memiliki panjang tepat 3 - 5 digit
const deviceIDs = "ID-12, ID-123, ID-12345, ID-1234567";
const validIDs = deviceIDs.match(/ID-\d{3,5}/g);
console.log("Valid Device IDs (3-5 digits):", validIDs);

// Verifikasi dengan Anchor untuk memastikan seluruh string valid
const checkID = (id) => /^ID-\d{3,5}$/.test(id);
console.log("Check ID-123:", checkID("ID-123")); // true
console.log("Check ID-123456:", checkID("ID-123456")); // false
