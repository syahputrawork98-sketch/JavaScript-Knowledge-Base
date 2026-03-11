// C29 - Example 03: label naming clarity

searchLoop: for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    if (i + j > 1) break searchLoop;
    console.log(i, j);
  }
}
