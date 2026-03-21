/**
 * LAB: Character Classes (The Frequency Sifters)
 * Level: Gold Standard Implementation
 */

const rawLog = "SYS_ALERT_99: Reactor-A1 @ temp_75C [Status: CRITICAL]";

// 1. Dasar: Shorthand Sifters
console.log("--- SHORTHAND SIFTING ---");

// Mencari semua angka (\d)
const digits = rawLog.match(/\d/g);
console.log("Extracted Digits:", digits); // ["9", "9", "1", "7", "5"]

// Mencari semua kata/alfanumerik (\w)
const words = rawLog.match(/\w+/g);
console.log("Extracted Word Units:", words);

// Mencari semua karakter non-spasi (\S)
const noSpace = rawLog.match(/\S+/g);
console.log("Non-Space Segments:", noSpace.length);

console.log("---");

// 2. Lanjutan: Custom Set Sifting [ ]
console.log("--- CUSTOM SET SIFTING ---");

// Mencari hanya huruf vokal
const vowels = rawLog.match(/[aeiou]/gi);
console.log("Vowel Pulse Check:", vowels.join(""));

// Mencari Range Angka 0-5
const lowNumbers = rawLog.match(/[0-5]/g);
console.log("Low Energy Readings (0-5):", lowNumbers);

console.log("---");

// 3. Arsitektur: Negation Sifting [^ ]
console.log("--- NEGATION SIFTING ---");

// Membuang semua huruf dan angka untuk melihat simbol
const symbolsOnly = rawLog.match(/[^a-z0-9\s]/gi);
console.log("Extracted Structure Symbols:", symbolsOnly.join(""));

console.log("---");

// 4. Architect Drill: The Wildcard Dot
const snippet = "Data: 100kW";
// Titik mencocokkan apa saja
const dotScan = snippet.match(/D.t./);
console.log("Wildcard Match Result:", dotScan?.[0]);

// Dot tidak bisa menembus Newline (\n) tanpa flag 's'
const multiLine = "Line1\nLine2";
console.log("Dot Fail (Newlines):", multiLine.match(/Line1.Line2/) === null);
