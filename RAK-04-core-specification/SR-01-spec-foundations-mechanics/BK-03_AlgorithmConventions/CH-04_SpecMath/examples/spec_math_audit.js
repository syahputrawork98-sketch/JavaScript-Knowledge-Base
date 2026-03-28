/**
 * LAB: Spec Math vs Language Math
 * 
 * Eksperimen ini membedah perbedaan antara Mathematical Value (MV)
 * dan nilai sirkuit (Number/BigInt).
 */

console.log("--- Spec Math Audit ---");

// 1. Floating Point Precision (Number Type)
const a = 0.1;
const b = 0.2;
const sum = a + b;

console.log("Mathematical Value (Ideal): 0.3");
console.log("Circuit Value (Number):", sum);
console.log("Is it equal?", sum === 0.3); // false

// 2. BigInt (Infinite Integer Precision)
const largeMV = 2n ** 100n;
console.log("\n--- BigInt Precision Audit ---");
console.log("2^100 as BigInt:", largeMV.toString());
console.log("2^100 as Number:", Number(largeMV)); // Precision lost!

// 3. Modulo Padding
const negativeMod = -1 % 5;
console.log("\n--- Modulo Behavior Audit ---");
console.log("-1 % 5 in JS:", negativeMod); // -1
console.log("Note: Mathematical modulo often returns 4. JS follows specific clamping rules.");
