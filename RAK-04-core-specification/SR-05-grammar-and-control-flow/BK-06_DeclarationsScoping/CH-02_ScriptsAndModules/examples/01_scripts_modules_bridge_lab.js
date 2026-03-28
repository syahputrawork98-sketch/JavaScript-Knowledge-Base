globalThis.scriptBinding = "script-like";

(() => {
  const moduleLocal = "module-like";
  console.log("inside namespace:", moduleLocal);
})();

console.log("global binding:", globalThis.scriptBinding);
