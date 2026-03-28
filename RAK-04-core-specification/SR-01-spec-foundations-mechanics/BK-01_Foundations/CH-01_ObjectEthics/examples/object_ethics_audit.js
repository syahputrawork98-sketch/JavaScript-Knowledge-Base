/**
 * LAB: Object Ethics & Internal Methods Audit
 * 
 * Eksperimen ini mendemonstrasikan perbedaan antara Ordinary Object 
 * dan Exotic Object (Proxy) dengan menginspeksi interupsi metode internal [[Get]].
 */

// 1. Ordinary Object (Default [[Get]] behavior)
const ordinary = { energy: 100 };
console.log("--- Ordinary Object Audit ---");
console.log("Accessing 'energy':", ordinary.energy); // Memanggil [[Get]] standar

// 2. Exotic Object (Proxy - Overriding [[Get]])
const exotic = new Proxy(ordinary, {
    get(target, prop, receiver) {
        console.log(`[Proxy Trap] Intercepting [[Get]] for property: ${prop}`);
        return prop in target ? target[prop] : "Energy not found";
    }
});

console.log("\n--- Exotic Object (Proxy) Audit ---");
console.log("Accessing 'energy':", exotic.energy);
console.log("Accessing 'unknown':", exotic.unknown);

// 3. Inheritance Audit (Delegatve Internal Method)
const child = Object.create(exotic);
console.log("\n--- Prototypal Inheritance Audit ---");
console.log("Accessing 'energy' from child:", child.energy); 
// Penjelasan: 
// 1. child.[[Get]]("energy") dipanggil.
// 2. Tidak ditemukan di 'child', panggil [[Get]] di Prototype (exotic).
// 3. Proxy trap di 'exotic' terpicu.
