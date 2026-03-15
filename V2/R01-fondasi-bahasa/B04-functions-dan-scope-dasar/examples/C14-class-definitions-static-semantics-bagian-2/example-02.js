// C14 - Class Definitions Static Semantics Bagian 2
// Validasi private identifier.

function test(label, source) {
  try {
    // Function(source) membantu kita mengamati early error
    // tanpa menghentikan seluruh file contoh.
    Function(source);
    console.log(`${label}: VALID`);
  } catch (error) {
    console.log(`${label}: ${error.name} -> ${error.message}`);
  }
}

test(
  'undeclared private field',
  'class Bad { read() { return this.#value; } }'
);

test(
  'declared private field',
  'class Good { #value = 1; read() { return this.#value; } }'
);
