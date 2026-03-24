console.log("=== Base Models Lab ===");

activateCore();

function activateCore() {
  console.log("CORE_STATUS: ONLINE");
}

const pumpEnergy = function (amount) {
  return amount * 1.5;
};

console.log("Energy Pumped:", pumpEnergy(10));
