// C10 - Example 03: instanceof caveat basic

function User() {}
const u = new User();

console.log(u instanceof User);
console.log(u instanceof Object);
