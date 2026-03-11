// C05 - Arrow Function Bentuk dan Early Errors
// Perbedaan concise body dan block body.

const add = (a, b) => a + b;
const describe = (name) => {
  const upper = name.toUpperCase();
  return `User: ${upper}`;
};

console.log('add(2, 5) =', add(2, 5));
console.log(describe('syahputra'));