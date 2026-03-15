// C19 - Async Arrow Function Definitions End to End
// Block body memudahkan langkah async yang lebih dari satu.

const formatUser = async (name) => {
  const upper = await Promise.resolve(name.toUpperCase());
  return `USER:${upper}`;
};

formatUser('arta').then((value) => {
  console.log(value);
});
