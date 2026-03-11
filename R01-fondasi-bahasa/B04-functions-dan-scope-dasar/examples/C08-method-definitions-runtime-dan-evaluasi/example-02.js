// C08 - Method Definitions Runtime dan Evaluasi
// Method yang dilepas dari object bisa kehilangan context this.
'use strict';

const service = {
  prefix: 'SERVICE',
  log(message) {
    return `${this.prefix}: ${message}`;
  }
};

const detached = service.log;
const bound = service.log.bind(service);

try {
  console.log(detached('booting'));
} catch (error) {
  console.log('detached call =>', error.name, '->', error.message);
}

console.log(bound('booting'));
