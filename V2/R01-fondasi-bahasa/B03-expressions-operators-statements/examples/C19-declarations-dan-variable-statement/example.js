// C19 - Declarations dan Variable Statement

const limit = 10;
let count = 0;
count += 1;

if (true) {
  var legacy = 'var bocor ke function/global scope';
  const scoped = 'hanya di block';
  console.log(scoped);
}

console.log('limit:', limit);
console.log('count:', count);
console.log('legacy:', legacy);
