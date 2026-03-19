/**
 * LAB: Boolean Switches & Symbol IDs
 * Mental Model: "Energy Switches & Forge-proof ID Cards"
 */

// 1. Sinyal Logika (Boolean)
const isPowerActive = Boolean(1);
const isSystemCorrupt = Boolean(0);

console.log("Status Power:", isPowerActive);
console.log("Diagnostic Hub (Falsy Check):", Boolean("")); // false

// 2. Identitas Unik (Symbol)
// Menciptakan ID yang tidak mungkin diduplikasi meskipun namanya sama
const HUB_ID_1 = Symbol("HUB_ID");
const HUB_ID_2 = Symbol("HUB_ID");

console.log("\n--- Verifikasi Identitas ---");
console.log("ID 1:", HUB_ID_1.toString());
console.log("ID 2:", HUB_ID_2.toString());
console.log("Apakah ID identik?", HUB_ID_1 === HUB_ID_2); // false!

// 3. Penggunaan Symbol sebagai Kunci Rahasia
const machine = {
    [HUB_ID_1]: "Data Mesin A"
};

console.log("\nMembaca data dengan Kunci Simbol:", machine[HUB_ID_1]);
console.log("Simbol tidak muncul di JSON:", JSON.stringify(machine));
