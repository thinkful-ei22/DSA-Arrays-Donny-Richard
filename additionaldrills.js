'use strict';
//URLify a string

//input example: www.thinkful.com /tauh ida parv een
//expected output: tauhida%20parveen

const URLify = (somestring) =>{
  let newString ='';

  for(let i=0; i < somestring.length; i++){
    if(somestring[i]===' '){
      newString += '%20';
    } else{ 
      newString += somestring[i];
    }
  }
  return newString;

};

console.log(URLify('www.thinkful.com /tauh ida parv een'));

//time complexity : O(n) linear

//Filtering an array

const numArray = [1,2,3,5,6,7,8,9,10];

const filterArray = array =>{
  let filteredArray = [];
  for(let i=0; i < array.length; i++){
    if(array[i] >= 5){
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;

};

//time complexity : O(n) linear

// console.log(filterArray(numArray));

//Max sum in the array

const maxSum = array =>{

  let maxSum = 0;
  let sum = 0;

  for(let i=0; i < array.length; i++){
    sum += array[i];
    if( sum > maxSum){
      maxSum = sum;
    } 

  }

  return maxSum;

};

const testArray = [4,6,-3,5,-2,1];

// console.log(maxSum(testArray));
//linear O(n)



//Merge Arrays

const array1=[1, 3, 6, 8, 11] ;
const array2=[2, 3, 5, 8, 9, 10];

const mergeArray = (array1,array2) =>{
  let newArray = [];
  let index1=0;
  let index2=0;
 

  //for loop
  for(let i=0; i < array1.length + array2.length; i++){
    //console.log('array1', array1[index1], 'array2', array2[index2]);
    
    if(!array1[index1]){
      newArray.push(array2[index2]);
      index2++;
     
    }

    if(!array2[index2]){
      newArray.push(array1[index1]);
      index1++;
    }

    if(array2[index2] || array1[index1]){

      if(array1[index1] <= array2[index2]){
        newArray.push(array1[index1]);
        index1++;
      } else{
        newArray.push(array2[index2]);
        index2++;
      }
    }

  }

  return newArray;

};

//console.log(mergeArray(array1,array2));

//linear time complexity O(n)

const removeCharacters = (string, characters) =>{
  let newString ='';
  for(let i=0; i < string.length; i++){
    if(!characters.includes(string[i])){
      newString += string[i];
    }
  }
  return newString;
};

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//linear time complexity O(n)

//Products
// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]
const inputArray = [1, 3, 9, 4];

const products = array => {
  let returnArray = [];
  for(let i=0; i < array.length; i++) {
    let returnProduct = 1;
    for(let j=0; j < i; j++){
      returnProduct *= array[j];
    }
    for(let k=i+1; k < array.length; k++) {
      returnProduct *= array[k];
    }
    returnArray.push(returnProduct);
  }
  return returnArray;
};

console.log(products(inputArray));

// polynomial complexity O(n^2)

const input2DArray = 
  [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]];

// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

function arrayClone( arr ) {

  var i, copy;

  if( Array.isArray( arr ) ) {
    copy = arr.slice( 0 );
    for( i = 0; i < copy.length; i++ ) {
      copy[ i ] = arrayClone( copy[ i ] );
    }
    return copy;
  } else if( typeof arr === 'object' ) {
    throw 'Cannot clone array containing an object!';
  } else {
    return arr;
  }

}

const array2d = array => {
  
  const newArray = arrayClone(array);
  for(let i=0; i < array.length; i++) {
    for(let j=0; j < array[i].length; j++) {
      if(array[i][j] === 0) {
        for(let x=0; x<array[i].length; x++) {
          newArray[i][x] = 0;
        }
        for(let y=0; y<array.length; y++) {
          newArray[y][j] = 0;
        }
      }
    }
  }
  return newArray;
};

// console.log(array2d(input2DArray));

//polynomial O(n^3)

const stringRotate = (str1, str2) => {
  // return (str2 + str2).includes(str1);
  const cirlceString = str2+str2;
  for(let i=0; i < cirlceString.length - str1.length; i++) {
    if (cirlceString.slice(i,i+str1.length) === str1) {
      return true;
    }
  }
  return false;
};

//complexity O(1)
console.log(stringRotate('amazon', 'azonam'));
console.log(stringRotate('amazon', 'azonma'));