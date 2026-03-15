// C14 - Class Definitions Static Semantics Bagian 2
// Static method tidak dipanggil dari instance.

class User {
  static create(name) {
    return new User(name);
  }

  constructor(name) {
    this.name = name;
  }
}

const user = User.create('Arta');
console.log(user.name);

try {
  console.log(user.create('Nabila'));
} catch (error) {
  console.log('instance calling static =>', error.name, '->', error.message);
}
