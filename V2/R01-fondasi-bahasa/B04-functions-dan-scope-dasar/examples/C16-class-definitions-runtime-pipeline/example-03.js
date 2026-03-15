// C16 - Class Definitions Runtime Pipeline
// Instance field initializer berjalan saat instance dibuat.

class Session {
  token = this.createToken();

  createToken() {
    console.log('running instance field initializer');
    return 'token-001';
  }
}

console.log('class ready');
const session = new Session();
console.log('session.token =', session.token);
