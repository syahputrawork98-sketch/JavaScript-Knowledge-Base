// C11 - Example 02: nullish equality idiom

function isMissing(value) {
  return value == null;
}

console.log(isMissing(null));
console.log(isMissing(undefined));
console.log(isMissing(0));
