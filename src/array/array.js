// const array = ['Diego', 'Karen', 'Oscar'];

class MyArray {
  constructor() {
    // longitud del array inicial
    this.length = 0;
    // sitio donde guardar los elementos
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    if (this.length === 0) return undefined;
    this.length--;
    let backData = this.data[this.length];
    delete this.data[this.length];
    return backData;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();

myArray.pop();
console.log(myArray);
