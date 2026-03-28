/**
 * LAB: Static Semantics & Early Errors
 * 
 * Eksperimen ini mendemonstrasikan bagaimana Early Errors 
 * menghentikan eksekusi sebelum baris pertama berjalan.
 */

console.log("--- Unit Started ---");

function test() {
    "use strict";
    // Early Error: Duplicate parameter name in strict mode
    // function sub(a, a) {} 
    
    // Early Error: let x; let x;
    let energy = 100;
    // let energy = 200; // Un-comment ini untuk memicu Early SyntaxError
    
    console.log("Internal Energy:", energy);
}

test();

console.log("Unit Finished.");

/**
 * Audit Note:
 * Jika Anda mengaktifkan baris yang menghasilkan SyntaxError, 
 * pesan "Unit Started" bahkan tidak akan pernah muncul di konsol.
 */
