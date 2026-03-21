/**
 * LAB: Automatic Semicolon Insertion (ASI) Audit
 * 
 * Eksperimen ini membedah 3 Aturan Emas ASI dan bahaya
 * Restricted Productions.
 */

// 1. Restricted Production: return [no LineTerminator here]
function hazard() {
    return 
    { 
        status: "success" 
    };
}

console.log("--- ASI Restricted Production Audit ---");
const result = hazard();
console.log("Result of hazard():", result); // undefined
console.log("Reason: ASI inserted ';' after 'return' due to Restricted Production rule.");

// 2. Offending Token Rule
const code = `
let a = 1
let b = 2
`;
console.log("\n--- ASI Offending Token Audit ---");
console.log("Code snippet with missing semicolons is valid because ASI inserts them before newlines.");

// 3. ASI Failure Case (Leading Parenthesis)
/**
 * let x = y
 * (async () => {})()
 * 
 * Ini akan menyebabkan error karena engine menganggap y adalah fungsi: y(...)
 */
console.log("\n--- ASI Critical Warning ---");
console.log("Always use semicolons before leading '(' or '[' to prevent ASI failure.");
