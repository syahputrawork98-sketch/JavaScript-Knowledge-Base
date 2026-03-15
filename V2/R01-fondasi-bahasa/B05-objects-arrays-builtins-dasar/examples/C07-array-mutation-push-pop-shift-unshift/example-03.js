const queue = ['Budi', 'Sari'];

queue.unshift('Alya');

console.log('after unshift ->', queue);

const firstPerson = queue.shift();

console.log('firstPerson ->', firstPerson);
console.log('after shift ->', queue);
