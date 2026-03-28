/**
 * LAB: Grammar Notation & CFG Audit
 * 
 * Eksperimen ini mensimulasikan bagaimana sebuah "Token" (Terminal)
 * diproses oleh parser untuk membangun struktur sintaksis.
 */

const acorn = require('acorn'); // Hub parser simulation

const code = `if (energy > 0) { release(); }`;

console.log("--- Syntactic Grammar (AST) Audit ---");
const ast = acorn.parse(code, { ecmaVersion: 2022 });

// Menelusuri rantaian produksi IfStatement
const ifNode = ast.body[0];
console.log("Node Type (Non-terminal):", ifNode.type); // IfStatement
console.log("Test Expression Type:", ifNode.test.type); // BinaryExpression
console.log("Consequent Type:", ifNode.consequent.type); // BlockStatement

/**
 * Visualisasi Rantaian Produksi:
 * IfStatement ::= "if" "(" Expression ")" Statement
 */
console.log("\n--- Grammar Production Breakdown ---");
console.log("Terminal 'if' detected.");
console.log("Recursive Expression 'energy > 0' parsed.");
console.log("Recursive Statement '{ release(); }' parsed.");
