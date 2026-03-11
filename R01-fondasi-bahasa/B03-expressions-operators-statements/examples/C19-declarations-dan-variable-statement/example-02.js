// C19 - Example 02: var scope pitfall

if (true) {
  var leaked = 'visible';
  let safe = 'block-only';
  console.log(safe);
}

console.log(leaked);
