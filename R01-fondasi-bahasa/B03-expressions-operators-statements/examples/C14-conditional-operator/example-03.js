// C14 - Example 03: ternary in return

function badge(active) {
  return active ? 'ACTIVE' : 'INACTIVE';
}

console.log(badge(true));
console.log(badge(false));
