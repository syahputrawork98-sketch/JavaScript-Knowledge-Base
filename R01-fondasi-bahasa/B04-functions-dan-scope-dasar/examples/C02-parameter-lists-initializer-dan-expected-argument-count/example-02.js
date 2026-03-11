// C02 - Parameter Lists Initializer dan Expected Argument Count
// Urutan parameter penting saat initializer saling mereferensikan.

function safeOrder(a, b = a + 1) {
  return { a, b };
}

function riskyOrder(a = b, b = 10) {
  return { a, b };
}

console.log('safeOrder(5):', safeOrder(5));

try {
  console.log('riskyOrder():', riskyOrder());
} catch (error) {
  console.log('riskyOrder():', error.name);
}