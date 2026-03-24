const state = { count: 1, nested: { flag: true } };

state.count++;

console.log(state.count);
console.log(state.nested?.flag);
console.log(state.missing?.flag);
