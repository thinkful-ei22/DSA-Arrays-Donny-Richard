'use strict';

const Memory = require('./memory');
const memory = new Memory();

const SIZE_RATIO = 3;

class Array{
  constructor(){
    this.length = 0;
    this.capacity = 0;
    this.pointer = memory.allocate(this.length);
  }

  push(value){
    if(this.length >= this.capacity){
      this.resize((this.length + 1)*SIZE_RATIO);
    }
    //add the value to the end (ptr + length)
    memory.set(this.pointer + this.length, value);
    //increase the length
    this.length++;
  }

  resize(size){
    const prevPointer = this.pointer;
    this.pointer = memory.allocate(size);
    memory.copy(this.pointer,prevPointer,size);
    memory.free(prevPointer);
    this.capacity = size;
  }

  pop(){
    //decrease the length
    this.length--;
    //dont resize
    return memory.get(this.pointer + this.length +1);

  }

  get(index){
    if(index >= this.length){
      throw new Error('Error index greater than length');
    }
    return memory.get(this.pointer + index);
  }

  insert(index,value){
    if(this.length >= this.capacity){
      this.resize((this.length + 1)*SIZE_RATIO);
    }

    memory.copy(this.pointer + index+1,this.pointer + index,this.length - index);
    memory.set(this.pointer + index, value);
    this.length++;
  }


  remove(index){
    //copy all values after the insertion point back one
    memory.copy(this.pointer + index, this.pointer + index+1, this.length - index -1);
    this.length --;
    //decrease length

  }

}

function main(){

  Array.SIZE_RATIO = 3;
  
  //create an instance of the array class
  let arr = new Array();
  
  //add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  //   arr.push('tauhida');
  console.log('FIRST ITEM',arr.get(0));
  console.log(arr);
}
  
main();