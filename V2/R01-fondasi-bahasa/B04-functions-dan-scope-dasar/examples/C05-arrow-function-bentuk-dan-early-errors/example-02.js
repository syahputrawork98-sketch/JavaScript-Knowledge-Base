// C05 - Arrow Function Bentuk dan Early Errors
// Arrow function tidak dapat dipakai dengan new.

const makePoint = (x, y) => ({ x, y });

console.log('makePoint(1, 2) =', makePoint(1, 2));

try {
  // Ini akan gagal karena arrow tidak punya [[Construct]].
  const p = new makePoint(1, 2);
  console.log(p);
} catch (error) {
  console.log('new arrow =>', error.name);
}