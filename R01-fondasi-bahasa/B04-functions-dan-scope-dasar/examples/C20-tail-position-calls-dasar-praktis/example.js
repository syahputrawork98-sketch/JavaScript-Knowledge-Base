// C20 - Tail Position Calls Dasar Praktis
// Call ini berada pada tail position karena langsung menjadi hasil return.

function identity(value) {
  return value;
}

function forward(value) {
  return identity(value);
}

console.log('forward(7) =', forward(7));
