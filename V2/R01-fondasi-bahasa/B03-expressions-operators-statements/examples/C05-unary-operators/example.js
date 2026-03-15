// C05 - Unary Operators

console.log("+'42':", +'42');
console.log("-'5':", -'5');

console.log('!0:', !0);
console.log("!!'ok':", !!'ok');

const obj = { active: true };
console.log('typeof obj:', typeof obj);
console.log('void 0:', void 0);

delete obj.active;
console.log('after delete:', obj);
