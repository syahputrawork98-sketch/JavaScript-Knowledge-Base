// C07 - Method Definitions Dasar dan Direct Super
// Delegasi super dari object yang mewarisi prototype.

const baseGreeter = {
  greet(name) {
    return `Hi ${name}`;
  }
};

const politeGreeter = {
  __proto__: baseGreeter,
  greet(name) {
    return `${super.greet(name)}. Nice to meet you.`;
  }
};

console.log(politeGreeter.greet('Arta'));