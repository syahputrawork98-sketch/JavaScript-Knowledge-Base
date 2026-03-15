const user = {
  name: 'Alya',
  sayHello() {
    return `Halo, saya ${this.name}`;
  }
};

console.log(user.sayHello());
