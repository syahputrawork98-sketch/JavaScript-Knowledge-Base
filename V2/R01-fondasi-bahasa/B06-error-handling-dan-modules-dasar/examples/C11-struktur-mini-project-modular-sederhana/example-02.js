import { addTask, getTasks } from './task-store.js';
import { formatTask } from './task-format.js';

addTask('Pisahkan logic');
addTask('Rapikan file');

console.log(getTasks().map(formatTask));
