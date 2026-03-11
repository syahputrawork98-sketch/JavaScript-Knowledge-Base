// C25 - Example 02: break in nested loop

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break;
    console.log(i, j);
  }
}
