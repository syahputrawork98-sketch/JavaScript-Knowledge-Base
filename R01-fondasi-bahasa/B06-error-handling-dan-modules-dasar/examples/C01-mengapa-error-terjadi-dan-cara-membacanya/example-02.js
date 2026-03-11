function printErrorInfo(error) {
  console.log('name ->', error.name);
  console.log('message ->', error.message);
}

try {
  const user = null;
  console.log(user.name);
} catch (error) {
  printErrorInfo(error);
}
