// funcionamiento de la lista
// 1 --> 2 --> 3 --> 4 --> 5 --> null
// Asi cada --> indica el pointer o apuntador al siguente valor

// //esta es la estructura final de una linkedlist
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySiglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    this.tail = new Node(value);
    this.length = 2;
    this.head.next = this.tail;
  }
}

let MyLinkedList = new MySiglyLinkedList(1);
