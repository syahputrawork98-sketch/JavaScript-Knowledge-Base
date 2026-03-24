const steps = [];

search: for (let row = 0; row < 3; row += 1) {
  for (let column = 0; column < 3; column += 1) {
    if (row === 1 && column === 1) {
      steps.push("found target");
      break search;
    }
    steps.push(`${row}:${column}`);
  }
}

console.log(steps);
