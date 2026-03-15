// C03 - Function Definitions Bentuk dan Aturan Strict
// Simulasi early error duplicate parameter di strict mode.

function testStrictDuplicateParams() {
  const source = "'use strict'; function bad(a, a) { return a; }";
  try {
    Function(source);
    console.log('unexpected: parsed');
  } catch (error) {
    console.log('strict duplicate params =>', error.name);
  }
}

testStrictDuplicateParams();