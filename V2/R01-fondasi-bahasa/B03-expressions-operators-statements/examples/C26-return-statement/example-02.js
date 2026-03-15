// C26 - Example 02: early return

function normalize(name) {
  if (!name) return 'anonymous';
  return name.trim().toLowerCase();
}

console.log(normalize(' Arta '));
console.log(normalize(''));
