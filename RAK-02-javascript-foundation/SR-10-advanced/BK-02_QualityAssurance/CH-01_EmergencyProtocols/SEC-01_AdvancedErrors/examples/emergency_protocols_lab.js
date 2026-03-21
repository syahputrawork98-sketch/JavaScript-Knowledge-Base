/**
 * LAB: Advanced Errors (The Nested Fuses)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Custom Error Hierarchy
class HubError extends Error {
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
        this.timestamp = new Date();
    }
}

class NetworkTimeoutError extends HubError {}
class DatabaseCorruptionError extends HubError {}

// 2. Lanjutan: Error Chaining (ES2022 cause)
async function fetchFromSubGrid() {
    try {
        // Simulasi kegagalan tingkat rendah
        throw new TypeError("Gagal membaca aliran bit mentah.");
    } catch (lowLevelErr) {
        // Bungkus dengan context tingkat tinggi
        throw new NetworkTimeoutError("Sub-Grid tidak merespon tepat waktu.", { 
            cause: lowLevelErr 
        });
    }
}

// 3. Arsitektur: Main Emergency Protocol
async function runEmergencyProtocol() {
    console.log("--- STARTING MISSION-CRITICAL OPERATION ---");
    let resourceInUse = true;

    try {
        await fetchFromSubGrid();
    } catch (err) {
        console.error(`[ALERT] Terjadi kesalahan: ${err.message}`);
        
        // Memeriksa akar masalah (The Cause)
        if (err.cause) {
            console.warn(`[DIAGNOSTIC] Akar masalah: ${err.cause.name} - ${err.cause.message}`);
        }

        // Penanganan spesifik berdasarkan tipe
        if (err instanceof NetworkTimeoutError) {
            console.log("[RECOVERY] Mencoba menghubungkan kembali ke jalur cadangan...");
        }
    } finally {
        // Tim pembersih selalu datang
        resourceInUse = false;
        console.log("[CLEANUP] Melepaskan beban energi. Status resource in use:", resourceInUse);
        console.log("--- OPERATION TERMINATED ---");
    }
}

runEmergencyProtocol();

console.log("---");

// 4. Architect Drill: Nested Try-Catch For Partial Failure
function complexTask() {
    try {
        console.log("Proses Utama Dimulai...");
        
        try {
            console.log("Sub-tugas: Membersihkan Cache...");
            throw new Error("Disk Penuh!");
        } catch (subErr) {
            console.warn("Sub-tugas gagal, tapi proses utama bisa lanjut:", subErr.message);
        }

        console.log("Melanjutkan operasi utama...");
    } catch (mainErr) {
        console.error("Proses Utama Gagal Total!", mainErr.message);
    }
}

complexTask();
