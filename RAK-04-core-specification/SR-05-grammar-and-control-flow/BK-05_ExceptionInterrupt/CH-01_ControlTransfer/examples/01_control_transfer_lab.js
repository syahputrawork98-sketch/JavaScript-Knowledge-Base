function runTransferDemo() {
  const log = [];

  outer: for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (i === 1 && j === 1) {
        log.push("break outer");
        break outer;
      }
      log.push(`${i}:${j}`);
    }
  }

  return log;
}

console.log(runTransferDemo());
