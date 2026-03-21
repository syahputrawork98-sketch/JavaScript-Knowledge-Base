/**
 * LAB: String Methods (The Data Modifiers)
 * Level: Gold Standard Implementation
 */

const rawData = "NODE-01: Active, NODE-05: Passive, NODE-99: Active";

// 1. Dasar: Sifting with .match()
console.log("--- BATCH MATCHING ---");
const activeNodes = rawData.match(/NODE-\d{2}(?=: Active)/g);
console.log("Active Nodes Only:", activeNodes);

console.log("---");

// 2. Lanjutan: Forensic Sifting with .matchAll()
console.log("--- FORENSIC EXTRACTION ---");
const fullScanner = /NODE-(?<id>\d+): (?<status>\w+)/g;
const matches = rawData.matchAll(fullScanner);

for (const m of matches) {
    const { id, status } = m.groups;
    console.log(`- Detected ID [${id}] with state [${status}] at position ${m.index}`);
}

console.log("---");

// 3. Arsitektur: Smart Transformation with .replace()
console.log("--- DATA MASKING (REPLACE) ---");
const secretKey = "API_KEY: 8822-1100-4455-9988";

// Menggunakan callback untuk menyembunyikan digit sensitif
const maskedKey = secretKey.replace(/\d{4}-\d{4}-\d{4}-/, (match) => {
    return "****-****-****-";
});
console.log("Secured Key:", maskedKey);

// Menggunakan groups untuk reformatting
const rawName = "Syahputra, Work";
const formattedName = rawName.replace(/(?<last>\w+), (?<first>\w+)/, "$<first> $<last>");
console.log("Reformatted Name:", formattedName);

console.log("---");

// 4. Architect Drill: Complex Splitting
console.log("--- COMPLEX SPLITTING ---");
const messyLog = "Log1;Log2,Log3 Log4|Log5";
// Split berdasarkan karakter pemisah apa pun (; , spasi |)
const tokens = messyLog.split(/[;, |]+/);
console.log("Clean Tokens:", tokens);
