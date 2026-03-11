// C32 - debugger Statement

function runDebugFlow(value) {
  const doubled = value * 2;
  // Aktifkan devtools dan hapus komentar line berikut bila ingin pause runtime.
  // debugger;
  return doubled + 1;
}

console.log(runDebugFlow(10));
console.log('debugger dipakai sementara saat inspeksi lokal');
