let total = 2;
total += 3;

const packet = { x: 1, y: 2 };
const { x } = packet;
const result = (total += 1, x * total);

console.log(total, x, result);
