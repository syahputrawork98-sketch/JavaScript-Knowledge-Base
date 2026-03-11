// C01 - Example 03: class private field

class Counter {
  #value = 0;
  inc() { this.#value += 1; }
  get() { return this.#value; }
}

const c = new Counter();
c.inc();
console.log(c.get());
