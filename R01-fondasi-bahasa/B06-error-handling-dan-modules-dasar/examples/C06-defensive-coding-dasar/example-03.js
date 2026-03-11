function printUpper(text) {
  if (typeof text !== 'string') {
    throw new Error('text harus string');
  }

  return text.toUpperCase();
}

try {
  console.log(printUpper('siap'));
  console.log(printUpper(null));
} catch (error) {
  console.log('error.message ->', error.message);
}
