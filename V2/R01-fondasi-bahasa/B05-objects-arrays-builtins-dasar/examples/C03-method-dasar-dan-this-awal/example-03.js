'use strict';

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  }
};

const fn = counter.increment;

try {
  fn();
} catch (error) {
  console.log(error.name);
}
