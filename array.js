'use strict';

const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor(){
    this.length=0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  //Naive Case
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
  
    memory.set(this.ptr + this.length, value);
    console.log('push value', value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }


}
Array.SIZE_RATIO = 3;


function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
//   arr.push(3);
//   arr.push(5);
//   arr.push(15);
//   arr.push(19);
//   arr.push(45);
//   arr.push(10);
//   arr.pop();
//   arr.pop();
//   arr.pop();
//   arr.push('tauhida');
  console.log('FIRST ITEM',arr.get(0));
  console.log(arr);
}

main();