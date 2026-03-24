const factory = function namedFactory() {
  return "factory";
};

const Unit = class {
  label() {
    return "unit";
  }
};

console.log(factory(), new Unit().label());
