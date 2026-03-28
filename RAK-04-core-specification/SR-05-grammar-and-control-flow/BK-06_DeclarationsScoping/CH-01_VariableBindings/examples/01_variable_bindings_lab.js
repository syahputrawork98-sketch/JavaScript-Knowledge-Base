console.log(varSlot);

var varSlot = "hoisted";

try {
  console.log(letSlot);
} catch (error) {
  console.log(error.name);
}

let letSlot = "initialized later";

console.log(varSlot, letSlot);
