try {
  JSON.parse('{invalid json}');
} catch (error) {
  console.log('error ditangkap ->', error.name);
} finally {
  console.log('finally tetap berjalan');
}
