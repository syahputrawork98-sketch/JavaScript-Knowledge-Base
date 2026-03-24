function createLabel(name) {
  return `label:${name}`;
}

function Unit(name) {
  this.name = name;
}

console.log(createLabel("core"), new Unit("rack").name);
