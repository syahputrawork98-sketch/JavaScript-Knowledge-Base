const station = {
  voltage: 0,
  setVoltage(value) {
    this.voltage = value;
    console.log(`Station Voltage: ${this.voltage}V`);
  },
};

console.log("=== Method Definitions Lab ===");
station.setVoltage(220);
