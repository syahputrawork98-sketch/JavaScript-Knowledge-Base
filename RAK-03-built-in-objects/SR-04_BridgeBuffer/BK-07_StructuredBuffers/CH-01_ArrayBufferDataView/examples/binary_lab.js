/**
 * LAB: Memory Buffer Microscope
 * Mental Model: "Memory Access (ArrayBuffer & DataView)"
 */

// 1. Alokasi Memori Murni (8 Byte)
const buffer = new ArrayBuffer(8);

// 2. Mikroskop Granular (DataView)
const view = new DataView(buffer);

console.log("--- Menulis ke Memori Mentah ---");
// Byte 0: Angka 8-bit
view.setUint8(0, 255); 
// Byte 1-4: Angka 32-bit (Floating point)
view.setFloat32(1, 3.14159);

// 3. Membaca dengan Konsistensi Endianness
// Little Endian (true) vs Big Endian (false/default)
view.setUint16(5, 0x1234, true); // Little Endian

console.log("Byte 0 (Uint8):", view.getUint8(0));
console.log("Byte 1-4 (Float32):", view.getFloat32(1));
console.log("Byte 5-6 (Uint16, Little Endian):", view.getUint16(5, true).toString(16));

// 4. Perbandingan dengan TypedArray
console.log("\n--- Perbandingan Akses ---");
const uint8View = new Uint8Array(buffer);
console.log("Isi Buffer (Uint8):", uint8View);
