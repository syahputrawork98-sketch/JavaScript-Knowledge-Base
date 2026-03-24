function vaultDemo() {
  try {
    return "try-value";
  } finally {
    console.log("cleanup before leaving");
  }
}

console.log(vaultDemo());
