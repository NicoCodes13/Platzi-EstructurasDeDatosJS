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
}

let MyLinkedList = new MySiglyLinkedList(1);

console.log(MyLinkedList);
MyLinkedList.append(2);
MyLinkedList.append(3);
MyLinkedList.append(4);
MyLinkedList.append(5);

console.log(MyLinkedList);
