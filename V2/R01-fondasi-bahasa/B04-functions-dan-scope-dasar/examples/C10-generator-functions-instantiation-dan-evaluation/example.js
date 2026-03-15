// C10 - Generator Functions Instantiation dan Evaluation
// Alur nilai masuk dan keluar generator via next(value).

function* flow() {
  const a = yield 'step-1';
  const b = yield a + 1;
  return b + 1;
}

const it = flow();
console.log(it.next());
console.log(it.next(10));
console.log(it.next(20));