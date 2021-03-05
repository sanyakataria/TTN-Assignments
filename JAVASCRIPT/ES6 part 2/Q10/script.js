// Q10 Implementation of stack (using linked list) ?

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class linkedList {
    constructor() {
      this.head = null;
    }
  
    push(element) {
      var node = new Node(element);
      node.next = this.head;
      this.head = node;
    }
  
  
    size() {
      var size = 1;
      var temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
        size++;
      }
      return size;
    }
  
    top() {
      return this.head.data;
    }
  
    pop(){
        var element = this.head;
        this.head = this.head.next;
        return element.data;
    }
  
    display() {
      let temp = this.head;
      console.log("stack");
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }

  let stack = new linkedList();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  console.log("size : " + stack.size());
  stack.display();
  console.log("top : " + stack.top());
  console.log("popped element : " + stack.pop());
  console.log("size : " + stack.size());