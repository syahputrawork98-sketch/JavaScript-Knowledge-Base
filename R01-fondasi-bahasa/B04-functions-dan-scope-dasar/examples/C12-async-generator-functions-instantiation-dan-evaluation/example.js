// C12 - Async Generator Functions Instantiation dan Evaluation
// next() pada async generator mengembalikan Promise.

async function* flow() {
  const received = yield 'step-1';
  yield received + 1;
}

async function run() {
  const iterator = flow();
  console.log(await iterator.next());
  console.log(await iterator.next(10));
  console.log(await iterator.next());
}

run();
