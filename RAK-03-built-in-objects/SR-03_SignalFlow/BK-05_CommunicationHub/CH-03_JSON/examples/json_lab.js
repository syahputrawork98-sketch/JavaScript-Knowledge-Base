/**
 * LAB: Universal Data Exchange
 * Mental Model: "Universal Exchange (JSON)"
 */

const hubStatus = {
    id: "HUB-MAIN-01",
    online: true,
    nodes: ["Node-A", "Node-B"],
    lastSync: new Date(),
    internalKey: "SEC-998811" // Data rahasia
};

// 1. Serialization (Stringify)
// Kita hanya ingin mengirim id, online, dan nodes. internalKey harus dibuang.
const transmission = JSON.stringify(hubStatus, ["id", "online", "nodes"], 4);

console.log("--- Paket Data Siap Kirim (JSON) ---");
console.log(transmission);

// 2. Deserialization (Parse)
const receivedMessage = '{"id":"HUB-REMOTE-02","status":"ACTIVE","energy":850}';
const parsedData = JSON.parse(receivedMessage);

console.log("\n--- Data Diterima (Object) ---");
console.log("ID Remote:", parsedData.id);
console.log("Energi terukur:", parsedData.energy, "kWh");

// 3. Menggunakan Reviver (Transformasi saat Parse)
const syncMessage = '{"id":"NODE-1","time":"2026-03-19T10:00:00Z"}';
const synced = JSON.parse(syncMessage, (key, value) => {
    if (key === "time") return new Date(value); // Ubah string ISO jadi objek Date
    return value;
});

console.log("\n--- Sinkronisasi Waktu ---");
console.log("Tipe data '.time':", typeof synced.time); // object (Date)
console.log("Tahun sinkronisasi:", synced.time.getFullYear());
