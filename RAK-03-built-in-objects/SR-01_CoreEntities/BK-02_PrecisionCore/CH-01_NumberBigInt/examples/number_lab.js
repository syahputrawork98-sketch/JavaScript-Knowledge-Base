/**
 * LAB: Precision Measuring
 * Mental Model: "Standard Meter & Heavy-Duty Cable"
 */

// 1. Batas Meter Standar (Number)
console.log("Maksimum Energi Aman (MAX_SAFE_INTEGER):", Number.MAX_SAFE_INTEGER);

const criticalValue = Number.MAX_SAFE_INTEGER + 1;
const overLimit = Number.MAX_SAFE_INTEGER + 2;

console.log("Kehilangan Presisi pada Number:", criticalValue === overLimit); // true! Bahaya!

// 2. Heavy-Duty Cable (BigInt)
// Digunakan untuk angka super besar tanpa kehilangan presisi
const bigPower_1 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
const bigPower_2 = BigInt(Number.MAX_SAFE_INTEGER) + 2n;

console.log("\nPresisi Terjaga pada BigInt:", bigPower_1 === bigPower_2); // false! Aman.
console.log("Total Energi:", bigPower_1 + bigPower_2);

// 3. Utilitas Numerik
console.log("\nCek apakah data valid (isNaN):", Number.isNaN(0 / 0));
console.log("Cek apakah data bulat (isInteger):", Number.isInteger(50.5));
