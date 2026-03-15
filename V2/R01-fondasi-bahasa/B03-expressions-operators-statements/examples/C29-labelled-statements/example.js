// C29 - Labelled Statements

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log('break ke outerLoop saat', i, j);
      break outerLoop;
    }
    console.log('pair:', i, j);
  }
}
