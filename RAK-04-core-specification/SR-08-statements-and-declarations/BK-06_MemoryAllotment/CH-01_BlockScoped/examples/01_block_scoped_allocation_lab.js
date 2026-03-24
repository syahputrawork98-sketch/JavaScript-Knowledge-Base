{
  let live = "block";
  const locked = "const";
  console.log(live, locked);
}

try {
  // eslint-disable-next-line no-undef
  console.log(live);
} catch (error) {
  console.log(error.name);
}
