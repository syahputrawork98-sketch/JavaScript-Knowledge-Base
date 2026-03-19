/**
 * LAB: Master Clock Syncing
 * Mental Model: "The Master Clock (Date)"
 */

// 1. Membaca Jam Sekarang
const now = new Date();
console.log("Waktu Hub Saat Ini (String):", now.toString());
console.log("Timestamp Energi (ms):", now.getTime());

// 2. Konstruksi Titik Waktu Spesifik
const systemLaunch = new Date(2025, 0, 1, 12, 0, 0); // 1 Jan 2025 jam 12:00
console.log("\nInisialisasi Hub Pertama:", systemLaunch.toDateString());

// 3. Kalkulasi Durasi (Uptime)
const uptimeMs = now - systemLaunch;
const uptimeDays = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));
console.log("Total Uptime Hub:", uptimeDays, "hari");

// 4. Manipulasi Waktu
const nextMaintenance = new Date();
nextMaintenance.setDate(now.getDate() + 30); // 30 hari lagi
console.log("\nJadwal Pemeliharaan Berikutnya:", nextMaintenance.toISOString());

// 5. Perbandingan Sinyal Waktu
if (now > systemLaunch) {
    console.log("Status: Hub beroperasi setelah peluncuran resmi.");
}
