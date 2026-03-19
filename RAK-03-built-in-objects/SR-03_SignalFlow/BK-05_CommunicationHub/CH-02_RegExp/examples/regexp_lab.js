/**
 * LAB: Signal Pattern Detection
 * Mental Model: "Signal Patterns (RegExp)"
 */

const logStream = `
[2026-03-19] INFO: System started
[2026-03-19] ERR-502: Voltage overload in Hub-4
[2026-03-19] INFO: Cooling active
[2026-03-19] ERR-404: Sensor-9 not found
`;

// 1. Pola Deteksi Error (Regex Literal)
const errorPattern = /ERR-\d{3}/g;

// 2. Validasi (Test)
console.log("Apakah ada error dalam log?", errorPattern.test(logStream));

// 3. Ekstraksi Detail (Match & Exec)
const errorsFound = logStream.match(errorPattern);
console.log("\nDaftar Error Terdeteksi:", errorsFound);

// 4. Ekstraksi Terperinci (Exec dengan Capture Group)
const detailPattern = /ERR-(\d{3}): (.*)/g;
let match;

console.log("\n--- Analisis Error Terperinci ---");
while ((match = detailPattern.exec(logStream)) !== null) {
    console.log(`Kode: ${match[1]} | Pesan: ${match[2]}`);
}

// 5. Sensor Masking (Replace)
const maskedLog = logStream.replace(/Hub-\d/g, "Hub-XXX");
console.log("\nLog Samaran (Security Mode):", maskedLog);
