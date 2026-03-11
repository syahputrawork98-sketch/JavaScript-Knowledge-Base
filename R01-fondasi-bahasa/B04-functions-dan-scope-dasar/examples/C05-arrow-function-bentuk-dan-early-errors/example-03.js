// C05 - Arrow Function Bentuk dan Early Errors
// Simulasi syntax error terkait bentuk arrow menggunakan Function constructor.

function test(label, source) {
  try {
    Function(source);
    console.log(`${label}: VALID`);
  } catch (error) {
    console.log(`${label}: ${error.name}`);
  }
}

test('duplicate params in strict-like form', "'use strict'; const f = (a, a) => a;");
test('return object literal safely', 'const f = (x) => ({ value: x });');