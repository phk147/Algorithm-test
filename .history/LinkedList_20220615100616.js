class Node {
  constructor(data) {
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
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  remove(item) {
    let preNode = this.findPrevious(item);
    preNode.next = preNode.next.next;
  }

  find(item) {
    let curNode = this.head;
    while (curNode !== item) {
      curNode = curNode.next;
    }
    return curNode;
  }

  findPrevious(item) {
    let preNode = this.head;
    while (preNode.next != null && preNode.next.data !== item) {
      preNode = preNode.next;
    }
    return preNode;
  }
}
