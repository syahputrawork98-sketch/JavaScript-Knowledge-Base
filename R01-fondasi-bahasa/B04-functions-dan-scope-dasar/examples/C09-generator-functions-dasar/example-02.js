// C09 - Generator Functions Dasar
// Perbedaan yield dan return pada generator.

function* demo() {
  yield 'step-a';
  return 'finished';
}

const it = demo();
console.log(it.next());
console.log(it.next());
console.log(it.next());