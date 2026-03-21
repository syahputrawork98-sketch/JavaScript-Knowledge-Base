/**
 * LAB: Arguments Object (The Ghost Records)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Iterasi pada Array-like Object
function sumAll() {
    let total = 0;
    // arguments tidak punya .reduce(), jadi kita gunakan loop tradisional
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log("Legacy Sum (3 args):", sumAll(10, 20, 30));
console.log("---");

// 2. Modernisasi: Konversi ke Array Asli
function processWithModernTools() {
    // Trik 1: Array.from
    const argsArray1 = Array.from(arguments);
    
    // Trik 2: Spread operator
    const argsArray2 = [...arguments];
    
    console.log("Is real array?", Array.isArray(argsArray1));
    
    // Sekarang kita bisa menggunakan metode bertenaga Array
    const doubled = argsArray1.map(x => x * 2);
    console.log("Doubled values:", doubled);
}

processWithModernTools(1, 2, 3, 4, 5);
console.log("---");

// 3. Jebakan Arrow Function
const arrowFunc = () => {
    try {
        console.log(arguments.length);
    } catch (e) {
        console.log("Error: Arrow functions don't have their own 'arguments'!");
    }
};

// Catatan: Jika dijalankan di browser/node dalam script, 
// ini mungkin mereferensikan arguments milik modul induk atau error.
arrowFunc(1, 2, 3); 

console.log("---");

// 4. Sinkronisasi Argument (Legacy Behavior)
function syncDemo(a) {
    console.log("Initial a:", a);
    console.log("Initial arguments[0]:", arguments[0]);
    
    a = "CHANGED";
    
    // Di mode non-strict, arguments[0] ikut berubah jika 'a' berubah! (KOTOR)
    console.log("New a:", a);
    console.log("New arguments[0]:", arguments[0]);
}

syncDemo("ORIGINAL");
