try {
  eval("if (true { console.log('jalan'); }");
} catch (error) {
  console.log('error.name ->', error.name);
  console.log('error.message ->', error.message);
}
