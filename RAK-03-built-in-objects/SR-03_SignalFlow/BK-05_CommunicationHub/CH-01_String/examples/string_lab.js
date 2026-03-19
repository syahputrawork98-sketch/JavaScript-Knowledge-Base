/**
 * LAB: Textual Signal Processing
 * Mental Model: "Textual Signal (String)"
 */

const rawMessage = " [SIGNAL-ACTIVE] Type: Solar-Gen | Unit: 4A | Volt: 230V ";

// 1. Pembersihan Derau (Trim)
const cleanMessage = rawMessage.trim();
console.log("Sinyal Bersih:", cleanMessage);

// 2. Dekomposisi Sinyal (Split)
const segments = cleanMessage.split(" | ");
console.log("\nSegmen Sinyal:");
segments.forEach(seg => console.log("-", seg));

// 3. Ekstraksi Data Spesifik (Slice & Includes)
const typeSegment = segments[0];
if (typeSegment.includes("SIGNAL-ACTIVE")) {
    console.log("\nStatus: Sinyal Terverifikasi");
}

const unitID = segments[1].slice(6); // Mengambil "4A"
console.log("ID Unit Terdeteksi:", unitID);

// 4. Transformasi (Replace & Case)
const maintenanceMessage = cleanMessage.replace("ACTIVE", "MAINTENANCE").toLowerCase();
console.log("\nPesan Pemeliharaan:", maintenanceMessage);
