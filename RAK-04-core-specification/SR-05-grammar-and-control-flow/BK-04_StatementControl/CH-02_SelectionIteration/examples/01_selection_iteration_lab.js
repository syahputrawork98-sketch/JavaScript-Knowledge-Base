const route = [];
const mode = "backup";

if (mode === "primary") {
  route.push("if:primary");
} else {
  route.push("if:backup");
}

for (const unit of ["A", "B"]) {
  route.push(`for-of:${unit}`);
}

switch (mode) {
  case "backup":
    route.push("switch:backup");
    break;
  default:
    route.push("switch:default");
}

console.log(route);
