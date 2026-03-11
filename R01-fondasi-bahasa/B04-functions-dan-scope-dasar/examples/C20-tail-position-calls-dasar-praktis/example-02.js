// C20 - Tail Position Calls Dasar Praktis
// Call ini bukan tail position karena hasilnya masih dipakai lagi.

function identity(value) {
  return value;
}

function plusOne(value) {
  return identity(value) + 1;
}

console.log('plusOne(7) =', plusOne(7));
