let isLoading = true;

try {
  JSON.parse('{"ok":true}');
  console.log('isLoading saat proses ->', isLoading);
} finally {
  isLoading = false;
  console.log('isLoading setelah proses ->', isLoading);
}
