const counter = {
  value: 0,
  increment() {
    this.value += 1;
  }
};

counter.increment();
counter.increment();

console.log(counter.value);
