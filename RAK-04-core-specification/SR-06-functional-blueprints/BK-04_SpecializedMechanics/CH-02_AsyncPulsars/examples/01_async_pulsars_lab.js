async function fetchPowerGrid() {
  const response = await Promise.resolve("READY");
  return response;
}

console.log("=== Async Pulsars Lab ===");
fetchPowerGrid().then((value) => console.log(value));
