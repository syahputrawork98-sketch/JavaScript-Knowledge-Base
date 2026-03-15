// C06 - Arrow Function Runtime dan Evaluation
// Lexical this pada arrow callback.

const user = {
  id: 42,
  printLater() {
    const run = () => `user id is ${this.id}`;
    return run();
  }
};

console.log(user.printLater());