// C02 - Parameter Lists Initializer dan Expected Argument Count
// function.length mengikuti expected argument count, bukan jumlah semua parameter tertulis.

function noDefault(a, b, c) {}
function withDefault(a, b = 1, c) {}
function defaultFirst(a = 1, b, c) {}
function withRest(a, ...rest) {}

console.log('noDefault.length =', noDefault.length); // 3
console.log('withDefault.length =', withDefault.length); // 1
console.log('defaultFirst.length =', defaultFirst.length); // 0
console.log('withRest.length =', withRest.length); // 1