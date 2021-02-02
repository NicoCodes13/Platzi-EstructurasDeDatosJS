class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// los valores de tail y head son apuntadores!!!
class MySiglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    // Al hacer esto generamos una referencia al objeto
    // mientras esta asigancion este presente lo que pase en tail
    // afectara a head ya que son REFERENCIAS no el objeto como tal
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newTale = new Node(value);

    this.tail.next = newTale;
    this.tail = newTale;
    this.length++;

    return newTale;
  }
  prepend(value) {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      const lastNode = this.getTheIndex(this.length - 2);
      lastNode.next = null;
      this.tail = lastNode;
      this.length--;
      return this;
    }
    if (index === 0) {
      this.head = this.head.next;
      length--;
      return this;
    }
    const previousNode = this.getTheIndex(index - 1);
    const actualNode = this.getTheIndex(index);
    previousNode.next = actualNode.next;
    this.length--;
    return this;
  }
}

let MyLinkedList = new MySiglyLinkedList(0);

console.log(MyLinkedList);
MyLinkedList.append(1);
MyLinkedList.append(2);
MyLinkedList.append(3);
MyLinkedList.append(4);

console.log(MyLinkedList);
