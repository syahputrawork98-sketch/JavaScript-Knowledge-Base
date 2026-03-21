/**
 * LAB: Optionality [opt] & OneOf Audit
 * 
 * Eksperimen ini membedah bagaimana parser menangani simbol opsional
 * dan pemilihan terminal (OneOf).
 */

const acorn = require('acorn');

// 1. Optionality [opt] in ReturnStatement
// ReturnStatement ::= "return" [no LineTerminator here] Expression [opt] ";"
const code1 = "return;"; 
const code2 = "return 100;";

console.log("--- Optionality [opt] Audit ---");
console.log("Code 1 (Empty return):", acorn.parse(code1, {ecmaVersion: 2022}).body[0].argument); // null
console.log("Code 2 (Value return):", acorn.parse(code2, {ecmaVersion: 2022}).body[0].argument.value); // 100

// 2. OneOf in Unary Operators
// UnaryOperator ::= one of: delete, void, typeof, +, -, ~, !
const code3 = "typeof x;";
const code4 = "!x;";

console.log("\n--- OneOf Notation Audit ---");
console.log("Op 1:", acorn.parse(code3, {ecmaVersion: 2022}).body[0].expression.operator); // typeof
console.log("Op 2:", acorn.parse(code4, {ecmaVersion: 2022}).body[0].expression.operator); // !
