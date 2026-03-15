// C31 - try Statement

function parseJSON(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    console.log('gagal parse:', error.message);
    return null;
  } finally {
    console.log('finally: parseJSON selesai');
  }
}

console.log(parseJSON('{"ok":true}'));
console.log(parseJSON('{invalid}'));
