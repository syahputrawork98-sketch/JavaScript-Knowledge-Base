// C12 - Example 02: bitwise masks

const READ = 1;
const WRITE = 2;
const EXEC = 4;

const perms = READ | EXEC;
console.log((perms & READ) === READ);
console.log((perms & WRITE) === WRITE);
console.log((perms & EXEC) === EXEC);
