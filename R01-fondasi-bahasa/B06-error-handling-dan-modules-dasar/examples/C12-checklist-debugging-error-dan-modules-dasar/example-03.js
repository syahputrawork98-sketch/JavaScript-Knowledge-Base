import { validateName } from './validator.js';

function createUser(name) {
  try {
    validateName(name);
    return { name };
  } catch (error) {
    console.log('cek validasi ->', error.message);
    return null;
  }
}

console.log(createUser('Alya'));
console.log(createUser(''));
