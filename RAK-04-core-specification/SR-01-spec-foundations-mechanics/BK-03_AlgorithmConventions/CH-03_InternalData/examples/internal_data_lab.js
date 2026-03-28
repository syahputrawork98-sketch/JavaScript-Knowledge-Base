/**
 * LAB: Internal Records & Lists Audit
 * 
 * Eksperimen ini mensimulasikan struktur Record internal 
 * yang digunakan untuk Environment Records.
 */

const environmentRecord = {
    "[[OuterEnv]]": null,
    "[[BindingList]]": new Map(),
    
    createBinding(name) {
        this["[[BindingList]]"].set(name, {
            "[[Value]]": undefined,
            "[[Mutable]]": true
        });
        console.log(`[Env Record] Binding created for: ${name}`);
    },
    
    setBinding(name, value) {
        if (this["[[BindingList]]"].has(name)) {
            this["[[BindingList]]"].get(name)["[[Value]]"] = value;
            console.log(`[Env Record] Value set for ${name}:`, value);
        }
    }
};

console.log("--- Internal Data Structure Simulation ---");
environmentRecord.createBinding("energy");
environmentRecord.setBinding("energy", 5000);
console.log("Current State:", environmentRecord["[[BindingList]]"].get("energy"));
