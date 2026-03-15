// C23 - Iteration Statements

for (let i = 0; i < 3; i++) {
  console.log('for:', i);
}

let n = 0;
while (n < 2) {
  console.log('while:', n);
  n += 1;
}

do {
  console.log('do while jalan minimal sekali');
} while (false);

for (const value of ['a', 'b']) {
  console.log('for...of value:', value);
}

for (const key in { x: 1, y: 2 }) {
  console.log('for...in key:', key);
}
