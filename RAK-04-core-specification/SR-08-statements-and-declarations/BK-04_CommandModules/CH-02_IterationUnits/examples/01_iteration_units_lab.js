const counterTrace = [];

for (let index = 0; index < 3; index += 1) {
  counterTrace.push(`for:${index}`);
}

for (const value of ["x", "y"]) {
  counterTrace.push(`for-of:${value}`);
}

console.log(counterTrace);
