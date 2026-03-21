/**
 * LAB: The Global Store (NPM Introduction)
 * ---------------------------------------
 * Dalam lab ini, kita akan mensimulasikan interaksi dengan 
 * Toko Global (NPM) untuk melengkapi komponen Hub kita.
 */

// --- BAGIAN 1: IDENTITAS HUB ---
console.log("--- Bagian 1: Inisialisasi Proyek ---");
console.log("Jalankan: npm init -y");
console.log("Hasil: File 'package.json' akan tercipta sebagai manifes.");

// --- BAGIAN 2: PENGAMBILAN KOMPONEN ---
console.log("\n--- Bagian 2: Instalasi Komponen ---");
console.log("Jalankan: npm install lodash");
console.log("Aksi: npm mengunduh paket 'lodash' ke folder 'node_modules'.");

// --- BAGIAN 3: SEMANTIC VERSIONING (SemVer) ---
console.log("\n--- Bagian 3: Membaca Kode Versi ---");

function interpretVersion(version) {
    const [major, minor, patch] = version.split(".");
    console.log(`Versi: ${version}`);
    console.log(`> Major (${major}): Perubahan besar/merusak.`);
    console.log(`> Minor (${minor}): Fitur baru yang aman.`);
    console.log(`> Patch (${patch}): Perbaikan bug kecil.`);
}

interpretVersion("2.4.1");

// --- BAGIAN 4: NPX (Executer) ---
console.log("\n--- Bagian 4: Penggunaan Alat Sekali Pakai (npx) ---");
console.log("Jalankan: npx cowsay 'Hello Hub!'");
console.log("Aksi: npm mendownload, menjalankan, lalu menghapus alat 'cowsay'.");

// --- BAGIAN 5: AUDIT KEAMANAN ---
console.log("\n--- Bagian 5: Audit Sirkuit ---");
console.log("Jalankan: npm audit");
console.log("Aksi: Memeriksa apakah ada komponen yang memiliki virus/celah keamanan.");

/*
  ARSITEK TIPS:
  'node_modules' bisa menjadi sangat berat. Jangan pernah 
  mengirim folder ini ke Cloud (GitHub). Gunakan .gitignore!
*/
