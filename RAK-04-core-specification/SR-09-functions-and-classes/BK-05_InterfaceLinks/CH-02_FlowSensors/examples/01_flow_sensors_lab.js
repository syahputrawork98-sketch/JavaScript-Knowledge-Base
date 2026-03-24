const powerLine = {
  _rawVoltage: 0,
  get voltage() {
    return `${this._rawVoltage} Volts`;
  },
  set voltage(value) {
    if (value < 0) {
      throw new Error("LOW_POWER_FAIL");
    }
    this._rawVoltage = value;
  },
};

powerLine.voltage = 220;
console.log("=== Flow Sensors Lab ===");
console.log(powerLine.voltage);
