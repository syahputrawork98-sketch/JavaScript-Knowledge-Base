// C18 - Async Function Definitions Body dan Evaluation
// Throw di async function mengubah Promise menjadi rejected.

async function failTask() {
  throw new Error('task failed');
}

failTask().catch((error) => {
  console.log('caught =>', error.message);
});
