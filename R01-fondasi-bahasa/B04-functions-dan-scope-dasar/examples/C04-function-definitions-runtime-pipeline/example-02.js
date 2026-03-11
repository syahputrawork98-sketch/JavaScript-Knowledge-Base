// C04 - Function Definitions Runtime Pipeline
// Expression dengan const tidak dapat dipanggil sebelum inisialisasi.

try {
  console.log(runTask('draft'));
} catch (error) {
  console.log('before init =>', error.name);
}

const runTask = function (task) {
  return `running ${task}`;
};

console.log('after init =>', runTask('review'));