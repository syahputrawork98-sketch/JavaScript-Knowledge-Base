// C30 - Example 02: throw validation error

function ensurePositive(n) {
  if (n <= 0) throw new Error('must be positive');
  return n;
}

try {
  console.log(ensurePositive(5));
  console.log(ensurePositive(0));
} catch (e) {
  console.log(e.message);
}
