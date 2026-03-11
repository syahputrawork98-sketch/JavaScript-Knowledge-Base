try {
  const user = null;
  console.log(user.name);
} catch (error) {
  console.log('error.name ->', error.name);
  console.log('error.message ->', error.message);
}
