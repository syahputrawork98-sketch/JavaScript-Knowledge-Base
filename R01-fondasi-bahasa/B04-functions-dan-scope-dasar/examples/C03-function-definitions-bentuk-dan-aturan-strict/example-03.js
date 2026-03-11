// C03 - Function Definitions Bentuk dan Aturan Strict
// Named function expression membantu stack trace/debugging.

const calculator = function compute(a, b) {
  return a - b;
};

console.log('calculator(9, 4) =', calculator(9, 4));

try {
  // compute tidak tersedia di outer scope.
  console.log(compute(9, 4));
} catch (error) {
  console.log('outer access to compute =>', error.name);
}