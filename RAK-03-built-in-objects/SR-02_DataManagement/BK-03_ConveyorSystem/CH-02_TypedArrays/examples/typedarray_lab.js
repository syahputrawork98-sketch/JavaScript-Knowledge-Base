/**
 * LAB: High-Speed Energy Belts
 * Mental Model: "High-Speed Belts (Typed Arrays)"
 */

// 1. Inisialisasi Sabuk 8-bit (Uint8Array)
// Sangat efisien untuk data kecil (0-255)
const byteBelt = new Uint8Array(5);
byteBelt[0] = 50;
byteBelt[1] = 200;
byteBelt[2] = 255; 

console.log("Ban Berjalan 8-bit:", byteBelt);

// 2. Buffer Dasar (ArrayBuffer)
const buffer = new ArrayBuffer(16); // 16 byte
console.log("\nKapasitas Buffer Utama:", buffer.byteLength, "bytes");

// 3. View Berbeda pada Buffer yang Sama
const int32View = new Int32Array(buffer);
int32View[0] = 1000000;

const int16View = new Int16Array(buffer);
// Int16 akan melihat data Int32[0] sebagai dua bagian 16-bit
console.log("\nView Int32 (Index 0):", int32View[0]);
console.log("View Int16 (Dua bagian dari Int32 yang sama):", int16View[0], int16View[1]);

// 4. Iterasi Cepat
console.log("\nMemproses sabuk dengan kecepatan tinggi:");
byteBelt.forEach((val, i) => {
    console.log(`Port ${i}: Sinyal ${val}mV`);
});
