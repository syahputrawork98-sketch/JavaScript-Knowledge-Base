// C04 - Function Definitions Runtime Pipeline
// Declaration bisa dipanggil sebelum definisi tekstual.

console.log('before declaration call =>', greet('Arta'));

function greet(name) {
  return `Hi, ${name}`;
}

console.log('after declaration call =>', greet('Syahputra'));