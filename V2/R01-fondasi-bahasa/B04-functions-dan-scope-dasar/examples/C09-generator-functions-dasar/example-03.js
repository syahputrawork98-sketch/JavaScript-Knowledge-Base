// C09 - Generator Functions Dasar
// Konsumsi generator dengan for...of.

function* evenNumbers(limit) {
  for (let i = 0; i <= limit; i += 2) {
    yield i;
  }
}

for (const n of evenNumbers(8)) {
  console.log('even =>', n);
}