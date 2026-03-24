function pickRoute(signal) {
  if (signal > 80) return "if:critical";
  if (signal > 40) return "if:stable";
  return "if:idle";
}

function pickCase(code) {
  switch (code) {
    case "A":
      return "switch:alpha";
    case "B":
      return "switch:beta";
    default:
      return "switch:default";
  }
}

console.log(pickRoute(55), pickCase("B"));
