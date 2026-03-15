// C31 - Example 03: rethrow pattern

function run() {
  try {
    throw new Error('boom');
  } catch (e) {
    console.log('logging:', e.message);
    throw e;
  }
}

try {
  run();
} catch (e) {
  console.log('handled outside:', e.message);
}
