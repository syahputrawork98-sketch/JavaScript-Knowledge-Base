// C02 - Parameter Lists Initializer dan Expected Argument Count
// Default initializer hanya aktif untuk argumen undefined.

function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

console.log(greet());
console.log(greet(undefined));
console.log(greet(null));
console.log(greet('Arta'));