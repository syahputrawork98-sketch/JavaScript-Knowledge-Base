// C11 - Async Generator Functions Dasar
// Async generator dasar yang menghasilkan nilai bertahap.

async function* ids() {
  yield 101;
  yield 102;
  yield 103;
}

async function run() {
  for await (const id of ids()) {
    console.log('id =>', id);
  }
}

run();
