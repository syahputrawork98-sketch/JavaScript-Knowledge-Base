const grid = {
  voltage: 220,
  activate() {
    const check = () => console.log(`Voltage check: ${this.voltage}V`);
    check();
  },
};

console.log("=== Arrow Units Lab ===");
grid.activate();
