// C08 - Method Definitions Runtime dan Evaluasi
// Method evaluation dalam factory object.

function createAccount(owner) {
  return {
    owner,
    describe() {
      return `Account owner: ${this.owner}`;
    }
  };
}

const account = createAccount('Nabila');
console.log(account.describe());