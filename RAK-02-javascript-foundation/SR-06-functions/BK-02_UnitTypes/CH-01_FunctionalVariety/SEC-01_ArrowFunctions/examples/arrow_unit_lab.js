/**
 * LAB: Arrow Functions (The High-Speed Interceptor)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Sintaksis Evolution
const prices = [100, 200, 300];

// Tradisional
const doubleTrad = prices.map(function(p) { return p * 2; });

// Arrow (Compact)
const doubleArrow = prices.map(p => p * 2);

console.log("Doubled Prices:", doubleArrow);
console.log("---");

// 2. Perilaku 'this': The Game Changer
const robotHub = {
    name: "Aegis-01",
    energy: 50,
    
    // Metode Tradisional: Memiliki 'this' dinamis
    reportTraditional: function() {
        console.log(`[TRAD] ${this.name} status: ${this.energy}%`);
    },
    
    // Metode Arrow: Mengambil 'this' dari lingkup luar (Global/Module)
    reportArrow: () => {
        // 'this' di sini BUKAN robotHub, tapi lingkup saat robotHub didefinisikan
        console.log(`[ARROW] ${this.name || "Unknown"} status: ${this.energy || "NaN"}%`);
    },
    
    // Solusi Callback: Dimana Arrow bersinar
    recharge: function() {
        console.log("Recharging...");
        // Arrow di dalam metode tradisional: MEMINJAM 'this' dari metode tersebut
        setTimeout(() => {
            this.energy = 100;
            console.log(`[DELAYED] ${this.name} fully recharged!`);
        }, 500);
    }
};

robotHub.reportTraditional();
robotHub.reportArrow();
robotHub.recharge();

console.log("---");

// 3. Arsitektur: No Constructor Rule
const Drone = (id) => {
    this.id = id;
};

try {
    const d1 = new Drone("D-01");
} catch (e) {
    console.log("Architect Warning: Arrow functions cannot be used as constructors!");
}

// 4. Returning Objects Implicitly
// PENTING: Bungkus dengan kurung () jika ingin return object literal secara implicit
const createPoint = (x, y) => ({ x, y });
console.log("Implicit Object:", createPoint(10, 20));
