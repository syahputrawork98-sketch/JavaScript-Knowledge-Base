/**
 * LAB: Property Descriptors & Internal State
 * 
 * Eksperimen ini membedah Record internal [[PropertyDescriptor]] 
 * dan atribut pengamanannya.
 */

const server = {
    status: "online",
    port: 8080
};

// 1. Audit Descriptor
console.log("--- Property Descriptor Audit ---");
console.log(Object.getOwnPropertyDescriptor(server, "status"));

// 2. Creating a "Locked" Property (Architect level)
Object.defineProperty(server, "secretKey", {
    value: "HUBS-X99",
    writable: false,
    enumerable: false,
    configurable: false
});

console.log("\n--- Encapsulation Check ---");
console.log("Is 'secretKey' visible in keys?", Object.keys(server).includes("secretKey"));
try {
    server.secretKey = "NEW-KEY"; // Akan gagal jika writable: false
} catch (e) {
    console.log("Update failed (Strict mode behavior)");
}
console.log("Secret Key value:", server.secretKey);

// 3. Object Lockdown (Internal Slot [[Extensible]] = false)
Object.preventExtensions(server);
console.log("\n--- Object Extension Audit ---");
console.log("Is extensible?", Object.isExtensible(server));
server.newProp = "denied";
console.log("Was newProp added?", "newProp" in server);
