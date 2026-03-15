// C22 - Example 03: guard clause style

function process(user) {
  if (!user) return 'no user';
  if (!user.active) return 'inactive';
  return 'ok';
}

console.log(process(null));
console.log(process({ active: false }));
console.log(process({ active: true }));
