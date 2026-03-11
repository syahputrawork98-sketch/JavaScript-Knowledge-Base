const fruits = ['apple', 'banana'];

function safeAddFruit(list) {
  const copied = list.slice();
  copied.push('mango');
  return copied;
}

const result = safeAddFruit(fruits);

console.log('fruits ->', fruits);
console.log('result ->', result);
