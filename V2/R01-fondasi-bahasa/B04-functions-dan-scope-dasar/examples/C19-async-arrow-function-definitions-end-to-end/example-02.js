// C19 - Async Arrow Function Definitions End to End
// Async arrow mewarisi this dari scope luar.

const counter = {
  value: 10,
  createReader() {
    return async () => this.value;
  },
};

counter.createReader()().then((value) => {
  console.log('lexical this =>', value);
});
