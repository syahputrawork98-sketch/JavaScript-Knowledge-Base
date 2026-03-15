const user = {
  name: 'Alya',
  age: 21,
  city: 'Bandung'
};

console.log(Object.keys(user));

for (const key of Object.keys(user)) {
  console.log(key, '->', user[key]);
}
