function divide(a, b) {
  if (b === 0) {
    throw new Error('Pembagi tidak boleh 0');
  }

  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log('error.message ->', error.message);
}
