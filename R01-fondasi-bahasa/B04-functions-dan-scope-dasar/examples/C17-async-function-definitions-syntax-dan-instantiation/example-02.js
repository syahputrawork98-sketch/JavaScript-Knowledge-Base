// C17 - Async Function Definitions Syntax dan Instantiation
// Async declaration bisa dipanggil dan tetap memberi Promise.

async function loadUser(name) {
  return `user:${name}`;
}

const result = loadUser('after');
console.log('loadUser returns Promise =', result instanceof Promise);
result.then((value) => {
  console.log('resolved =>', value);
});
