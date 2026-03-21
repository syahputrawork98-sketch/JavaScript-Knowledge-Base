/**
 * LAB: The Junction (Switch-Case Operations)
 * -----------------------------------------
 * Dalam lab ini, kita akan mengarahkan alur kerja Hub berdasarkan status spesifik.
 * Pelajari bagaimana Switch menangani banyak kondisi dengan lebih rapi.
 */

// --- BAGIAN 1: SELEKTOR MODE ---
console.log("--- Bagian 1: Seleksi Mode Hub ---");

function activateMode(mode) {
    switch (mode) {
        case "ECO":
            return "Mode Hemat Energi Aktif. Mengurangi output 50%.";
        case "BOOST":
            return "Mode Boost Aktif. Resiko panas tinggi!";
        case "NORMAL":
            return "Operasi normal berjalan.";
        default:
            return "Peringatan: Mode tidak dikenal. Kembali ke Standby.";
    }
}

console.log(activateMode("BOOST"));
console.log(activateMode("TURBO")); // Default

// --- BAGIAN 2: PENGELOMPOKAN (Shared Logic) ---
console.log("\n--- Bagian 2: Pengelompokan Case ---");

const alertLevel = 2;

switch (alertLevel) {
    case 1:
    case 2:
        console.log("Status: Warning Ringan. Kirim notifikasi ke operator.");
        break;
    case 3:
    case 4:
        console.log("Status: Warning Serius. Aktifkan protokol pengamanan.");
        break;
    default:
        console.log("Status: Aman atau sudah kritis.");
}

// --- BAGIAN 3: STRICT EQUALITY PROOF ---
console.log("\n--- Bagian 3: Bukti Persamaan Ketat (===) ---");

const code = "0"; // String "0"
switch (code) {
    case 0:
        console.log("Ini tidak akan terpanggil karena Switch menggunakan ===.");
        break;
    case "0":
        console.log("Berhasil Terpanggil! String '0' cocok dengan Input.");
        break;
}

// --- BAGIAN 4: INTENTIONAL FALLTHROUGH ---
console.log("\n--- Bagian 4: Fallthrough Sengaja ---");

/**
 * Terkadang kita ingin melewati satu case ke case berikutnya 
 * untuk menumpuk tugas (Stacking Tasks).
 */
function systemReset(step) {
    console.log(`\nMemulai Reset dari tahap ${step}:`);
    switch (step) {
        case "HARD":
            console.log("> Wipe RAM Cache...");
            // Tanpa break, lanjut ke bawah
        case "SOFT":
            console.log("> Restarting Services...");
        case "MINIMAL":
            console.log("> Syncing Database...");
            break;
    }
}

systemReset("HARD"); // Menjalankan semua
systemReset("MINIMAL"); // Hanya menjalankan Sync
