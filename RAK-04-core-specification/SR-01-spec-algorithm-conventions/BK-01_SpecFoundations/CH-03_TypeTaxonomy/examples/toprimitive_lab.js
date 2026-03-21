/**
 * LAB: ToPrimitive Conversion & Type Taxonomy
 * 
 * Eksperimen ini membedah mekanisme "Abstract Operation: ToPrimitive"
 * yang mengubah objek menjadi nilai atomik.
 */

const architectObj = {
    value: 42,
    [Symbol.toPrimitive](hint) {
        console.log(`[ToPrimitive Operating] Current Hint: ${hint}`);
        if (hint === "string") return `{Structure: ${this.value}}`;
        return this.value;
    }
};

// 1. ToPrimitive with "number" hint
console.log("--- ToPrimitive Audit: Number Hint ---");
console.log(architectObj + 10); // 52

// 2. ToPrimitive with "string" hint
console.log("\n--- ToPrimitive Audit: String Hint ---");
console.log(`Resource: ${architectObj}`); // Resource: {Structure: 42}

// 3. Default Hint
console.log("\n--- ToPrimitive Audit: Default Hint ---");
console.log(architectObj == 42); // true

// 4. Primitive Identity vs Object Identity
console.log("\n--- Identity Taxonomy Audit ---");
console.log("01" === 1); // false (Language Types must match)
console.log("Are two empty objects identical?", {} === {}); // false
