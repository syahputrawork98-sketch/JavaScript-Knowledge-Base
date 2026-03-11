const user = {
  name: 'Alya',
  age: 21
};

for (const [key, value] of Object.entries(user)) {
  console.log(key, '->', value);
}
