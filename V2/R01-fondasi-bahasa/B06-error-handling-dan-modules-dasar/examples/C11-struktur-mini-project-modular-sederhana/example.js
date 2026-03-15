import { addTask, getTasks } from './task-store.js';

addTask('Belajar error handling');
addTask('Belajar modules');

console.log('tasks ->', getTasks());
