// C10 - Generator Functions Instantiation dan Evaluation
// Generator yang menerima return() dari luar.

function* tasks() {
  yield 'task-1';
  yield 'task-2';
  yield 'task-3';
}

const it = tasks();
console.log(it.next());
console.log(it.return('stopped-early'));
console.log(it.next());