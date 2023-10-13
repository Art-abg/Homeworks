//Queue Implementation

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    if (this.isEmpty()) {
      return;
    }
    console.log(this.items.join(" "));
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1 2 3
console.log("Front element: " + queue.front()); // Output: Front element: 1
queue.dequeue();
queue.print(); // Output: 2 3
console.log("Queue size: " + queue.size()); // Output: Queue size: 2
