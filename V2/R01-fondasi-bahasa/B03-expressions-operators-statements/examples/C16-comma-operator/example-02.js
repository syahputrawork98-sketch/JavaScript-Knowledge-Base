// C16 - Example 02: comma operator behavior

let x = 0;
const out = (x += 1, x += 1, x += 1, x);

console.log(out, x);
