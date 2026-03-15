// C01 - Parameter Lists Dasar dan Early Errors
// Demonstrasi urutan parameter saat pemanggilan.

function pair(first, second) {
  return { first, second };
}

function withRest(first, ...others) {
  return { first, othersCount: others.length, others };
}

console.log(pair('A', 'B'));
console.log(pair('A')); // second => undefined
console.log(pair('A', 'B', 'C')); // argumen ke-3 diabaikan

console.log(withRest('head', 'x', 'y', 'z'));