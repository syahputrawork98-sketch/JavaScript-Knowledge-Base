// C17 - Async Function Definitions Syntax dan Instantiation
// Async function selalu mengembalikan Promise.

async function getLabel() {
  return 'async-ready';
}

const result = getLabel();
console.log('result instanceof Promise =', result instanceof Promise);
result.then((value) => {
  console.log('resolved value =', value);
});
