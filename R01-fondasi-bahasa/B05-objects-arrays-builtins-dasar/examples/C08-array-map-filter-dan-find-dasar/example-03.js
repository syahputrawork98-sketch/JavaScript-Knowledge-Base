const users = ['Alya', 'Budi', 'Sari'];

const foundUser = users.find((user) => user.startsWith('S'));
const missingUser = users.find((user) => user.startsWith('Z'));

console.log('foundUser ->', foundUser);
console.log('missingUser ->', missingUser);
