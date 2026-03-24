function showIdentity() {
  console.log(`Active Unit ID: ${this.id || "GLOBAL"}`);
}

const unitA = { id: "UNIT_A", show: showIdentity };
const unitB = { id: "UNIT_B" };

console.log("=== Contextual Energy Lab ===");
unitA.show();
showIdentity.call(unitB);
showIdentity.bind(unitA)();
