// C13 - Class Definitions Static Semantics Bagian 1
// Class dasar dengan constructor dan instance method.

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, ${this.name}`;
  }
}

const user = new User('Syahputra');
console.log(user.greet());
