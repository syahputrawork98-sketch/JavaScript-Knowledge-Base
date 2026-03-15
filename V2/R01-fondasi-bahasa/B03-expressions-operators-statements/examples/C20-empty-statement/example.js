// C20 - Empty Statement

const isReady = false;

if (isReady);
{
  console.log('blok ini tetap dieksekusi karena ada empty statement di if');
}

for (let i = 0; i < 3; i++); // empty loop body
console.log('loop selesai');
