function completionOrder() {
  try {
    throw new Error("trip");
  } catch (error) {
    console.log(`catch:${error.message}`);
    return "catch-value";
  } finally {
    console.log("finally-ran");
  }
}

console.log(completionOrder());
