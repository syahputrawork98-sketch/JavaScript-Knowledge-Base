const users = [];

export function addUser(name) {
  users.push(name);
}

export function getUsers() {
  return users;
}
