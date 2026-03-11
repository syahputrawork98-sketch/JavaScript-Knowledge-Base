// C06 - Arrow Function Runtime dan Evaluation
// Arrow tidak punya arguments sendiri.

function outer() {
  const arrow = () => arguments.length;
  return arrow();
}

console.log('outer() =>', outer());
console.log('outer(1, 2, 3) =>', outer(1, 2, 3));