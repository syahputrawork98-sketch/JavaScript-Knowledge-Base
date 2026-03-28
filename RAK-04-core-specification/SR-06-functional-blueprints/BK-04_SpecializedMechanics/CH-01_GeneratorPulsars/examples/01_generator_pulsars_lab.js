function* energyPulsar() {
  yield "PULSE_1";
  yield "PULSE_2";
  return "PULSE_COMPLETE";
}

const iterator = energyPulsar();
console.log("=== Generator Pulsars Lab ===");
console.log(iterator.next());
console.log(iterator.next());
