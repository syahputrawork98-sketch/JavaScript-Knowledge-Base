// C13 - Class Definitions Static Semantics Bagian 1
// Perbedaan instance method dan static method.

class MathTool {
  static version() {
    return '1.0';
  }

  double(value) {
    return value * 2;
  }
}

const tool = new MathTool();
console.log('tool.double(5) =', tool.double(5));
console.log('MathTool.version() =', MathTool.version());
