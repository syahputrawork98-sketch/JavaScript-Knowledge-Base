export function validateName(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('name harus string non-kosong');
  }
}
