// C24 - continue Statement

for (let i = 0; i < 6; i++) {
  if (i % 2 !== 0) continue;
  console.log('genap:', i);
}

let count = 0;
while (count < 5) {
  count += 1;
  if (count === 3) continue;
  console.log('while count:', count);
}
