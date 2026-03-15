// C17 - Statement Semantics Overview

function run(value) {
  if (value < 0) {
    throw new Error('value tidak boleh negatif');
  }

  if (value === 0) {
    return 'zero';
  }

  return 'positive';
}

try {
  console.log(run(2));
  console.log(run(0));
  console.log(run(-1));
} catch (error) {
  console.log('abrupt flow via throw:', error.message);
}
