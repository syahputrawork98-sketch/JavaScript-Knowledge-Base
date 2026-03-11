// C26 - Example 03: return object shape

function makeUser(name) {
  if (!name) return { ok: false, reason: 'name required' };
  return { ok: true, data: { name } };
}

console.log(makeUser('Arta'));
console.log(makeUser(''));
