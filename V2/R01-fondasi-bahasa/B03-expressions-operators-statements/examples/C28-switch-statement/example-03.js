// C28 - Example 03: switch with default

const code = 404;
switch (code) {
  case 200:
    console.log('ok');
    break;
  case 500:
    console.log('server error');
    break;
  default:
    console.log('other code');
}
