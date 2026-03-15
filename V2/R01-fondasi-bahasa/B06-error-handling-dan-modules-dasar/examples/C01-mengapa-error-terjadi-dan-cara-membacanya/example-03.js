try {
  JSON.parse('{invalid json}');
} catch (error) {
  console.log('jenis ->', error.name);
  console.log('pesan ->', error.message);
  console.log('petunjuk -> cek input yang sedang diparse');
}
