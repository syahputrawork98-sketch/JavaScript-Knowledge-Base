// C23 - Example 03: for...of vs for...in

const arr = ['a', 'b'];
for (const v of arr) console.log('of', v);
for (const k in arr) console.log('in', k);
