const users = [];

function addUser(name) {
  users.push(name);
}

function printUsers() {
  console.log('users ->', users);
}

addUser('Alya');
addUser('Bima');
printUsers();
