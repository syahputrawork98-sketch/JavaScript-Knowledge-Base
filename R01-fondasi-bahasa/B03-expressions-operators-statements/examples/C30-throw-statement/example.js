// C30 - throw Statement

function divide(a, b) {
  if (b === 0) {
    throw new Error('pembagi tidak boleh 0');
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.log('error:', error.message);
}
