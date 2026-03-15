// C30 - Example 03: custom error class

class ValidationError extends Error {}

function validateEmail(email) {
  if (!email.includes('@')) throw new ValidationError('email invalid');
  return true;
}

try {
  validateEmail('abc');
} catch (e) {
  console.log(e.name, e.message);
}
