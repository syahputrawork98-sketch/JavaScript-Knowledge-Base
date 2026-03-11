// C17 - Example 03: flow path tracing

function flow(x) {
  if (x < 0) return 'neg';
  if (x === 0) return 'zero';
  return 'pos';
}

console.log(flow(-1), flow(0), flow(2));
