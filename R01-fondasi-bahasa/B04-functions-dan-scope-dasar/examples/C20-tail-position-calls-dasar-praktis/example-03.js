// C20 - Tail Position Calls Dasar Praktis
// Rekursi tail-style lebih mudah dikenali saat nilai akhir langsung diteruskan.

function factorialTail(n, acc = 1) {
  if (n <= 1) {
    return acc;
  }

  return factorialTail(n - 1, n * acc);
}

console.log('factorialTail(5) =', factorialTail(5));
