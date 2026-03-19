/**
 * LAB: Multi-thread Safety
 * Mental Model: "Multi-thread Safety (SharedArrayBuffer & Atomics)"
 * 
 * Catatan: Lab ini mendemonstrasikan sintaks. Di lingkungan nyata, 
 * data ini dibagi antara Main Thread dan Web Workers.
 */

// 1. Meja Kerja Bersama (SharedArrayBuffer)
// 4 byte untuk menampung satu Int32
const sharedStorage = new SharedArrayBuffer(4);
const sharedInt32 = new Int32Array(sharedStorage);

console.log("--- Inisialisasi Memori Bersama ---");
console.log("Nilai awal:", Atomics.load(sharedInt32, 0));

// 2. Operasi Atomik Aman (Tanpa Risiko Race Condition)
console.log("\n--- Eksekusi Operasi Atomik ---");

// Menambahkan 10 secara aman
Atomics.add(sharedInt32, 0, 10);
console.log("Setelah Atomics.add(10):", Atomics.load(sharedInt32, 0));

// Operasi Bitwise Atomik (OR)
// 10 (1010) OR 4 (0100) = 14 (1110)
Atomics.or(sharedInt32, 0, 4);
console.log("Setelah Atomics.or(4):", Atomics.load(sharedInt32, 0));

// 3. Mekanisme Tunggu & Sinyal (Wait/Notify)
// Digunakan worker untuk menunggu worker lain menyelesaikan tugas
console.log("\n[Note] Mekanisme Atomics.wait/notify aktif dalam environment Worker.");
console.log("Atomics.notify(sharedInt32, 0, 1); // Membangunkan 1 thread yang menunggu");
