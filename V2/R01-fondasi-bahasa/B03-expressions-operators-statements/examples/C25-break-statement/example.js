// C25 - break Statement

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    console.log('break di i =', i);
    break;
  }
  console.log('loop:', i);
}

const status = 'pending';
switch (status) {
  case 'ok':
    console.log('OK');
    break;
  case 'pending':
    console.log('PENDING');
    break;
  default:
    console.log('UNKNOWN');
}
