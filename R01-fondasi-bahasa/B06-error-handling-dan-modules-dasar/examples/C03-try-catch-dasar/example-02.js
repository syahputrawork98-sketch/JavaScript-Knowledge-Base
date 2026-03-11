try {
  JSON.parse('{invalid json}');
} catch (error) {
  console.log('error.name ->', error.name);
  console.log('error.message ->', error.message);
}
