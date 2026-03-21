/**
 * LAB: Flags (The Global Calibrators)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Global vs Case-Insensitive
const msg = "ENERGY, energy, Energy";
console.log("Found (standard):", msg.match(/energy/));   // ["energy"]
console.log("Found (global/i):", msg.match(/energy/gi)); // ["ENERGY", "energy", "Energy"]

console.log("---");

// 2. Lanjutan: The Unicode (u) Flag
// Emoji 🔌 sebenarnya terdiri dari dua unit kode UTF-16
const emojiStr = "🔌 Power";

console.log("Without 'u' flag:");
console.log("- Match any char:", /^.$/.test("🔌")); // false (menganggap 🔌 > 1 char)

console.log("With 'u' flag:");
console.log("- Match any char:", /^.$/u.test("🔌")); // true (mengenali sbg 1 entity)

// Mencari karakter berdasarkan property Unicode (ES2018+)
const scripts = "ID123, 漢字";
console.log("Found Han (Kanji):", scripts.match(/\p{Script=Han}/gu));

console.log("---");

// 3. Arsitektur: The Sticky (y) Flag
const source = "const x = 10;";
// Kita ingin memanen token secara berurutan
const tokenScanner = /\w+/y;

console.log("Sticky Extraction:");
tokenScanner.lastIndex = 0;
console.log("Token 1:", tokenScanner.exec(source)?.[0]); // "const"

tokenScanner.lastIndex = 6; // Loncat ke 'x'
console.log("Token 2:", tokenScanner.exec(source)?.[0]); // "x"

tokenScanner.lastIndex = 7; // Di bagian '='
console.log("Token 3 at '=' (not a word):", tokenScanner.exec(source)); // null (langsung gagal)

console.log("---");

// 4. Architect Drill: Multiline (m) & DotAll (s)
const block = `First Line
Second Line`;

console.log("Multiline Start Match:", block.match(/^Second/m)?.[0]);
console.log("DotAll Match (including newline):", block.match(/First.*Second/s)?.[0]);
