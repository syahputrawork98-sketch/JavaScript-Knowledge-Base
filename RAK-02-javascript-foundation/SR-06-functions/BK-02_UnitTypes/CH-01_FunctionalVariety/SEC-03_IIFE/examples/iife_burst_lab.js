/**
 * LAB: IIFE (The Quick Burst Units)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Isolasi Global
// Variabel 'safeKey' tidak akan bisa diakses dari luar Hub.
(function() {
    const safeKey = "SEC-8822";
    console.log(`[INIT] Security Hub started with Key: ${safeKey}`);
})();

try {
    console.log(safeKey); 
} catch (e) {
    console.log("[SYSTEM] Blocked: Access to safeKey is forbidden from Global Grid.");
}

console.log("---");

// 2. Lanjutan: Parameterized IIFE (Dependency Injection)
// Mengirimkan objek global atau nilai tertentu ke dalam sirkuit tertutup.
(function(global, version) {
    const localConfig = { api: "https://api.hub.com", ver: version };
    
    // Mengekspos unit secara sengaja ke global
    global.HubInternalAPI = localConfig;
    
    console.log(`[INIT] API Config version ${version} injected.`);
})(this, "v2.5");

console.log("Accessible Config:", HubInternalAPI.api);

console.log("---");

// 3. Arsitektur: Returning Value (Initial State Calculation)
// Menghitung status awal Hub dan langsung menyimpannya ke variabel.
const initialEnergyStatus = (function(base, multiplier) {
    const calc = base * multiplier;
    console.log("[COMPUTE] Calculating initial energy grid...");
    return calc > 100 ? "STABLE" : "LOW_POWER";
})(50, 3);

console.log("Final Grid Status:", initialEnergyStatus);

console.log("---");

// 4. Architect Warning: The Semicolon Trap
// Kenapa penulisan ;(function()...) sering terlihat di kode profesional?
const dummy = "I am a string" // No semicolon!
;(function() {
    console.log("Safe burst with leading semicolon.");
})()
