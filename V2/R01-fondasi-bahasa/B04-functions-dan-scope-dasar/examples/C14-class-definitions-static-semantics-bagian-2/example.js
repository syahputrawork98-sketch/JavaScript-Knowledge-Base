// C14 - Class Definitions Static Semantics Bagian 2
// Static field dan instance field berada di tempat berbeda.

class Counter {
  static description = 'shared';

  constructor() {
    this.value = 0;
  }

  inc() {
    this.value += 1;
    return this.value;
  }
}

const counter = new Counter();
console.log('Counter.description =', Counter.description);
console.log('counter.inc() =', counter.inc());
