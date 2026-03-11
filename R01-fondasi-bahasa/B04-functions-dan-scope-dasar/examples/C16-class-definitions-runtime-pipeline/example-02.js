// C16 - Class Definitions Runtime Pipeline
// Class expression dievaluasi saat ekspresi itu dijalankan.

function buildLoggerClass(prefix) {
  console.log('building class for prefix =', prefix);

  return class Logger {
    log(message) {
      return `[${prefix}] ${message}`;
    }
  };
}

const LoggerA = buildLoggerClass('A');
const LoggerB = buildLoggerClass('B');

console.log(new LoggerA().log('ready'));
console.log(new LoggerB().log('ready'));
