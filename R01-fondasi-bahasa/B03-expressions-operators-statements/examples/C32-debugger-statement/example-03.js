// C32 - Example 03: debugger + logging combo

function inspectOrder(order) {
  // debugger;
  console.log('order id:', order.id);
  return order.total;
}

console.log(inspectOrder({ id: 1, total: 99 }));
