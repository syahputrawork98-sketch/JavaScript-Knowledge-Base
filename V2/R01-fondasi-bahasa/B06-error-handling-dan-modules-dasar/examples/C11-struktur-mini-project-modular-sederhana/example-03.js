import { addTask, getTasks } from './task-store.js';
import { formatTask } from './task-format.js';
import { validateTask } from './task-validator.js';

function safeAddTask(task) {
  try {
    validateTask(task);
    addTask(task);
  } catch (error) {
    console.log('gagal tambah task ->', error.message);
  }
}

safeAddTask('Belajar struktur modular');
safeAddTask('');

console.log(getTasks().map(formatTask));
