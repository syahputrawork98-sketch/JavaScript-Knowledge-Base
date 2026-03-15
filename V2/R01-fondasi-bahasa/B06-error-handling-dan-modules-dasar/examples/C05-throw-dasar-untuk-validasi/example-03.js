function printUpper(text) {
  if (typeof text !== 'string') {
    throw new Error('text harus string');
  }

  return text.toUpperCase();
}

try {
  console.log(printUpper('halo'));
  console.log(printUpper(123));
} catch (error) {
  console.log('error.message ->', error.message);
}
