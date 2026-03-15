// C15 - Class Definitions Static Runtime Bridge
// Ekspresi extends dievaluasi saat class dibentuk.

function chooseBase(label) {
  console.log('evaluating extends ->', label);

  return class Base {
    describe() {
      return `base:${label}`;
    }
  };
}

class Child extends chooseBase('service') {
  info() {
    return `${super.describe()} -> child`;
  }
}

const child = new Child();
console.log(child.info());
