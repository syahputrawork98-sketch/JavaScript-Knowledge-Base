/**
 * LAB: The Chronometer (Date Object)
 * ----------------------------------
 * Dalam lab ini, kita akan mengukur aliran waktu di Hub Energi,
 * mulai dari detik saat ini hingga jadwal pemeliharaan masa depan.
 */

// --- BAGIAN 1: PEMBACAAN KRONOMETER ---
console.log("--- Bagian 1: Waktu Sekarang ---");

const now = new Date();
console.log(`Waktu Lokal: ${now.toString()}`);
console.log(`Waktu UTC (ISO): ${now.toISOString()}`);
console.log(`Unix Timestamp: ${now.getTime()} ms`);

// --- BAGIAN 2: EKSTRAKSI KOMPONEN ---
console.log("\n--- Bagian 2: Ekstraksi Data Spesifik ---");
console.log(`Tahun: ${now.getFullYear()}`);
console.log(`Bulan: ${now.getMonth() + 1} (Januari=1, tapi di JS=0)`);
console.log(`Tanggal: ${now.getDate()}`);
console.log(`Hari ke: ${now.getDay()} (Minggu=0)`);

// --- BAGIAN 3: MANIPULASI WAKTU (Time Travel) ---
console.log("\n--- Bagian 3: Penjadwalan Masa Depan ---");

const nextMaintenance = new Date();
nextMaintenance.setDate(now.getDate() + 7); // Menambah 7 hari
nextMaintenance.setHours(2, 0, 0, 0);       // Mengatur ke jam 02:00 pagi

console.log(`Jadwal Maintenance Berikutnya: ${nextMaintenance.toLocaleDateString()}`);
console.log(`Pukul: ${nextMaintenance.toLocaleTimeString()}`);

// --- BAGIAN 4: PENGHITUNGAN SELISIH ---
console.log("\n--- Bagian 4: Sisa Waktu ---");

const timeDiff = nextMaintenance.getTime() - now.getTime(); // Selisih dalam milidetik
const hoursRemaining = Math.floor(timeDiff / (1000 * 60 * 60));

console.log(`Sisa Waktu: ${hoursRemaining} Jam lagi.`);

// --- BAGIAN 5: FORMAT KUSTOM ---
console.log("\n--- Bagian 5: Format Laporan Hub ---");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(`Laporan dicetak pada: ${now.toLocaleDateString('id-ID', options)}`);
