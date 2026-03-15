// C01 - Parameter Lists Dasar dan Early Errors
// Simulasi early error menggunakan Function constructor.

function testSyntax(label, source) {
  try {
    // Parsing dilakukan saat Function dibuat.
    // Jika invalid, akan melempar SyntaxError.
    Function(source);
    console.log(`${label}: VALID`);
  } catch (error) {
    console.log(`${label}: ${error.name}`);
  }
}

testSyntax(
  'duplicate params in strict mode',
  "'use strict'; function bad(a, a) { return a; }"
);

testSyntax(
  'rest parameter not last',
  'function bad(...items, last) { return items.length + last; }'
);

testSyntax(
  'default parameter in middle (valid)',
  'function ok(a = 1, b) { return a + (b ?? 0); }'
);