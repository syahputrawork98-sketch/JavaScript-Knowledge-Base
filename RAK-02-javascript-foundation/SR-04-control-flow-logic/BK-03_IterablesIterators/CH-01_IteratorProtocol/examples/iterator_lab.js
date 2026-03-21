/**
 * LAB: The Manual Feed (Iterator & Generator)
 * ------------------------------------------
 * Dalam lab ini, kita akan membangun sistem penyuap kargo manual.
 * Pelajari bagaimana Iterator memberikan data satu per satu secara efisien.
 */

// --- BAGIAN 1: ITERATOR MANUAL (The Protocol) ---
console.log("--- Bagian 1: Protokol Kerja Iterator ---");

const manualFeed = {
    data: ["Fuel", "Iron", "Oxygen"],
    index: 0,
    next() {
        if (this.index < this.data.length) {
            return { value: this.data[this.index++], done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
};

console.log(manualFeed.next()); // { value: 'Fuel', done: false }
console.log(manualFeed.next()); // { value: 'Iron', done: false }
console.log(manualFeed.next()); // { value: 'Oxygen', done: false }
console.log(manualFeed.next()); // { value: undefined, done: true }

// --- BAGIAN 2: GENERATOR (Otomasi Penyuap) ---
console.log("\n--- Bagian 2: Generator Energi (yield) ---");

/**
 * Generator mempermudah pembuatan iterator kompleks.
 * Eksekusi 'berhenti' di setiap kata kunci yield.
 */
function* powerGenerator() {
    console.log("> Memproduksi Energi Rendah...");
    yield "500W";
    
    console.log("> Memproduksi Energi Sedang...");
    yield "1500W";
    
    console.log("> Memproduksi Energi Puncak...");
    yield "5000W";
}

const gen = powerGenerator();
console.log(gen.next().value); // 500W
console.log(gen.next().value); // 1500W

// --- BAGIAN 3: LAZY EVALUATION (Infinite Data) ---
console.log("\n--- Bagian 3: Aliran Data Tak Terhingga ---");

function* infinitePulse() {
    let id = 1;
    while (true) {
        yield `PULSE-${id++}`;
    }
}

const pulse = infinitePulse();
console.log(pulse.next().value); // PULSE-1
console.log(pulse.next().value); // PULSE-2
console.log(pulse.next().value); // PULSE-3
// Meskipun loop 'while(true)', Hub tidak akan crash karena data hanya diproses saat diminta.

// --- BAGIAN 4: ITERABLE OBJECTS ---
console.log("\n--- Bagian 4: Custom Iterable ---");

const collection = {
    items: ["Cargo-A", "Cargo-B", "Cargo-C"],
    // Pintu rahasia agar bisa digunakan di for...of
    *[Symbol.iterator]() {
        for (const item of this.items) {
            yield item;
        }
    }
};

for (const cargo of collection) {
    console.log(`> Mengangkut: ${cargo}`);
}
