/**
 * LAB: Function Engine Unit
 * Mental Model: "The Engine Unit"
 */

function energyTransformer(input, factor) {
    return input * factor;
}

// 1. Properti Mesin (name & length)
console.log("Nama Mesin:", energyTransformer.name);
console.log("Jumlah Input yang Dibutuhkan:", energyTransformer.length);

// 2. Konfigurasi Dinamis (Bind)
// Menciptakan varian mesin yang selalu mengalikan dengan 2
const doubleTransformer = energyTransformer.bind(null, 2);

console.log("Output Mesin Standar (10 x 3):", energyTransformer(10, 3));
console.log("Output Mesin Konfigurasi (Varian Double):", doubleTransformer(10));

// 3. Eksekusi Jarak Jauh (Apply)
const powerParams = [100, 1.5];
console.log("Eksekusi dengan Parameter Array:", energyTransformer.apply(null, powerParams));
