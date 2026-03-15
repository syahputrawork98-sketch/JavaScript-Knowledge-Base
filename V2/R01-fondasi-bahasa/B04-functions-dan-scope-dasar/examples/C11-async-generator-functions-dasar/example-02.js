// C11 - Async Generator Functions Dasar
// Async generator bisa memakai await di antara yield.

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function* delayedMessages() {
  await wait(10);
  yield 'first';
  await wait(10);
  yield 'second';
}

async function run() {
  for await (const item of delayedMessages()) {
    console.log(item);
  }
}

run();
