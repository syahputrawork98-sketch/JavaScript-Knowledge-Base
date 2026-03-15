// C05 - Example 03: unary plus validation

function toNumber(value) {
  const n = +value;
  return Number.isNaN(n) ? null : n;
}

console.log(toNumber('12'));
console.log(toNumber('12px'));
