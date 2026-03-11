// C07 - Example 03: finite checks

const values = [10 / 2, 10 / 0, 0 / 0];
for (const v of values) {
  console.log(v, Number.isFinite(v));
}
