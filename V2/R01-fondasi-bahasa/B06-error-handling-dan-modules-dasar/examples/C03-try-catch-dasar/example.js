try {
  JSON.parse('{invalid json}');
  console.log('parse berhasil');
} catch (error) {
  console.log('parse gagal');
}
