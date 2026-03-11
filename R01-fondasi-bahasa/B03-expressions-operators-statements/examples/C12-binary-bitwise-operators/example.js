// C12 - Binary Bitwise Operators

console.log('5 & 3:', 5 & 3);
console.log('5 | 3:', 5 | 3);
console.log('5 ^ 3:', 5 ^ 3);

const read = 1;   // 001
const write = 2;  // 010
const flags = read | write;

console.log('flags:', flags);
console.log('has read:', (flags & read) === read);
console.log('has write:', (flags & write) === write);
