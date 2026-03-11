function getFirstItem(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return undefined;
  }

  return items[0];
}

console.log(getFirstItem(['a', 'b', 'c']));
console.log(getFirstItem([]));
console.log(getFirstItem('bukan array'));
