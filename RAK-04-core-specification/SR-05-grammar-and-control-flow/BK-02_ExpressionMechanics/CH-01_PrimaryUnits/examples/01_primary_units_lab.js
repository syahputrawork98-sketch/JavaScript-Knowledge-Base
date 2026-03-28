const hub = {
  id: "alpha",
  makeNode() {
    return { owner: this.id };
  },
};

const identifier = hub.id;
const built = { identifier, nested: hub.makeNode() };

console.log(identifier, built, hub.makeNode());
