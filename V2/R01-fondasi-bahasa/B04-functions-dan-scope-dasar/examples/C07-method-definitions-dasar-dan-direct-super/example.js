// C07 - Method Definitions Dasar dan Direct Super
// Method shorthand pada object literal.

const profile = {
  name: 'Syahputra',
  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log(profile.greet());