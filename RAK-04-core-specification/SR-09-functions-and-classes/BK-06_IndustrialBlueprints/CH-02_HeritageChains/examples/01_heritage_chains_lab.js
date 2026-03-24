class Generator {
  produce() {
    return "RAW_ENERGY";
  }
}

class SolarGenerator extends Generator {
  produce() {
    return `${super.produce()}_CLEAN_SOLAR`;
  }
}

const solar = new SolarGenerator();
console.log("=== Heritage Chains Lab ===");
console.log(solar.produce());
