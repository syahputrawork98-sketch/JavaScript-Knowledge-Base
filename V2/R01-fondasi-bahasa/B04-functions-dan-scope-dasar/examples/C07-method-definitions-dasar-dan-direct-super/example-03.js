// C07 - Method Definitions Dasar dan Direct Super
// super tidak valid di function biasa (simulasi parse error).

function test(label, source) {
  try {
    Function(source);
    console.log(`${label}: VALID`);
  } catch (error) {
    console.log(`${label}: ${error.name}`);
  }
}

test(
  'super in plain function',
  'const obj = { run: function () { return super.toString(); } };'
);

test(
  'super in method shorthand',
  'const a = { x(){ return 1; } }; const b = { __proto__: a, x(){ return super.x(); } };'
);