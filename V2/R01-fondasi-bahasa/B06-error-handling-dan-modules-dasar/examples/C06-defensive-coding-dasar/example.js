function greet(name) {
  if (typeof name !== 'string') {
    return 'Nama tidak valid';
  }

  return `Halo, ${name}`;
}

console.log(greet('Alya'));
console.log(greet(42));
