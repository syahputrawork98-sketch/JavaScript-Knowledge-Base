// C17 - Async Function Definitions Syntax dan Instantiation
// Async method pada object tetap mengembalikan Promise.

const service = {
  async fetchId() {
    return 101;
  },
};

service.fetchId().then((value) => {
  console.log('service.fetchId() =>', value);
});
