// C06 - Arrow Function Runtime dan Evaluation
// call/apply tidak mengganti this arrow seperti function biasa.

const context = { value: 10 };

function normal() {
  return this.value;
}

const arrowFromGlobal = () => this;

console.log('normal.call(context) =', normal.call(context));
console.log('typeof arrowFromGlobal.call(context) =', typeof arrowFromGlobal.call(context));