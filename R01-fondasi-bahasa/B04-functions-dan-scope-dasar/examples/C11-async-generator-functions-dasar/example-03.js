// C11 - Async Generator Functions Dasar
// Perbandingan async function vs async generator.

async function fetchSummary() {
  return ['a', 'b', 'c'];
}

async function* streamSummary() {
  yield 'a';
  yield 'b';
  yield 'c';
}

async function run() {
  console.log('async function =>', await fetchSummary());

  const collected = [];
  for await (const item of streamSummary()) {
    collected.push(item);
  }
  console.log('async generator =>', collected);
}

run();
