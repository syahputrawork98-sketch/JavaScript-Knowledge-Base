class PowerStation {
  #serialNumber = "SN-999";

  constructor(name) {
    this.name = name;
  }

  boot() {
    return `Booting ${this.name} - ${this.#serialNumber}`;
  }
}

const station = new PowerStation("Alpha-1");
console.log("=== Class Construction Lab ===");
console.log(station.boot());
