// C01 - Parameter Lists Dasar dan Early Errors
// Contoh dasar bentuk parameter yang valid.

function introduce(name, role) {
  return `${name} works as ${role}`;
}

function summarizeUser({ id, active }) {
  return `id=${id}, active=${active}`;
}

function collectTags(mainTag, ...extraTags) {
  return `${mainTag} + ${extraTags.join(', ')}`;
}

console.log(introduce('Arta', 'Engineer'));
console.log(summarizeUser({ id: 7, active: true }));
console.log(collectTags('javascript', 'scope', 'functions'));