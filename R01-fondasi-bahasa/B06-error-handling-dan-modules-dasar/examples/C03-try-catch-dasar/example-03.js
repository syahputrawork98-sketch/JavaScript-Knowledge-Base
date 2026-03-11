const fallbackUser = { name: 'Guest' };

function parseUser(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    console.log('pakai fallback karena parse gagal ->', error.message);
    return fallbackUser;
  }
}

console.log(parseUser('{"name":"Alya"}'));
console.log(parseUser('{invalid json}'));
