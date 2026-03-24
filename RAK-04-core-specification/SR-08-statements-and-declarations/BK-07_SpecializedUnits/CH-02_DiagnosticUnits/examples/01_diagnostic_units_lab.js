const probe = { signal: "stable" };

// The `with` statement is legacy and intentionally shown only for audit purposes.
with (probe) {
  console.log(signal);
}

console.log("Place a debugger statement below during manual inspection if needed.");
// debugger;
