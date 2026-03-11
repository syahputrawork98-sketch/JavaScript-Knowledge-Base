// C11 - Equality Operators

console.log("5 === '5':", 5 === '5');
console.log("5 == '5':", 5 == '5');
console.log('0 === false:', 0 === false);
console.log('0 == false:', 0 == false);

console.log('null == undefined:', null == undefined);
console.log('null === undefined:', null === undefined);

const n = Number('abc');
console.log('NaN === NaN:', n === n);
console.log('Number.isNaN(n):', Number.isNaN(n));
