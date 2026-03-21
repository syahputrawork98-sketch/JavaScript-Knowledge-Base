/**
 * LAB: Completion Records & Bubble-up Logic
 * 
 * Eksperimen ini mensimulasikan bagaimana Completion Record 
 * bertipe 'Throw' merambat ke atas.
 */

function level3() {
    console.log("[Level 3] Throwing Abrupt Completion...");
    throw new Error("Sirkuit Terputus!");
}

function level2() {
    console.log("[Level 2] Calling Level 3...");
    level3();
    console.log("[Level 2] This line will never execute.");
}

function level1() {
    try {
        console.log("[Level 1] Calling Level 2...");
        level2();
    } catch (e) {
        console.log("[Level 1] Caught Abrupt Completion. Converting to Normal Completion.");
        console.log("Error Message:", e.message);
    }
}

console.log("--- Completion Record Audit ---");
level1();
