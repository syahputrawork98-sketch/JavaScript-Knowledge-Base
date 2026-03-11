// C01 - Identifiers dan Private Names

const totalScore = 90;
const _cache = {};
const $meta = 'ok';

console.log(totalScore, typeof _cache, $meta);

class User {
  #id = 1;
  getId() {
    return this.#id;
  }
}

console.log(new User().getId());
