try {
  JSON.parse('{invalid json}');
} catch (error) {
  console.log('cek jenis ->', error.name);
  console.log('cek pesan ->', error.message);
  console.log('cek sumber -> input JSON yang diparse');
}
