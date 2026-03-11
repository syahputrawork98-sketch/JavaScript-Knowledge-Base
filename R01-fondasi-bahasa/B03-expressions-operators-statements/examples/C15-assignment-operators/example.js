// C15 - Assignment Operators

let total = 10;
total += 5;
total *= 2;
console.log('total:', total);

let a;
const b = (a = 5);
console.log('a:', a, '| b:', b);

const [x, y] = [1, 2];
const { id } = { id: 10 };
console.log('x, y, id:', x, y, id);
