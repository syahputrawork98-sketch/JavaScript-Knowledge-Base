// C26 - return Statement

function classify(score) {
  if (score == null) return 'invalid';
  if (score >= 75) return 'lulus';
  return 'remedial';
}

console.log(classify(80));
console.log(classify(50));
console.log(classify(null));

function noReturn() {}
console.log('noReturn():', noReturn());
