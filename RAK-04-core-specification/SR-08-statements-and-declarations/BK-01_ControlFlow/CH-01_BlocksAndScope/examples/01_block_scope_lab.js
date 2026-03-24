const traces = [];

{
  var lifted = "visible outside";
  let scoped = "inside only";
  traces.push(`inner:${lifted}/${scoped}`);
}

traces.push(`outer:${lifted}`);

try {
  // eslint-disable-next-line no-undef
  traces.push(scoped);
} catch (error) {
  traces.push(error.name);
}

console.log(traces);
