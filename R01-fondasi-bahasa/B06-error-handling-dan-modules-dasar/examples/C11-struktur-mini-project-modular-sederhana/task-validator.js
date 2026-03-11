export function validateTask(task) {
  if (typeof task !== 'string' || task.trim() === '') {
    throw new Error('task harus string non-kosong');
  }
}
