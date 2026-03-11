const tasks = [];

export function addTask(task) {
  tasks.push(task);
}

export function getTasks() {
  return tasks;
}
