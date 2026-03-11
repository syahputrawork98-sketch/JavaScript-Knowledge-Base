// C18 - Example 02: block scope demo

{
  const local = 'inside';
  console.log(local);
}

for (let i = 0; i < 2; i++) {
  const scoped = i;
  console.log(scoped);
}
