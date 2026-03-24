const rack = {
  id: "core",
  show() {
    return this.id;
  },
};

const literal = 42;
console.log(rack.show(), literal);
