/**
 * LAB: BigInt & Atomics (The High-Precision Gauges)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: BigInt Beyond Limits
console.log("--- BIGINT HEAVY WEIGHT ---");
const maxSafe = Number.MAX_SAFE_INTEGER;
console.log(`Max Safe Number: ${maxSafe}`);

// Dengan Number biasa: Presisi hilang
console.log(`Unsafe Math (Number): ${maxSafe + 1 === maxSafe + 2}`); // true (Error!)

// Dengan BigInt: Presisi terjaga
const maxSafeBig = BigInt(maxSafe);
console.log(`Safe Math (BigInt):   ${maxSafeBig + 1n === maxSafeBig + 2n}`); // false (Correct!)

console.log("---");

// 2. Lanjutan: BigInt Bitwise Operations
console.log("--- BIGINT BITWISE MASKING ---");
const flag64 = 0x123456789ABCDEF0n;
const mask = 0xFFFFn;

const masked = flag64 & mask;
console.log(`Masked Value: 0x${masked.toString(16)}n`); // "0xdef0n"

console.log("---");

// 3. Arsitektur: Atomics Logic (Simulation)
console.log("--- ATOMIC COORDINATION (Logic Demo) ---");

// Membuat memori bersama (SharedArrayBuffer)
// Catatan: Di browser/node modern butuh cross-origin isolation untuk SharedArrayBuffer
const buffer = new SharedArrayBuffer(1024);
const i32Array = new Int32Array(buffer);

// Operasi Atomik: Dijamin aman meski banyak thread mengakses
Atomics.store(i32Array, 0, 100); // Set awal
console.log("Initial Atomic Load:", Atomics.load(i32Array, 0));

// Atomic Add: Menambah secara aman
const oldVal = Atomics.add(i32Array, 0, 50);
console.log(`Modified. Old: ${oldVal}, New: ${Atomics.load(i32Array, 0)}`);

// Compare Exchange: Ganti hanya jika nilai saat ini adalah 150
Atomics.compareExchange(i32Array, 0, 150, 999);
console.log("Compare Exchange Result:", Atomics.load(i32Array, 0));

console.log("---");

// 4. Architect Drill: Conversion Dangers
try {
    const num = 10;
    const big = 20n;
    console.log(num + big); // Akan melempar TypeError
} catch (e) {
    console.warn("[ARCHITECT WARNING] Tidak bisa mencampur Number dan BigInt tanpa konversi eksplisit.");
}
