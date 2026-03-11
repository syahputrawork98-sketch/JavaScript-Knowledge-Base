const user = {
  name: 'Alya',
  age: 21
};

delete user.age;

console.log(user);
console.log('age' in user);
