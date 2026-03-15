// C04 - Function Definitions Runtime Pipeline
// Urutan evaluation memengaruhi nilai closure yang dipakai.

function makeLogger(prefix) {
  return function log(message) {
    return `${prefix}: ${message}`;
  };
}

const infoLog = makeLogger('INFO');
const errorLog = makeLogger('ERROR');

console.log(infoLog('service started'));
console.log(errorLog('unexpected state'));