// C16 - Comma Operator

const result = (1, 2, 3);
console.log('result:', result);

let x = 0;
const y = (x += 1, x += 2, x);
console.log('x:', x, '| y:', y);

const normal = [1, 2, 3];
console.log('comma sebagai separator (bukan operator):', normal);
