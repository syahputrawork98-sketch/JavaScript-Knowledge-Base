// C03 - Example 02: optional chaining access

const config = { api: { timeout: 3000 } };

console.log(config.api?.timeout);
console.log(config.cache?.ttl);
