// C19 - Async Arrow Function Definitions End to End
// Async arrow function expression body tetap menghasilkan Promise.

const doubleLater = async (value) => value * 2;

doubleLater(6).then((value) => {
  console.log('doubleLater =>', value);
});
