function divide(a, b) {
  if (b === 0) {
    throw new Error('Pembagi tidak boleh 0');
  }

  return a / b;
}

console.log(divide(10, 2));
