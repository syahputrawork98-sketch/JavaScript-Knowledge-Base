// C17 - Example 02: normal vs abrupt completion

function test(n) {
  if (n < 0) throw new Error('negatif');
  if (n === 0) return 'nol';
  return 'positif';
}

try {
  console.log(test(1));
  console.log(test(0));
  console.log(test(-1));
} catch (e) {
  console.log(e.message);
}
