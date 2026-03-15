const scores = [40, 75, 90];

console.log('before filter ->', scores);
const passed = scores.filter((score) => score >= 70);
console.log('after filter original ->', scores);
console.log('passed ->', passed);
