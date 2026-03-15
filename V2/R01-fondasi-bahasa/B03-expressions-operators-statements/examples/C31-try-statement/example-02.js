// C31 - Example 02: try/catch/finally flow

try {
  JSON.parse('{invalid}');
} catch (e) {
  console.log('caught');
} finally {
  console.log('cleanup done');
}
