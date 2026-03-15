// C18 - Async Function Definitions Body dan Evaluation
// Eksekusi berhenti sementara saat bertemu await.

async function readFlow() {
  console.log('before await');
  const value = await Promise.resolve('done');
  console.log('after await =>', value);
}

readFlow();
