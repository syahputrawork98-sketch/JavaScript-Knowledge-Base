const payload = {
  user: 'Alya',
  scores: [80, 90],
  isActive: true
};

const text = JSON.stringify(payload);
const parsed = JSON.parse(text);

console.log('text ->', text);
console.log('parsed.scores ->', parsed.scores);
