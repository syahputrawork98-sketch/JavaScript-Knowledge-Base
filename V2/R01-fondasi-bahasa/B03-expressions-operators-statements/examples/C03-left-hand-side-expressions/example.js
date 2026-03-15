// C03 - Left-Hand-Side Expressions

const user = { profile: { name: 'Arta' } };
console.log('dot access:', user.profile.name);
console.log('bracket access:', user['profile']['name']);

function getUser() {
  return user;
}

console.log('call + access:', getUser().profile.name);

const key = 'profile';
user[key].name = 'Syahputra';
console.log('after assignment:', user.profile.name);
