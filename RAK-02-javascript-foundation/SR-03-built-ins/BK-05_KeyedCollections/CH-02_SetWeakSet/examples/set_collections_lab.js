/**
 * LAB: The Verification Gate (Set & WeakSet)
 * -----------------------------------------
 * Dalam lab ini, kita akan membangun sistem filter untuk mencegah duplikasi
 * ID unit energi di Hub menggunakan Set.
 */

// --- BAGIAN 1: SET (Unique Collection) ---
console.log("--- Bagian 1: Penggunaan Set ---");

const visitorIDs = new Set();

visitorIDs.add("ID-001");
visitorIDs.add("ID-002");
visitorIDs.add("ID-001"); // Mencoba menambah duplikasi

console.log(`Daftar Pengunjung:`, [...visitorIDs]);
console.log(`Jumlah Pengunjung Unik: ${visitorIDs.size}`); // Tetap 2

// --- BAGIAN 2: DEDUPLIKASI ARRAY (Shortcut) ---
console.log("\n--- Bagian 2: Shortcut Deduplikasi ---");

const rawLogs = ["LOG-A", "LOG-B", "LOG-A", "LOG-C", "LOG-B"];
const uniqueLogs = [...new Set(rawLogs)]; // Trik paling populer di JS

console.log(`Logs Mentah: ${rawLogs.length}`);
console.log(`Logs Unik: ${uniqueLogs.length} (${uniqueLogs})`);

// --- BAGIAN 3: OPERASI HIMPUNAN (Logic) ---
console.log("\n--- Bagian 3: Operasi Himpunan ---");

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Intersection (Irisan)
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(`Irisan A & B:`, [...intersection]);

// --- BAGIAN 4: WEAKSET (Object Tracking) ---
console.log("\n--- Bagian 4: WeakSet (Proteksi Memori) ---");

/**
 * WeakSet hanya bisa menyimpan OBJEK.
 * Berguna untuk menandai objek yang sedang diproses tanpa mencegahnya
 * terkena Garbage Collection.
 */
const processedNodes = new WeakSet();
let nodeA = { name: "Antenna-1" };

processedNodes.add(nodeA);
console.log(`Apakah Antenna-1 sudah diproses? ${processedNodes.has(nodeA)}`);

nodeA = null; // Menghapus referensi, membiarkan memori dibersihkan
console.log("Referensi node dihapus. WeakSet akan melepaskannya otomatis.");

// --- BAGIAN 5: ITERASI ---
console.log("\n--- Bagian 5: Iterasi Set ---");
visitorIDs.forEach(id => {
    console.log(`> Memindai Gerbang untuk Pengunjung: ${id}`);
});
