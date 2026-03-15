// C10 - Generator Functions Instantiation dan Evaluation
// Manual iteration vs done check.

function* words() {
  yield 'alpha';
  yield 'beta';
}

const it = words();
let current = it.next();
while (!current.done) {
  console.log('value =>', current.value);
  current = it.next();
}
console.log('done =>', current.done);