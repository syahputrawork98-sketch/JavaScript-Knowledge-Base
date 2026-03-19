/**
 * LAB: Calculation Module
 * Mental Model: "The Calculation Module"
 */

console.log("--- Konstanta Hub ---");
console.log("Nilai PI:", Math.PI);
console.log("Basis Logaritma (E):", Math.E);

// 1. Stabilisasi Output (Rounding)
const fluctuation = 12.75;
console.log("\n--- Stabilisasi Sinyal ---");
console.log("Floor (Bawah):", Math.floor(fluctuation));
console.log("Ceil (Atas):", Math.ceil(fluctuation));
console.log("Round (Terdekat):", Math.round(fluctuation));

// 2. Seleksi Batas Energi (Min/Max)
const sensorVoltages = [15, 42, 7, 88, 23];
console.log("\nTegangan Tertinggi:", Math.max(...sensorVoltages));
console.log("Tegangan Terendah:", Math.min(...sensorVoltages));

// 3. Bangkitkan Sinyal Acak (Random)
const randomPower = Math.floor(Math.random() * 100) + 1;
console.log("Energi Kejutan (Random 1-100):", randomPower);
