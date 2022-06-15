class Node {
  constructor() {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  append(data) {
    let newNode = new Node(data);
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  insert(data, item) {
    let newNode = new Node(data);
  }
}
