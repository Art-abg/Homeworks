//Linked list Implementation

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insert(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    let newNode = new Node(data);
    if (index === 0) {
      this.prepend(data);
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = newNode;
      newNode.next = current;
    }
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      let data = this.head.data;
      this.head = this.head.next;
      this.size--;
      return data;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
      this.size--;
      return current.data;
    }
  }

  remove(data) {
    if (this.head === null) {
      return false;
    }
    if (this.head.data === data) {
      this.removeAt(0);
      return true;
    } else {
      let current = this.head.next;
      let previous = this.head;
      while (current !== null) {
        if (current.data === data) {
          break;
        }
        previous = current;
        current = current.next;
      }
      if (current === null) {
        return false;
      }
      previous.next = current.next;
      this.size--;
      return true;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  printList() {
    if (this.head === null) {
      return;
    }
    let current = this.head;
    let output = "";
    while (current !== null) {
      output += current.data + " -> ";
      current = current.next;
    }
    console.log(output.trim());
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insert(3, 3);
list.printList(); // Output: 0 1 2 3
console.log("Size:", list.getSize()); // Output: Size: 4
list.remove(2);
list.removeAt(2);
list.printList(); // Output: 0 1
console.log("Size:", list.getSize()); // Output: Size: 2
