// C18 - Async Function Definitions Body dan Evaluation
// Async function expression baru tersedia setelah assignment dievaluasi.

try {
  console.log(sum(4, 5));
} catch (error) {
  console.log('before assignment =>', error.name, '->', error.message);
}

const sum = async function (a, b) {
  return a + b;
};

sum(4, 5).then((value) => {
  console.log('after assignment =>', value);
});
