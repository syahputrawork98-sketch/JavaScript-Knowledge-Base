// C18 - Example 03: block for temporary vars

const result = (() => {
  {
    const a = 2;
    const b = 3;
    return a * b;
  }
})();

console.log(result);
