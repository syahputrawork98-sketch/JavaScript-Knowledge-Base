const node = { id: "n1", nested: { level: 2 } };
const key = "id";

console.log(node.id, node[key], node.missing?.level);
