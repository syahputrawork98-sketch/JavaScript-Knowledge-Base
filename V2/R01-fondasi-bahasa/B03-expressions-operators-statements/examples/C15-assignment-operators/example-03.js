// C15 - Example 03: destructuring assignment

const payload = { id: 7, name: 'Arta' };
let id;
let name;
({ id, name } = payload);

console.log(id, name);
