// C09 - Generator Functions Dasar
// Generator dasar dengan beberapa yield.

function* ticketQueue() {
  yield 'ticket-1';
  yield 'ticket-2';
  yield 'ticket-3';
}

const queue = ticketQueue();
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());