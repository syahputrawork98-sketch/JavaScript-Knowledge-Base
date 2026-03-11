// C15 - Class Definitions Static Runtime Bridge
// Computed name dan static field dievaluasi saat class dibentuk.

function mark(label) {
  console.log('phase ->', label);
  return label;
}

const methodName = mark('compute method name') && 'hello';

class Greeter {
  static label = mark('run static field initializer');

  [methodName]() {
    return 'Hi from class';
  }
}

const greeter = new Greeter();
console.log('Greeter.label =', Greeter.label);
console.log('greeter.hello() =', greeter.hello());
