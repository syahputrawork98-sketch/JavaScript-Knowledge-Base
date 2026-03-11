// C12 - Async Generator Functions Instantiation dan Evaluation
// return() menghentikan async iterator lebih awal.

async function* queue() {
  yield 'job-1';
  yield 'job-2';
  yield 'job-3';
}

async function run() {
  const iterator = queue();
  console.log(await iterator.next());
  console.log(await iterator.return('stopped'));
  console.log(await iterator.next());
}

run();
