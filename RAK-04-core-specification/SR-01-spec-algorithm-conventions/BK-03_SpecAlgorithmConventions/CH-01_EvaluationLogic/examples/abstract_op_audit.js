/**
 * LAB: Abstract Operations & Evaluation Dispatch
 * 
 * Eksperimen ini melacak rantaian evaluasi internal.
 */

// 1. Symbol.toPrimitive vs Abstract Op: ToPrimitive
const obj = {
    [Symbol.toPrimitive](hint) {
        console.log(`[Abstract Op: ToPrimitive] Incurred with hint: ${hint}`);
        return 100;
    }
};

console.log("--- Evaluation Dispatch Audit ---");
console.log("Result of (obj + 1):", obj + 1); 

// 2. Abstract Op: Call dispatch
const func = function() { console.log("Internal [[Call]] invoked."); };
func(); // Memanggil F.[[Call]](undefined, « »)
