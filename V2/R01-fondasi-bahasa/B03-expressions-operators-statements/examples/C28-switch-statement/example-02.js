// C28 - Example 02: switch fallthrough intentional

const level = 2;
let label = '';

switch (level) {
  case 3:
    label += 'advanced ';
  case 2:
    label += 'intermediate ';
  case 1:
    label += 'basic';
    break;
  default:
    label = 'unknown';
}

console.log(label.trim());
