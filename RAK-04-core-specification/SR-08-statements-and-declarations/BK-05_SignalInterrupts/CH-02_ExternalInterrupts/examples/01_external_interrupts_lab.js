function routeOut() {
  outer: for (let i = 0; i < 2; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      if (i === 1 && j === 0) {
        break outer;
      }
    }
  }

  return "returned-from-function";
}

console.log(routeOut());
