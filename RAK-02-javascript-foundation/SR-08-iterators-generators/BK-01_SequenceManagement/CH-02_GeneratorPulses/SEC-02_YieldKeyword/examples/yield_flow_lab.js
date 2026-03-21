/**
 * LAB: The yield Keyword (The Flow Regulator)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Bidirectional Communication
function* smartAssistant() {
    const name = yield "Hello! System online. What is your name?";
    const task = yield `Greeting ${name}. What task shall I perform?`;
    yield `Executing ${task} for operator ${name}... Done.`;
}

const bot = smartAssistant();

// START (First next() never receives data)
console.log("Assistant:", bot.next().value);

// INPUT 1: Send Name
console.log("Assistant:", bot.next("Artdarkman").value);

// INPUT 2: Send Task
console.log("Assistant:", bot.next("Grid Optimization").value);

console.log("---");

// 2. Lanjutan: Reactive Processing
function* powerMultiplier() {
    let base = 10;
    while(true) {
        // yield base, then wait for a multiplier from outside
        const multiplier = yield base;
        if (multiplier) {
            base *= multiplier;
        } else {
            base++; // Default increment
        }
    }
}

const calc = powerMultiplier();
console.log("Initial Power:", calc.next().value); // 10
console.log("Default Bump:", calc.next().value); // 11
console.log("Applying X2 Multiplier:", calc.next(2).value); // 22
console.log("Applying X10 Multiplier:", calc.next(10).value); // 220

console.log("---");

// 3. Arsitektur: Error Injection (.throw)
function* stableCore() {
    try {
        yield "Core is STABLE.";
        yield "Core is STABLE.";
        yield "Core is STABLE.";
    } catch (e) {
        console.error(`!!! ALARM !!! Core received external error: ${e.message}`);
        yield "EMERGENCY SHUTDOWN INITIATED.";
    }
}

const core = stableCore();
console.log("Monitor:", core.next().value);
console.log("Monitor:", core.next().value);

// Injecting error from outside
console.log("Monitor:", core.throw(new Error("Coolant Leak Detected!")).value);

console.log("---");

// 4. Architect Alert: Forced Return
const volatileGen = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();

console.log(volatileGen.next().value); // 1
console.log(volatileGen.return("OVERRIDE").value); // Terminate early
console.log(volatileGen.next().done); // true
