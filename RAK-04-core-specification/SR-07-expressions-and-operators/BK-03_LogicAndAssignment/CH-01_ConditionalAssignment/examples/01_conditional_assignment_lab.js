let fallback = "";
let reserve = null;

const status = fallback ? "active" : "idle";
fallback ||= "boot";
reserve ??= "reserve-line";

console.log(status, fallback, reserve);
