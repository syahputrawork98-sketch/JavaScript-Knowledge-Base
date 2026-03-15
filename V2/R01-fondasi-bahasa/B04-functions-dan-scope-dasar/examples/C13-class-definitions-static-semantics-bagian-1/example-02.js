// C13 - Class Definitions Static Semantics Bagian 1
// Simulasi early error: duplicate constructor.

function test(label, source) {
  try {
    // Function(source) membantu kita menangkap parse error tanpa
    // memutus eksekusi seluruh file contoh.
    Function(source);
    console.log(`${label}: VALID`);
  } catch (error) {
    console.log(`${label}: ${error.name} -> ${error.message}`);
  }
}

test(
  'duplicate constructor',
  'class Bad { constructor() {} constructor(name) {} }'
);

test(
  'single constructor',
  'class Good { constructor(name) { this.name = name; } }'
);
