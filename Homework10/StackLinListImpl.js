// Stack implementation using linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.topNode = null;
    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.topNode;
    this.topNode = newNode;
    this.size++;
  }

  pop() {
    if (this.topNode === null) {
      return null;
    }
    let data = this.topNode.data;
    this.topNode = this.topNode.next;
    this.size--;
    return data;
  }

  getTop() {
    if (this.topNode === null) {
      return null;
    }
    return this.topNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.getTop()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1
