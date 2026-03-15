// C12 - Async Generator Functions Instantiation dan Evaluation
// Manual iteration menampilkan value dan done secara eksplisit.

async function* tasks() {
  yield 'compile';
  yield 'test';
  return 'deploy';
}

async function run() {
  const iterator = tasks();
  console.log(await iterator.next());
  console.log(await iterator.next());
  console.log(await iterator.next());
}

run();
