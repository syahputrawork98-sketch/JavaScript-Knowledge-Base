/**
 * LAB: Groups & Ranges (The Modular Sorters)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Capturing Groups & Destructuring
console.log("--- STANDARD CAPTURE ---");
const fullDate = "2024-03-21";
const datePattern = /(\d{4})-(\d{2})-(\d{2})/;

const [match, year, month, day] = fullDate.match(datePattern);
console.log(`Original: ${match}`);
console.log(`Extracted: Day ${day}, Month ${month}, Year ${year}`);

console.log("---");

// 2. Lanjutan: Named Capture Groups (The Architect Way)
console.log("--- NAMED CAPTURE ---");
const urlData = "https://hub.syahputra.work/api/v1/sensors";
const urlPattern = /^(?<proto>\w+):\/\/(?<host>[\w.]+)(?<path>\/.*)$/;

const urlMatch = urlData.match(urlPattern);
if (urlMatch) {
    const { proto, host, path } = urlMatch.groups;
    console.log(`Protocol: ${proto}`);
    console.log(`Host: ${host}`);
    console.log(`Path: ${path}`);
}

console.log("---");

// 3. Arsitektur: Backreferences (\1)
// Mendeteksi pengulangan kata yang rawan error di log
console.log("--- BACKREFERENCE DETECTION ---");
const badLog = "CORE CORE failure detected at 0900hrs";
const repeatScanner = /\b(\w+)\s+\1\b/i;

const repeatMatch = badLog.match(repeatScanner);
if (repeatMatch) {
    console.log(`Warning! Repeated word found: '${repeatMatch[1]}'`);
}

console.log("---");

// 4. Architect Drill: Alternations & Ranges
console.log("--- ADVANCED SIFTING ---");
const mixedData = "Val: A1, Val: B9, Val: Z0";
// Mencari Val: diikuti Huruf A-C DAN angka 0-9
const specificScanner = /Val: [A-C]\d/g;
console.log("Filtered Values (A-C only):", mixedData.match(specificScanner));

// OR Switch (Alternation)
const errorLog = "FATAL Error at Sector 7";
const levelScanner = /INFO|WARN|ERROR|FATAL/g;
console.log("Alert Level:", errorLog.match(levelScanner));
