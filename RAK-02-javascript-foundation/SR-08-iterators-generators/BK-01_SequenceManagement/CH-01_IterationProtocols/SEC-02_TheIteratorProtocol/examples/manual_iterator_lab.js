/**
 * LAB: The Iterator Protocol (The Sequential Puller)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Manual Pulling dari Array
const energyLogs = ["LOG-A", "LOG-B"];
const puller = energyLogs[Symbol.iterator]();

console.log("Pull 1:", puller.next()); // { value: 'LOG-A', done: false }
console.log("Pull 2:", puller.next()); // { value: 'LOG-B', done: false }
console.log("Pull 3 (Exhausted):", puller.next()); // { value: undefined, done: true }

console.log("---");

// 2. Lanjutan: Membuat Custom Iterator
// Sebuah unit yang menghasilkan angka genap secara berurutan.
function createEvenIterator(limit) {
    let nextValue = 0;
    
    // Objek ini mengikuti Iterator Protocol karena punya next()
    return {
        next() {
            if (nextValue <= limit) {
                const result = { value: nextValue, done: false };
                nextValue += 2;
                return result;
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}

const evenPuller = createEvenIterator(6);
console.log("Custom Pull 1:", evenPuller.next());
console.log("Custom Pull 2:", evenPuller.next());
console.log("Custom Pull 3:", evenPuller.next());
console.log("Custom Pull 4:", evenPuller.next());
console.log("Custom Pull 5:", evenPuller.next());

console.log("---");

// 3. Arsitektur: Iterator as a State Machine
// Iterator melacak kemajuan tanpa variabel global.
const countdown = (start) => {
    let count = start;
    return {
        next() {
            return count >= 0 
                ? { value: count--, done: false } 
                : { value: "LIFTOFF", done: true };
        }
    };
};

const missionTimer = countdown(3);
let step = missionTimer.next();

while(!step.done) {
    console.log(`T-Minus: ${step.value}`);
    step = missionTimer.next();
}
console.log("Status:", step.value);
