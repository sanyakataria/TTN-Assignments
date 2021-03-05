// Q8 Implement a singly linked list in es6 and implement
// addFirst() addLast(), length(), getFirst(), getLast(). (without using array)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    // this.size = 0;
  }

  addFirst(element) {
    var node = new Node(element);
    node.next = this.head;
    this.head = node;
    // this.size++;
  }

  addLast(element) {
    var node = new Node(element);
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = node;
    // this.size++;
  }

  length() {
    var size = 1;
    var temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
      size++;
    }
    return size;
  }

  getFirst() {
    return this.head.data;
  }

  getLast() {
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    return temp.data;
  }

  display() {
    let temp = this.head;
    console.log("linked list");
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

var ll = new linkedList();
ll.addFirst(10);
ll.addFirst(30);
ll.addFirst(40);
ll.addLast(100);
ll.addLast(20);
ll.display();
console.log("size : " + ll.length());
console.log("first : " + ll.getFirst());
console.log("last : " + ll.getLast());
// ll.display();
