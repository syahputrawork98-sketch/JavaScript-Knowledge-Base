// C08 - Method Definitions Runtime dan Evaluasi
// Call-site menentukan this pada method biasa.

const counter = {
  value: 1,
  inc() {
    this.value += 1;
    return this.value;
  }
};

console.log('counter.inc() =>', counter.inc());
console.log('counter.inc() =>', counter.inc());