const log = [];

for (let step = 0; step < 5; step += 1) {
  if (step === 1) continue;
  if (step === 3) break;
  log.push(step);
}

console.log(log);
