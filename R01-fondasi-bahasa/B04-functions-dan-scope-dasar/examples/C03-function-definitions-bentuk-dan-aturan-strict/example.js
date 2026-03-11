// C03 - Function Definitions Bentuk dan Aturan Strict
// Perbandingan declaration dan expression.

function declarationSum(a, b) {
  return a + b;
}

const expressionMultiply = function (a, b) {
  return a * b;
};

console.log('declarationSum(2, 3) =', declarationSum(2, 3));
console.log('expressionMultiply(2, 3) =', expressionMultiply(2, 3));