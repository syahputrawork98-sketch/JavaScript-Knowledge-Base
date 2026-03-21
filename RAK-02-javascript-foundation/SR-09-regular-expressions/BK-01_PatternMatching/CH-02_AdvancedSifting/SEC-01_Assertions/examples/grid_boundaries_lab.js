/**
 * LAB: Assertions (The Boundary Perimeter)
 * Level: Gold Standard Implementation
 */

const logStream = "REACTOR-01: ONLINE, REACTOR-02: OFFLINE, REACTOR-3X: ERROR";

// 1. Dasar: Jangkar (Anchors)
console.log("--- ANCHOR PERIMETER ---");

// Mengecek apakah string dimulai dengan 'REACTOR'
const isReactorLog = /^REACTOR/.test(logStream);
console.log("Starts with 'REACTOR'?", isReactorLog);

// Mengecek apakah string diakhiri dengan 'ERROR'
const hasErrorAtEnd = /ERROR$/.test(logStream);
console.log("Ends with 'ERROR'?", hasErrorAtEnd);

console.log("---");

// 2. Lanjutan: Word Boundaries (\b)
const searchTarget = "The cat in category";
console.log("Searching for 'cat'...");

// Tanpa boundary: Kena 'category'
console.log("Without \b:", searchTarget.match(/cat/g)); 

// Dengan boundary: Hanya kena kata 'cat' utuh
console.log("With \b:", searchTarget.match(/\bcat\b/g)); 

console.log("---");

// 3. Arsitektur: Lookarounds (Pengecekan Tanpa Konsumsi)
console.log("--- LOOKAROUND LASER ---");

// A. Positive LOOKAHEAD: Cari angka yang diikuti oleh 'kW'
const energyData = "Reading: 500kW, Input: 200V, Max: 1000kW";
const kwValues = energyData.match(/\d+(?=kW)/g);
console.log("Energy Values (followed by kW):", kwValues); // ["500", "1000"]

// B. Negative LOOKAHEAD: Cari angka yang TIDAK diikuti oleh 'kW'
const otherValues = energyData.match(/\d+(?!kW)/g);
console.log("Other Values (NOT followed by kW):", otherValues);

// C. Positive LOOKBEHIND: Cari data setelah label 'ID:'
const userData = "Name: Artdarkman, ID: 009, Access: High";
const idValue = userData.match(/(?<=ID: )\d+/);
console.log("Extracted ID via Lookbehind:", idValue?.[0]);

console.log("---");

// 4. Architect Drill: Complex Password Validation
// Syarat: Min 8 karakter, harus ada angka, harus ada huruf besar.
const validatePassword = (pwd) => {
    const rules = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return rules.test(pwd);
};

console.log("Password 'weak':", validatePassword("weak")); // false
console.log("Password 'Stronger123':", validatePassword("Stronger123")); // true
